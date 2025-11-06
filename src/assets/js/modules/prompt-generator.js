// Prompt Generator Module
// Converts form data into detailed AI-ready prompts

class PromptGenerator {
  constructor() {
    this.template = null;
    this.formData = null;
  }

  /**
   * Main method to generate prompt from form data
   * @param {Object} formData - Collected form data from user
   * @returns {String} - Generated prompt in markdown format
   */
  async generate(formData) {
    this.formData = formData;
    
    // Load base template
    this.template = await this.loadTemplate();
    
    // Replace all placeholders with actual data
    let prompt = this.template;
    
    // Basic replacements
    prompt = this.replaceBasicInfo(prompt);
    prompt = this.replaceObjectiveInfo(prompt);
    prompt = this.replaceDesignInfo(prompt);
    prompt = this.replaceContentInfo(prompt);
    prompt = this.replaceStructureInfo(prompt);
    prompt = this.replaceTechnicalInfo(prompt);
    prompt = this.generateImplementationSteps(prompt);
    prompt = this.addAssetRequirements(prompt);
    
    return prompt;
  }

  /**
   * Load the base template
   */
  async loadTemplate() {
    try {
      const response = await fetch('/templates/base-template.md');
      return await response.text();
    } catch (error) {
      console.error('Error loading template:', error);
      return '';
    }
  }

  /**
   * Replace basic business information
   */
  replaceBasicInfo(prompt) {
    const date = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    return prompt
      .replace('{date}', date)
      .replace('{businessName}', this.formData.businessName || '[Business Name]')
      .replace('{industry}', this.getIndustryName())
      .replace('{targetAudience}', this.formData.targetAudience || '[Target Audience]')
      .replace('{language}', this.getLanguageName())
      .replace('{businessDescription}', this.formData.businessDescription || '[Business Description]');
  }

  /**
   * Replace objective-related information
   */
  replaceObjectiveInfo(prompt) {
    const objectiveMap = {
      'lead-generation': 'Lead Generation - Collect contact information from potential customers',
      'sales': 'Direct Sales - Drive immediate product/service purchases',
      'webinar': 'Webinar Registration - Register attendees for webinar or event',
      'product-launch': 'Product Launch - Announce and promote new product/feature',
      'awareness': 'Brand Awareness - Educate audience about brand/solution',
      'signup': 'Free Trial/Signup - Convert visitors to product users',
      'download': 'Content Download - Gate valuable content for lead capture',
      'event': 'Event Registration - Register attendees for physical/virtual event'
    };

    const objective = this.formData.objective || 'lead-generation';
    const objectiveDesc = objectiveMap[objective] || objectiveMap['lead-generation'];
    const successMetric = this.formData.successMetric || 'Not specified - focus on standard conversion optimization';

    return prompt
      .replace('{objective}', objective.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '))
      .replace('{objectiveDescription}', objectiveDesc)
      .replace('{successMetric}', successMetric);
  }

  /**
   * Replace design-related information
   */
  replaceDesignInfo(prompt) {
    const styleName = this.getStyleName();
    const styleData = this.getStyleCharacteristics();
    
    let colorDetails = '';
    if (this.formData.colorPreference === 'brand-colors' && this.formData.brandColors) {
      colorDetails = `**Custom Brand Colors:**
- Primary: ${this.formData.brandColors.primaryColor || '#1a1a1a'}
- Secondary: ${this.formData.brandColors.secondaryColor || '#4a4a4a'}
- Accent: ${this.formData.brandColors.accentColor || '#2563eb'}

Use these colors in place of Axtra's default accent colors, but maintain the grayscale foundation.`;
    } else if (this.formData.colorPreference === 'ai-suggest') {
      colorDetails = `Use Axtra's grayscale foundation with an accent color that fits the ${this.getIndustryName()} industry. Suggest an appropriate accent color based on industry standards and psychology.`;
    } else {
      colorDetails = `Use the complete Axtra Design System color palette:
- Grayscale foundation (blacks, grays, whites)
- Accent color: var(--color-accent) for CTAs and interactive elements
- Semantic colors for success, warning, error states as needed`;
    }

    const competitors = this.getCompetitorReferences();

    return prompt
      .replace('{designStyle}', styleName)
      .replace('{styleCharacteristics}', styleData.characteristics)
      .replace('{colorApproach}', styleData.colorApproach)
      .replace('{colorPaletteDetails}', colorDetails)
      .replace('{competitorReferences}', competitors);
  }

  /**
   * Replace content and messaging information
   */
  replaceContentInfo(prompt) {
    const mainHeadline = this.formData.mainHeadline || '[Your Compelling Headline Here]';
    const subHeadline = this.formData.subHeadline || '[Supporting sub-headline that expands on main message]';
    const ctaText = this.formData.ctaText || 'Get Started';
    const ctaStyle = this.formData.ctaStyle || 'primary';

    // Format value propositions
    const valueProps = this.formData.valuePropositions || [];
    const valuePropsFormatted = valueProps.length > 0
      ? valueProps.map((prop, idx) => `${idx + 1}. ${prop}`).join('\n')
      : '1. [Key benefit or value proposition]\n2. [Another compelling reason]\n3. [Third major benefit]';

    // Secondary CTA
    const secondaryCta = this.formData.secondaryCta
      ? `\n- **Secondary CTA:** "${this.formData.secondaryCta}"`
      : '';

    const secondaryCtaInstruction = this.formData.secondaryCta
      ? `- Add secondary CTA: "${this.formData.secondaryCta}"`
      : '';

    return prompt
      .replace('{mainHeadline}', mainHeadline)
      .replace('{subHeadline}', subHeadline)
      .replace('{valuePropositions}', valuePropsFormatted)
      .replace('{ctaText}', ctaText)
      .replace('{ctaStyle}', ctaStyle)
      .replace('{secondaryCta}', secondaryCta)
      .replace('{secondaryCtaInstruction}', secondaryCtaInstruction);
  }

  /**
   * Replace page structure and components
   */
  replaceStructureInfo(prompt) {
    const sections = this.determineSections();
    const socialProof = this.formatSocialProof();
    const additionalFeatures = this.formatAdditionalFeatures();
    const heroLayout = this.determineHeroLayout();

    return prompt
      .replace('{requiredSections}', sections)
      .replace('{socialProofElements}', socialProof)
      .replace('{additionalFeatures}', additionalFeatures)
      .replace('{heroLayout}', heroLayout);
  }

  /**
   * Replace technical specifications
   */
  replaceTechnicalInfo(prompt) {
    const formReqs = this.formatFormRequirements();
    const integrations = this.formData.integrations || 'None specified';
    const specialReqs = this.formData.specialRequirements || 'None';

    return prompt
      .replace('{formRequirements}', formReqs)
      .replace('{integrations}', integrations)
      .replace('{specialRequirements}', specialReqs);
  }

  /**
   * Generate detailed implementation steps
   */
  generateImplementationSteps(prompt) {
    const coreSections = this.generateCoreSectionInstructions();
    const socialProofInstructions = this.generateSocialProofInstructions();
    const formInstructions = this.generateFormInstructions();

    return prompt
      .replace('{coreSectionsInstructions}', coreSections)
      .replace('{socialProofInstructions}', socialProofInstructions)
      .replace('{formImplementationInstructions}', formInstructions);
  }

  /**
   * Add asset requirements
   */
  addAssetRequirements(prompt) {
    const images = this.generateImageRequirements();
    return prompt.replace('{imageRequirements}', images);
  }

  // Helper methods

  getIndustryName() {
    // This would lookup from industries.json
    const industryMap = {
      'saas': 'SaaS & Software',
      'ecommerce': 'E-commerce & Retail',
      'education': 'Education & E-Learning',
      'finance': 'Finance & Fintech',
      'healthcare': 'Healthcare & Wellness',
      'marketing': 'Marketing & Agency',
      'realestate': 'Real Estate & Property',
      'nonprofit': 'Non-Profit & Charity',
      'tech': 'Technology & Innovation',
      'food': 'Food & Beverage',
      'other': 'Other'
    };
    return industryMap[this.formData.industry] || 'General';
  }

  getLanguageName() {
    const langMap = {
      'en': 'English',
      'es': 'Spanish',
      'fr': 'French',
      'de': 'German',
      'it': 'Italian',
      'pt': 'Portuguese',
      'zh': 'Chinese',
      'ja': 'Japanese',
      'ko': 'Korean'
    };
    return langMap[this.formData.language] || this.formData.customLanguage || 'English';
  }

  getStyleName() {
    const styleMap = {
      'minimal': 'Minimal & Clean',
      'bold': 'Bold & Impactful',
      'professional': 'Professional & Corporate',
      'creative': 'Creative & Artistic',
      'elegant': 'Elegant & Sophisticated',
      'modern': 'Modern & Trendy',
      'playful': 'Playful & Fun',
      'technical': 'Technical & Data-Driven'
    };
    return styleMap[this.formData.designStyle] || 'Minimal & Clean';
  }

  getStyleCharacteristics() {
    const styles = {
      'minimal': {
        characteristics: 'Generous whitespace, limited color palette, clean typography, subtle animations',
        colorApproach: 'Monochrome with single accent color'
      },
      'bold': {
        characteristics: 'High contrast, large typography, strong CTAs, dynamic layouts',
        colorApproach: 'Vibrant colors with strong contrasts'
      },
      'professional': {
        characteristics: 'Conservative colors, structured layouts, trust indicators prominent',
        colorApproach: 'Blues and grays, subdued professional palette'
      },
      'creative': {
        characteristics: 'Unconventional layouts, custom illustrations, playful interactions',
        colorApproach: 'Varied, experimental color combinations'
      },
      'elegant': {
        characteristics: 'Premium aesthetics, refined typography, sophisticated palette',
        colorApproach: 'Muted tones with luxury accents'
      },
      'modern': {
        characteristics: 'Gradients, 3D elements, contemporary layouts, micro-interactions',
        colorApproach: 'Modern gradients and color combinations'
      },
      'playful': {
        characteristics: 'Rounded shapes, bright colors, illustrations, animated elements',
        colorApproach: 'Bright, saturated, happy colors'
      },
      'technical': {
        characteristics: 'Data visualizations, grid layouts, monospace fonts, dark mode',
        colorApproach: 'Dark backgrounds with syntax-inspired colors'
      }
    };
    return styles[this.formData.designStyle] || styles['minimal'];
  }

  getCompetitorReferences() {
    if (!this.formData.competitorReferences || this.formData.competitorReferences.length === 0) {
      return 'No specific competitor references provided. Use industry best practices for inspiration.';
    }

    let refs = 'Study these references for inspiration:\n';
    this.formData.competitorReferences.forEach(ref => {
      refs += `- ${ref}\n`;
    });

    if (this.formData.customCompetitor) {
      refs += `- ${this.formData.customCompetitor}\n`;
    }

    return refs;
  }

  determineSections() {
    const objective = this.formData.objective || 'lead-generation';
    const objectiveMap = {
      'lead-generation': ['Hero', 'Benefits', 'Lead Form', 'Testimonials', 'Logo Strip', 'CTA'],
      'sales': ['Hero', 'Features', 'Benefits', 'Pricing', 'Testimonials', 'FAQ', 'CTA'],
      'webinar': ['Hero', 'Benefits', 'How It Works', 'Speaker Bio', 'Testimonials', 'Registration Form'],
      'product-launch': ['Hero', 'Features', 'Demo/Video', 'Pricing', 'Early Bird Offer', 'FAQ', 'CTA'],
      'awareness': ['Hero', 'Problem/Solution', 'Statistics', 'Testimonials', 'Media Mentions', 'CTA'],
      'signup': ['Hero', 'Benefits', 'How It Works', 'Social Proof', 'Simple Form', 'CTA'],
      'download': ['Hero', 'Features', 'Benefits', 'Testimonials', 'Download Form', 'CTA'],
      'event': ['Hero', 'Event Details', 'Speakers', 'Agenda', 'Testimonials', 'Registration Form']
    };

    const sections = objectiveMap[objective] || objectiveMap['lead-generation'];
    return sections.map((s, i) => `${i + 1}. **${s}**`).join('\n');
  }

  formatSocialProof() {
    if (!this.formData.socialProofType || this.formData.socialProofType.length === 0) {
      return 'No social proof elements requested.';
    }

    let output = '';
    this.formData.socialProofType.forEach(type => {
      output += `- **${type.charAt(0).toUpperCase() + type.slice(1)}**`;
      if (type === 'testimonials' && this.formData.testimonialCount) {
        output += ` (${this.formData.testimonialCount} testimonials)`;
      }
      output += '\n';
    });

    return output;
  }

  formatAdditionalFeatures() {
    let features = '';
    
    if (this.formData.includePricing === 'yes') {
      features += '- Include pricing section with clear pricing table\n';
    } else if (this.formData.includePricing === 'contact') {
      features += '- Include "Contact for Pricing" section with lead form\n';
    }

    if (this.formData.keyFeatures && this.formData.keyFeatures.length > 0) {
      features += `- Feature highlights: ${this.formData.keyFeatures.join(', ')}\n`;
    }

    return features || 'No additional features specified.';
  }

  determineHeroLayout() {
    const style = this.formData.designStyle;
    if (style === 'minimal' || style === 'professional') {
      return 'centered';
    } else if (style === 'bold' || style === 'creative') {
      return 'split-screen with visual';
    }
    return 'centered with background';
  }

  formatFormRequirements() {
    if (!this.formData.formFields || this.formData.formFields.length === 0) {
      return 'No form required for this landing page.';
    }

    let formReqs = '**Form Fields:**\n';
    this.formData.formFields.forEach(field => {
      formReqs += `- ${field.charAt(0).toUpperCase() + field.slice(1)}\n`;
    });

    if (this.formData.customFormFields) {
      formReqs += `\n**Custom Fields:**\n${this.formData.customFormFields}\n`;
    }

    formReqs += '\n**Requirements:**\n';
    formReqs += '- Client-side validation\n';
    formReqs += '- Clear error messages\n';
    formReqs += '- Success state after submission\n';
    formReqs += '- Privacy policy link\n';

    return formReqs;
  }

  generateCoreSectionInstructions() {
    const objective = this.formData.objective || 'lead-generation';
    // This would be expanded based on objective and selected components
    return `Create each section following the Axtra Design System:
- Use consistent spacing (var(--spacing-24) between sections)
- Apply appropriate heading levels
- Include visual elements where specified
- Ensure mobile responsiveness
- Add proper ARIA labels`;
  }

  generateSocialProofInstructions() {
    if (!this.formData.socialProofType || this.formData.socialProofType.length === 0) {
      return 'No social proof section needed.';
    }

    return `Implement social proof elements:
- Use card components with proper styling
- Include placeholders for testimonials/logos
- Add star ratings if applicable
- Ensure responsive grid layout`;
  }

  generateFormInstructions() {
    if (!this.formData.formFields || this.formData.formFields.length === 0) {
      return 'No form implementation needed.';
    }

    return `Create lead capture form with:
- Form fields: ${this.formData.formFields.join(', ')}
- Validation for each field
- Submit button with loading state
- Success message display
- Error handling
- Privacy policy checkbox if required`;
  }

  generateImageRequirements() {
    let images = '**Placeholder Images Required:**\n\n';
    images += '1. **Hero Image/Visual** - High-quality, relevant to business\n';
    images += '2. **Feature Icons** - Simple, consistent style (SVG preferred)\n';
    
    if (this.formData.socialProofType && this.formData.socialProofType.includes('logos')) {
      images += '3. **Client/Partner Logos** - Grayscale, uniform size\n';
    }
    
    if (this.formData.socialProofType && this.formData.socialProofType.includes('testimonials')) {
      images += '4. **Customer Photos** - Professional headshots for testimonials\n';
    }

    images += '\n**Image Guidelines:**\n';
    images += '- Use placeholder services (unsplash.com, placeholder.com) during development\n';
    images += '- Optimize for web (WebP format, compressed)\n';
    images += '- Provide 2x versions for retina displays\n';
    images += '- Include descriptive alt text\n';

    return images;
  }
}

// Export for use in other modules
export default PromptGenerator;

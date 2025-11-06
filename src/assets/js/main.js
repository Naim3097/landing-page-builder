// Main JavaScript Entry Point
// Handles form state, navigation, and orchestrates all modules

// Global state
let currentStep = 0;
let formData = {};
let industries = [];
let styles = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', init);

async function init() {
  console.log('Initializing Axtra LP Builder...');
  
  // Load data files
  await loadData();
  
  // Setup event listeners
  setupEventListeners();
  
  // Initialize form fields
  initializeFormFields();
  
  console.log('Initialization complete');
}

// Load JSON data files
async function loadData() {
  try {
    console.log('Starting data load...');
    console.log('Current page location:', window.location.href);
    
    // Fetch using relative path from the HTML page location (src/index.html)
    console.log('Fetching industries.json...');
    const industriesRes = await fetch('../data/industries.json');
    console.log('Industries response status:', industriesRes.status, industriesRes.statusText);
    
    console.log('Fetching styles.json...');
    const stylesRes = await fetch('../data/styles.json');
    console.log('Styles response status:', stylesRes.status, stylesRes.statusText);
    
    if (!industriesRes.ok) {
      throw new Error(`Failed to load industries.json: ${industriesRes.status} ${industriesRes.statusText}`);
    }
    
    if (!stylesRes.ok) {
      throw new Error(`Failed to load styles.json: ${stylesRes.status} ${stylesRes.statusText}`);
    }
    
    const industriesData = await industriesRes.json();
    console.log('Industries data parsed:', industriesData);
    
    const stylesData = await stylesRes.json();
    console.log('Styles data parsed:', stylesData);
    
    industries = industriesData.industries;
    styles = stylesData.designStyles;
    
    console.log('Data loaded successfully:', industries.length, 'industries,', styles.length, 'styles');
    console.log('First industry:', industries[0]);
  } catch (error) {
    console.error('Error loading data:', error);
    console.error('Error details:', error.message, error.stack);
    alert('Error loading form data. Please check the console and refresh the page.');
  }
}

// Setup event listeners
function setupEventListeners() {
  // Industry selection
  const industrySelect = document.getElementById('industry');
  if (industrySelect) {
    industrySelect.addEventListener('change', handleIndustryChange);
  }
  
  // Color preference
  const colorRadios = document.querySelectorAll('input[name="colorPreference"]');
  colorRadios.forEach(radio => {
    radio.addEventListener('change', handleColorPreferenceChange);
  });
  
  // Language selection
  const languageSelect = document.getElementById('language');
  if (languageSelect) {
    languageSelect.addEventListener('change', handleLanguageChange);
  }
}

// Initialize form fields with data
function initializeFormFields() {
  console.log('Initializing form fields...');
  console.log('Industries available:', industries.length);
  console.log('Styles available:', styles.length);
  
  // Populate industry dropdown
  const industrySelect = document.getElementById('industry');
  console.log('Industry select element:', industrySelect);
  
  if (industrySelect && industries.length > 0) {
    console.log('Populating industry dropdown with', industries.length, 'options');
    industries.forEach(industry => {
      const option = document.createElement('option');
      option.value = industry.id;
      option.textContent = industry.name;
      industrySelect.appendChild(option);
      console.log('Added industry option:', industry.name);
    });
  } else {
    console.error('Cannot populate industry dropdown:', {
      elementFound: !!industrySelect,
      industriesLoaded: industries.length
    });
  }
  
  // Populate objective cards
  populateObjectiveOptions();
  
  // Populate style cards
  populateStyleOptions();
  
  // Initialize value propositions (start with 3)
  for (let i = 0; i < 3; i++) {
    addValueProp();
  }
  
  console.log('Form fields initialized');
}

// Populate objective selection
function populateObjectiveOptions() {
  const container = document.getElementById('objective-selector');
  if (!container) return;
  
  const objectives = [
    { value: 'lead-generation', label: 'Get Customer Enquiries', description: 'Collect contact details from interested customers' },
    { value: 'sales', label: 'Sell Products or Services', description: 'Complete sales directly through the page' },
    { value: 'signup', label: 'Get Sign-Ups', description: 'Have visitors register for your service or product' },
    { value: 'download', label: 'Offer Free Resources', description: 'Provide downloadable guides, catalogues, or brochures' },
    { value: 'webinar', label: 'Register for Event/Webinar', description: 'Get attendees to register for your event or training' },
    { value: 'product-launch', label: 'Launch New Product', description: 'Announce and promote your new product or service' },
    { value: 'awareness', label: 'Build Brand Awareness', description: 'Introduce your brand and what you do to new audiences' },
    { value: 'event', label: 'Physical Event Registration', description: 'Register attendees for conferences, workshops, or meetups' }
  ];
  
  objectives.forEach(obj => {
    const card = document.createElement('label');
    card.className = 'visual-option';
    card.innerHTML = `
      <input type="radio" name="objective" value="${obj.value}">
      <div class="visual-option-card">
        <div class="visual-option-title">${obj.label}</div>
        <div class="visual-option-description">${obj.description}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Populate style selection
function populateStyleOptions() {
  const container = document.getElementById('style-selector');
  if (!container || styles.length === 0) return;
  
  styles.forEach(style => {
    const card = document.createElement('label');
    card.className = 'visual-option';
    card.innerHTML = `
      <input type="radio" name="designStyle" value="${style.id}">
      <div class="visual-option-card">
        <div class="visual-option-title">${style.name}</div>
        <div class="visual-option-description">${style.description}</div>
        <div class="visual-option-meta">Examples: ${style.examples.join(', ')}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Handle industry change
function handleIndustryChange(e) {
  const industryId = e.target.value;
  const competitorSection = document.getElementById('competitor-section');
  const competitorList = document.getElementById('competitor-list');
  
  if (!industryId) {
    competitorSection.style.display = 'none';
    return;
  }
  
  const selectedIndustry = industries.find(ind => ind.id === industryId);
  
  if (selectedIndustry && selectedIndustry.competitors.length > 0) {
    competitorSection.style.display = 'block';
    competitorList.innerHTML = '';
    
    selectedIndustry.competitors.forEach(comp => {
      const card = document.createElement('label');
      card.className = 'competitor-card';
      card.innerHTML = `
        <input type="checkbox" name="competitorReferences" value="${comp.name}">
        <div class="competitor-name">${comp.name}</div>
        <div class="competitor-style">${comp.style}</div>
      `;
      competitorList.appendChild(card);
    });
  } else {
    competitorSection.style.display = 'none';
  }
}

// Handle color preference change
function handleColorPreferenceChange(e) {
  const brandColorsSection = document.getElementById('brand-colors-section');
  if (e.target.value === 'brand-colors') {
    brandColorsSection.classList.remove('hidden');
  } else {
    brandColorsSection.classList.add('hidden');
  }
}

// Handle language change
function handleLanguageChange(e) {
  const customLanguageSection = document.getElementById('custom-language-section');
  if (e.target.value === 'other') {
    customLanguageSection.classList.remove('hidden');
  } else {
    customLanguageSection.classList.add('hidden');
  }
}

// Add value proposition field
window.addValueProp = function() {
  const container = document.getElementById('value-props-container');
  const index = container.children.length;
  
  const field = document.createElement('div');
  field.className = 'repeatable-field';
  field.innerHTML = `
    <input type="text" class="form-input" name="valueProp[]" placeholder="Enter a key benefit or value proposition" data-index="${index}">
    ${index >= 3 ? '<button type="button" class="repeatable-remove" onclick="removeField(this)">Remove</button>' : ''}
  `;
  container.appendChild(field);
};

// Add key feature field
window.addKeyFeature = function() {
  const container = document.getElementById('key-features-container');
  const index = container.children.length;
  
  const field = document.createElement('div');
  field.className = 'repeatable-field';
  field.innerHTML = `
    <input type="text" class="form-input" name="keyFeature[]" placeholder="Enter a feature name" data-index="${index}">
    <button type="button" class="repeatable-remove" onclick="removeField(this)">Remove</button>
  `;
  container.appendChild(field);
};

// Remove repeatable field
window.removeField = function(button) {
  button.parentElement.remove();
};

// Start builder (hide welcome, show form)
window.startBuilder = function() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('form-container').classList.remove('hidden');
  goToStep(1);
};

// Navigate to specific step
function goToStep(step) {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('is-active'));
  
  // Show current step
  const stepElement = document.querySelector(`.form-step[data-step="${step}"]`);
  if (stepElement) {
    stepElement.classList.add('is-active');
    currentStep = step;
    updateStepIndicator();
    window.scrollTo(0, 0);
  }
}

// Next step
window.nextStep = function() {
  if (validateCurrentStep()) {
    saveCurrentStepData();
    
    if (currentStep === 7) {
      // Before review, generate summary
      generateReviewSummary();
    }
    
    goToStep(currentStep + 1);
  }
};

// Previous step
window.prevStep = function() {
  if (currentStep > 1) {
    goToStep(currentStep - 1);
  }
};

// Validate current step
function validateCurrentStep() {
  const stepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  if (!stepElement) return true;
  
  let isValid = true;
  
  // Get required fields in current step
  const requiredFields = stepElement.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup?.querySelector('.form-error');
    
    if (!field.value.trim()) {
      isValid = false;
      if (formGroup) formGroup.classList.add('has-error');
      if (errorElement) {
        errorElement.textContent = 'This field is required';
        errorElement.style.display = 'block';
      }
    } else {
      if (formGroup) formGroup.classList.remove('has-error');
      if (errorElement) errorElement.style.display = 'none';
    }
  });
  
  // Check radio groups
  const radioGroups = stepElement.querySelectorAll('input[type="radio"][required]');
  const checkedGroups = new Set();
  
  radioGroups.forEach(radio => {
    if (radio.checked) {
      checkedGroups.add(radio.name);
    }
  });
  
  // Value propositions validation (minimum 3)
  if (currentStep === 5) {
    const valueProps = document.querySelectorAll('input[name="valueProp[]"]');
    const filledProps = Array.from(valueProps).filter(input => input.value.trim()).length;
    
    if (filledProps < 3) {
      isValid = false;
      const errorElement = document.getElementById('valuePropositions-error');
      if (errorElement) {
        errorElement.textContent = 'Please add at least 3 value propositions';
        errorElement.style.display = 'block';
      }
    }
  }
  
  return isValid;
}

// Save current step data
function saveCurrentStepData() {
  const stepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  if (!stepElement) return;
  
  // Get all form inputs
  const inputs = stepElement.querySelectorAll('input, select, textarea');
  
  inputs.forEach(input => {
    if (input.type === 'checkbox') {
      if (!formData[input.name]) formData[input.name] = [];
      if (input.checked) {
        formData[input.name].push(input.value);
      }
    } else if (input.type === 'radio') {
      if (input.checked) {
        formData[input.name] = input.value;
      }
    } else if (input.name && input.name.includes('[]')) {
      // Array fields
      const baseName = input.name.replace('[]', '');
      if (!formData[baseName]) formData[baseName] = [];
      if (input.value.trim()) {
        formData[baseName].push(input.value.trim());
      }
    } else {
      formData[input.name] = input.value;
    }
  });
  
  console.log('Form data saved:', formData);
}

// Generate review summary
function generateReviewSummary() {
  const container = document.getElementById('review-summary');
  if (!container) return;
  
  container.innerHTML = `
    <div class="summary-section">
      <h3 class="summary-section-title">Business Information</h3>
      <div class="summary-item">
        <span class="summary-label">Business Name:</span>
        <span class="summary-value">${formData.businessName || 'N/A'}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Industry:</span>
        <span class="summary-value">${getIndustryName(formData.industry)}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Target Audience:</span>
        <span class="summary-value">${formData.targetAudience || 'N/A'}</span>
      </div>
    </div>

    <div class="summary-section">
      <h3 class="summary-section-title">Landing Page Details</h3>
      <div class="summary-item">
        <span class="summary-label">Objective:</span>
        <span class="summary-value">${formatObjectiveName(formData.objective)}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Design Style:</span>
        <span class="summary-value">${getStyleName(formData.designStyle)}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Main Headline:</span>
        <span class="summary-value">${formData.mainHeadline || 'N/A'}</span>
      </div>
    </div>

    <div class="summary-section">
      <h3 class="summary-section-title">Value Propositions</h3>
      <ul class="summary-list">
        ${formData.valueProp ? formData.valueProp.map(prop => `<li>${prop}</li>`).join('') : '<li>None</li>'}
      </ul>
    </div>
  `;
}

// Update step indicator
function updateStepIndicator() {
  const indicator = document.getElementById('current-step-indicator');
  if (indicator) {
    indicator.textContent = `Step ${currentStep} of 8`;
  }
}

// Generate prompt
window.generatePrompt = async function() {
  // Save last step data
  saveCurrentStepData();
  
  // Show loading
  document.getElementById('form-container').classList.add('hidden');
  document.getElementById('loading-state').classList.remove('hidden');
  
  // Generate prompt
  try {
    const generator = new PromptGenerator();
    const prompt = await generator.generate(formData);
    
    // Redirect to preview page with prompt
    localStorage.setItem('generatedPrompt', prompt);
    localStorage.setItem('formData', JSON.stringify(formData));
    
    setTimeout(() => {
      window.location.href = 'preview.html';
    }, 1500);
    
  } catch (error) {
    console.error('Error generating prompt:', error);
    alert('An error occurred while generating the prompt. Please try again.');
    document.getElementById('loading-state').classList.add('hidden');
    document.getElementById('form-container').classList.remove('hidden');
  }
};

// Helper functions
function getIndustryName(id) {
  const industry = industries.find(ind => ind.id === id);
  return industry ? industry.name : id;
}

function getStyleName(id) {
  const style = styles.find(s => s.id === id);
  return style ? style.name : id;
}

function formatObjectiveName(value) {
  if (!value) return 'N/A';
  return value.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// ===========================
// PROMPT GENERATOR CLASS
// ===========================

class PromptGenerator {
  constructor() {
    this.template = null;
    this.formData = null;
  }

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

  async loadTemplate() {
    try {
      const response = await fetch('../templates/base-template.md');
      return await response.text();
    } catch (error) {
      console.error('Error loading template:', error);
      return '';
    }
  }

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

  replaceDesignInfo(prompt) {
    const styleName = this.getStyleName();
    const styleData = this.getStyleCharacteristics();
    
    let colorDetails = '';
    if (this.formData.colorPreference === 'brand-colors' && this.formData.brandColors) {
      colorDetails = `**Custom Brand Colors:**
- Primary: ${this.formData.primaryColor || '#1a1a1a'}
- Secondary: ${this.formData.secondaryColor || '#4a4a4a'}
- Accent: ${this.formData.accentColor || '#2563eb'}

Use these colors in place of Axtra's default accent colors, but maintain the grayscale foundation.`;
    } else if (this.formData.colorPreference === 'ai-suggest') {
      colorDetails = `Use Axtra's grayscale foundation with an accent color that fits the ${this.getIndustryName()} industry. Suggest an appropriate accent color based on industry standards.`;
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

  replaceContentInfo(prompt) {
    const mainHeadline = this.formData.mainHeadline || '[Your Compelling Headline Here]';
    const subHeadline = this.formData.subHeadline || '[Supporting sub-headline]';
    const ctaText = this.formData.ctaText || 'Get Started';
    const ctaStyle = this.formData.ctaStyle || 'primary';

    const valueProps = this.formData.valueProp || [];
    const valuePropsFormatted = valueProps.length > 0
      ? valueProps.map((prop, idx) => `${idx + 1}. ${prop}`).join('\n')
      : '1. [Key benefit]\n2. [Another benefit]\n3. [Third benefit]';

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

  replaceStructureInfo(prompt) {
    const sections = this.determineSections();
    const socialProof = this.formatSocialProof();
    const additionalFeatures = this.formatAdditionalFeatures();
    const heroLayout = 'centered';

    return prompt
      .replace('{requiredSections}', sections)
      .replace('{socialProofElements}', socialProof)
      .replace('{additionalFeatures}', additionalFeatures)
      .replace('{heroLayout}', heroLayout);
  }

  replaceTechnicalInfo(prompt) {
    const formReqs = this.formatFormRequirements();
    const integrations = this.formData.integrations || 'None specified';
    const specialReqs = this.formData.specialRequirements || 'None';

    return prompt
      .replace('{formRequirements}', formReqs)
      .replace('{integrations}', integrations)
      .replace('{specialRequirements}', specialReqs);
  }

  generateImplementationSteps(prompt) {
    const coreSections = `Create each section following the Axtra Design System:
- Use consistent spacing (var(--spacing-24) between sections)
- Apply appropriate heading levels
- Include visual elements where specified
- Ensure mobile responsiveness
- Add proper ARIA labels`;

    const socialProofInstructions = this.formData.socialProofType && this.formData.socialProofType.length > 0
      ? `Implement social proof elements:
- Use card components with proper styling
- Include placeholders for testimonials/logos
- Add star ratings if applicable
- Ensure responsive grid layout`
      : 'No social proof section needed.';

    const formInstructions = this.formData.formFields && this.formData.formFields.length > 0
      ? `Create lead capture form with:
- Form fields: ${this.formData.formFields.join(', ')}
- Validation for each field
- Submit button with loading state
- Success message display
- Error handling
- Privacy policy checkbox if required`
      : 'No form implementation needed.';

    return prompt
      .replace('{coreSectionsInstructions}', coreSections)
      .replace('{socialProofInstructions}', socialProofInstructions)
      .replace('{formImplementationInstructions}', formInstructions);
  }

  addAssetRequirements(prompt) {
    let images = '**Placeholder Images Required:**\n\n';
    images += '1. **Hero Image/Visual** - High-quality, relevant to business\n';
    images += '2. **Feature Icons** - Simple, consistent style (SVG preferred)\n';
    
    if (this.formData.socialProofType && this.formData.socialProofType.includes('logos')) {
      images += '3. **Client/Partner Logos** - Grayscale, uniform size\n';
    }
    
    if (this.formData.socialProofType && this.formData.socialProofType.includes('testimonials')) {
      images += '4. **Customer Photos** - Professional headshots\n';
    }

    images += '\n**Image Guidelines:**\n';
    images += '- Use placeholder services during development\n';
    images += '- Optimize for web (WebP format)\n';
    images += '- Provide 2x versions for retina displays\n';
    images += '- Include descriptive alt text\n';

    return prompt.replace('{imageRequirements}', images);
  }

  getIndustryName() {
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
        characteristics: 'Generous whitespace, limited color palette, clean typography',
        colorApproach: 'Monochrome with single accent color'
      },
      'bold': {
        characteristics: 'High contrast, large typography, strong CTAs',
        colorApproach: 'Vibrant colors with strong contrasts'
      },
      'professional': {
        characteristics: 'Conservative colors, structured layouts, trust indicators',
        colorApproach: 'Blues and grays, subdued palette'
      },
      'creative': {
        characteristics: 'Unconventional layouts, custom illustrations, playful',
        colorApproach: 'Varied, experimental colors'
      },
      'elegant': {
        characteristics: 'Premium aesthetics, refined typography, sophisticated',
        colorApproach: 'Muted tones with luxury accents'
      },
      'modern': {
        characteristics: 'Gradients, 3D elements, contemporary layouts',
        colorApproach: 'Modern gradients and combinations'
      },
      'playful': {
        characteristics: 'Rounded shapes, bright colors, illustrations',
        colorApproach: 'Bright, saturated colors'
      },
      'technical': {
        characteristics: 'Data visualizations, grid layouts, monospace fonts',
        colorApproach: 'Dark backgrounds with syntax colors'
      }
    };
    return styles[this.formData.designStyle] || styles['minimal'];
  }

  getCompetitorReferences() {
    if (!this.formData.competitorReferences || this.formData.competitorReferences.length === 0) {
      return 'No specific competitor references provided.';
    }

    let refs = 'Study these references:\n';
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
      'webinar': ['Hero', 'Benefits', 'How It Works', 'Speaker Bio', 'Testimonials', 'Registration'],
      'product-launch': ['Hero', 'Features', 'Demo/Video', 'Pricing', 'Early Bird', 'FAQ', 'CTA'],
      'awareness': ['Hero', 'Problem/Solution', 'Statistics', 'Testimonials', 'Media', 'CTA'],
      'signup': ['Hero', 'Benefits', 'How It Works', 'Social Proof', 'Simple Form', 'CTA'],
      'download': ['Hero', 'Features', 'Benefits', 'Testimonials', 'Download Form', 'CTA'],
      'event': ['Hero', 'Event Details', 'Speakers', 'Agenda', 'Testimonials', 'Registration']
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
      output += `- **${type.charAt(0).toUpperCase() + type.slice(1)}**\n`;
    });

    return output;
  }

  formatAdditionalFeatures() {
    let features = '';
    
    if (this.formData.includePricing === 'yes') {
      features += '- Include pricing section with clear pricing table\n';
    } else if (this.formData.includePricing === 'contact') {
      features += '- Include "Contact for Pricing" section\n';
    }

    if (this.formData.keyFeature && this.formData.keyFeature.length > 0) {
      features += `- Feature highlights: ${this.formData.keyFeature.join(', ')}\n`;
    }

    return features || 'No additional features specified.';
  }

  formatFormRequirements() {
    if (!this.formData.formFields || this.formData.formFields.length === 0) {
      return 'No form required.';
    }

    let formReqs = '**Form Fields:**\n';
    this.formData.formFields.forEach(field => {
      formReqs += `- ${field.charAt(0).toUpperCase() + field.slice(1)}\n`;
    });

    formReqs += '\n**Requirements:**\n';
    formReqs += '- Client-side validation\n';
    formReqs += '- Clear error messages\n';
    formReqs += '- Success state after submission\n';

    return formReqs;
  }
}

// ========== TEMPLATE GALLERY ==========
// Gallery data - examples of template styles
const templateExamples = [
  {
    tag: 'SaaS & Software',
    title: 'Minimal Tech Platform',
    description: 'Clean, developer-focused design with emphasis on features and integrations. Perfect for technical products and B2B software.',
    features: ['Hero with product screenshot', 'Feature grid with icons', 'Integration showcase', 'Pricing table'],
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    tag: 'E-commerce & Retail',
    title: 'Bold Product Launch',
    description: 'High-impact visuals with strong calls-to-action. Designed to convert visitors into customers with urgency and social proof.',
    features: ['Full-width hero banner', 'Product showcase grid', 'Customer testimonials', 'Limited-time offers'],
    previewImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop'
  },
  {
    tag: 'Professional Services',
    title: 'Corporate & Trustworthy',
    description: 'Established, business-oriented design that builds credibility. Ideal for finance, consulting, and B2B services.',
    features: ['Professional hero', 'Trust indicators', 'Case studies', 'Team showcase'],
    previewImage: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&h=600&fit=crop'
  },
  {
    tag: 'Creative Agency',
    title: 'Bold & Creative',
    description: 'Eye-catching design with strong typography and vibrant accents. Perfect for agencies and creative businesses.',
    features: ['Dynamic hero section', 'Portfolio grid', 'Process timeline', 'Client logos'],
    previewImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
  },
  {
    tag: 'Education',
    title: 'Friendly & Accessible',
    description: 'Warm, approachable design that makes learning feel inviting. Great for courses, training, and educational content.',
    features: ['Course preview', 'Instructor bio', 'Curriculum overview', 'Student testimonials'],
    previewImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
  },
  {
    tag: 'Healthcare & Wellness',
    title: 'Calm & Trustworthy',
    description: 'Peaceful, professional design that conveys care and expertise. Perfect for health and wellness services.',
    features: ['Benefit-focused hero', 'How it works', 'Trust badges', 'Booking form'],
    previewImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
  }
];

let currentSlideIndex = 0;

// Initialize gallery
function initializeGallery() {
  const slider = document.getElementById('gallerySlider');
  const dotsContainer = document.getElementById('galleryDots');
  
  if (!slider || !dotsContainer) return;
  
  // Clear existing content
  slider.innerHTML = '';
  dotsContainer.innerHTML = '';
  
  // Create slides
  templateExamples.forEach((template, index) => {
    // Create slide
    const slide = document.createElement('div');
    slide.className = 'gallery-slide';
    if (index === 0) slide.classList.add('is-active');
    
    slide.innerHTML = `
      <div class="gallery-slide-content">
        <div class="gallery-preview">
          <img src="${template.previewImage}" alt="${template.title}" class="preview-image">
        </div>
        <div class="gallery-details">
          <span class="gallery-tag">${template.tag}</span>
          <h3 class="gallery-title">${template.title}</h3>
          <p class="gallery-description">${template.description}</p>
          <ul class="gallery-features">
            ${template.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    
    slider.appendChild(slide);
    
    // Create dot
    const dot = document.createElement('div');
    dot.className = 'gallery-dot';
    if (index === 0) dot.classList.add('is-active');
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });
}

// Open gallery
function openTemplateGallery() {
  const gallery = document.getElementById('templateGallery');
  if (!gallery) return;
  
  initializeGallery();
  gallery.classList.add('is-active');
  document.body.style.overflow = 'hidden';
  currentSlideIndex = 0;
}

// Close gallery
function closeTemplateGallery() {
  const gallery = document.getElementById('templateGallery');
  if (!gallery) return;
  
  gallery.classList.remove('is-active');
  document.body.style.overflow = '';
}

// Navigate slides
function nextSlide() {
  if (currentSlideIndex < templateExamples.length - 1) {
    goToSlide(currentSlideIndex + 1);
  }
}

function previousSlide() {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  }
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.gallery-slide');
  const dots = document.querySelectorAll('.gallery-dot');
  
  if (index < 0 || index >= slides.length) return;
  
  // Remove active classes
  slides[currentSlideIndex].classList.remove('is-active');
  slides[currentSlideIndex].classList.add('is-exiting');
  dots[currentSlideIndex].classList.remove('is-active');
  
  // Add active classes to new slide
  setTimeout(() => {
    slides[currentSlideIndex].classList.remove('is-exiting');
    slides[index].classList.add('is-entering');
    slides[index].classList.add('is-active');
    dots[index].classList.add('is-active');
    
    setTimeout(() => {
      slides[index].classList.remove('is-entering');
    }, 800);
  }, 50);
  
  currentSlideIndex = index;
  
  // Update navigation buttons
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  
  if (prevBtn) prevBtn.disabled = currentSlideIndex === 0;
  if (nextBtn) nextBtn.disabled = currentSlideIndex === slides.length - 1;
}

// Close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTemplateGallery();
  }
  if (e.key === 'ArrowLeft') {
    previousSlide();
  }
  if (e.key === 'ArrowRight') {
    nextSlide();
  }
});

// Close on overlay click
document.getElementById('templateGallery')?.addEventListener('click', (e) => {
  if (e.target.id === 'templateGallery') {
    closeTemplateGallery();
  }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

const gallerySlider = document.getElementById('gallerySlider');
if (gallerySlider) {
  gallerySlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  gallerySlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });
}

function handleSwipe() {
  const swipeThreshold = 50; // Minimum distance for swipe
  const horizontalDiff = touchEndX - touchStartX;
  const verticalDiff = Math.abs(touchEndY - touchStartY);
  
  // Only handle horizontal swipes (ignore if vertical scroll)
  if (verticalDiff < 50) {
    if (horizontalDiff > swipeThreshold) {
      // Swipe right - go to previous slide
      previousSlide();
    } else if (horizontalDiff < -swipeThreshold) {
      // Swipe left - go to next slide
      nextSlide();
    }
  }
}


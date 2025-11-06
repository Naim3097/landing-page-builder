// Form field configuration for the Landing Page Builder
// Defines all form fields, their validation rules, and dependencies

export const formConfig = {
  steps: [
    {
      id: 'industry',
      title: 'Industry & Market',
      description: 'Help us understand your market',
      fields: [
        {
          name: 'industry',
          label: 'Select Your Industry',
          type: 'select',
          required: true,
          placeholder: 'Choose an industry...',
          description: 'This helps us provide relevant competitor examples and best practices',
          dataSource: 'industries.json',
          validation: {
            required: 'Please select an industry'
          }
        },
        {
          name: 'competitorReferences',
          label: 'Competitor/Inspiration References',
          type: 'checkbox-list',
          required: false,
          description: 'Select competitors whose landing pages you admire (optional)',
          dependsOn: 'industry',
          maxSelection: 3
        },
        {
          name: 'customCompetitor',
          label: 'Add Custom Reference URL',
          type: 'url',
          required: false,
          placeholder: 'https://example.com',
          description: 'Any other website you\'d like to reference',
          validation: {
            pattern: /^https?:\/\/.+/,
            message: 'Please enter a valid URL'
          }
        }
      ]
    },
    {
      id: 'objective',
      title: 'Landing Page Objective',
      description: 'What should this landing page achieve?',
      fields: [
        {
          name: 'objective',
          label: 'Primary Goal',
          type: 'radio-cards',
          required: true,
          options: [
            {
              value: 'lead-generation',
              label: 'Lead Generation',
              description: 'Collect contact information from potential customers',
              icon: 'target'
            },
            {
              value: 'sales',
              label: 'Direct Sales',
              description: 'Sell a product or service directly',
              icon: 'shopping-cart'
            },
            {
              value: 'webinar',
              label: 'Webinar Registration',
              description: 'Register attendees for an upcoming webinar or event',
              icon: 'video'
            },
            {
              value: 'product-launch',
              label: 'Product Launch',
              description: 'Announce and promote a new product or feature',
              icon: 'rocket'
            },
            {
              value: 'awareness',
              label: 'Brand Awareness',
              description: 'Educate visitors about your brand or solution',
              icon: 'megaphone'
            },
            {
              value: 'signup',
              label: 'Free Trial/Signup',
              description: 'Get users to sign up for your product or service',
              icon: 'user-plus'
            },
            {
              value: 'download',
              label: 'Content Download',
              description: 'Offer ebook, whitepaper, or resource download',
              icon: 'download'
            },
            {
              value: 'event',
              label: 'Event Registration',
              description: 'Register attendees for a conference or meetup',
              icon: 'calendar'
            }
          ],
          validation: {
            required: 'Please select an objective'
          }
        },
        {
          name: 'successMetric',
          label: 'How will you measure success?',
          type: 'text',
          required: false,
          placeholder: 'e.g., 100 signups in first month, 5% conversion rate',
          description: 'Optional: helps us optimize the page design'
        }
      ]
    },
    {
      id: 'style',
      title: 'Design Style',
      description: 'Choose your visual direction',
      fields: [
        {
          name: 'designStyle',
          label: 'Select Design Style',
          type: 'visual-selector',
          required: true,
          dataSource: 'styles.json',
          validation: {
            required: 'Please select a design style'
          }
        },
        {
          name: 'colorPreference',
          label: 'Color Preference',
          type: 'radio',
          required: false,
          options: [
            { value: 'axtra-default', label: 'Use Axtra grayscale system (recommended)' },
            { value: 'brand-colors', label: 'I will provide brand colors' },
            { value: 'ai-suggest', label: 'Let AI suggest colors based on industry' }
          ],
          default: 'axtra-default'
        },
        {
          name: 'brandColors',
          label: 'Brand Colors',
          type: 'color-inputs',
          required: false,
          dependsOn: { field: 'colorPreference', value: 'brand-colors' },
          fields: [
            { name: 'primaryColor', label: 'Primary Color', type: 'color' },
            { name: 'secondaryColor', label: 'Secondary Color', type: 'color' },
            { name: 'accentColor', label: 'Accent Color', type: 'color' }
          ]
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Details',
      description: 'Tell us about your business',
      fields: [
        {
          name: 'businessName',
          label: 'Business/Product Name',
          type: 'text',
          required: true,
          placeholder: 'Acme Inc.',
          validation: {
            required: 'Business name is required',
            minLength: 2,
            maxLength: 100
          }
        },
        {
          name: 'businessDescription',
          label: 'Business Description',
          type: 'textarea',
          required: true,
          placeholder: 'Describe what your business does in 2-3 sentences...',
          rows: 4,
          validation: {
            required: 'Please describe your business',
            minLength: 50,
            maxLength: 500
          }
        },
        {
          name: 'targetAudience',
          label: 'Target Audience',
          type: 'textarea',
          required: true,
          placeholder: 'Who is your ideal customer? (e.g., Small business owners, Marketing managers at tech companies)',
          rows: 3,
          validation: {
            required: 'Please describe your target audience',
            minLength: 20,
            maxLength: 300
          }
        },
        {
          name: 'language',
          label: 'Primary Language',
          type: 'select',
          required: true,
          default: 'en',
          options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' },
            { value: 'de', label: 'German' },
            { value: 'it', label: 'Italian' },
            { value: 'pt', label: 'Portuguese' },
            { value: 'zh', label: 'Chinese' },
            { value: 'ja', label: 'Japanese' },
            { value: 'ko', label: 'Korean' },
            { value: 'other', label: 'Other' }
          ],
          validation: {
            required: 'Please select a language'
          }
        },
        {
          name: 'customLanguage',
          label: 'Specify Language',
          type: 'text',
          required: false,
          dependsOn: { field: 'language', value: 'other' },
          placeholder: 'Enter language name'
        }
      ]
    },
    {
      id: 'content',
      title: 'Content & Messaging',
      description: 'Define your key messages',
      fields: [
        {
          name: 'mainHeadline',
          label: 'Main Headline',
          type: 'text',
          required: true,
          placeholder: 'e.g., "Build Landing Pages in Minutes, Not Hours"',
          description: 'The primary headline visitors will see first',
          validation: {
            required: 'Main headline is required',
            maxLength: 100
          }
        },
        {
          name: 'subHeadline',
          label: 'Sub-Headline',
          type: 'text',
          required: false,
          placeholder: 'Supporting text that expands on the main headline',
          maxLength: 200
        },
        {
          name: 'valuePropositions',
          label: 'Key Value Propositions',
          type: 'repeatable',
          required: true,
          min: 3,
          max: 6,
          placeholder: 'Enter a key benefit or value proposition',
          description: 'Add 3-6 main benefits or reasons to choose your product/service',
          validation: {
            required: 'Add at least 3 value propositions'
          }
        },
        {
          name: 'ctaText',
          label: 'Call-to-Action Text',
          type: 'text',
          required: true,
          placeholder: 'e.g., "Get Started Free", "Book a Demo", "Download Now"',
          validation: {
            required: 'CTA text is required',
            maxLength: 30
          }
        },
        {
          name: 'ctaStyle',
          label: 'CTA Style',
          type: 'radio',
          required: true,
          options: [
            { value: 'primary', label: 'Primary Button (Solid)' },
            { value: 'outline', label: 'Outline Button' },
            { value: 'link', label: 'Text Link' }
          ],
          default: 'primary'
        },
        {
          name: 'secondaryCta',
          label: 'Secondary CTA (Optional)',
          type: 'text',
          required: false,
          placeholder: 'e.g., "Learn More", "Watch Demo"'
        }
      ]
    },
    {
      id: 'features',
      title: 'Social Proof & Features',
      description: 'Build credibility with your audience',
      fields: [
        {
          name: 'socialProofType',
          label: 'Include Social Proof',
          type: 'checkbox-group',
          required: false,
          options: [
            { value: 'testimonials', label: 'Customer Testimonials' },
            { value: 'logos', label: 'Client/Partner Logos' },
            { value: 'stats', label: 'Key Statistics' },
            { value: 'reviews', label: 'Reviews/Ratings' },
            { value: 'case-studies', label: 'Case Studies' },
            { value: 'media', label: 'Press/Media Mentions' }
          ]
        },
        {
          name: 'testimonialCount',
          label: 'Number of Testimonials',
          type: 'number',
          required: false,
          dependsOn: { field: 'socialProofType', includes: 'testimonials' },
          min: 1,
          max: 10,
          default: 3
        },
        {
          name: 'keyFeatures',
          label: 'Key Features to Highlight',
          type: 'repeatable',
          required: false,
          min: 0,
          max: 8,
          placeholder: 'Enter a feature name',
          description: 'Add main features you want to showcase (optional)'
        },
        {
          name: 'includePricing',
          label: 'Include Pricing Section',
          type: 'radio',
          required: true,
          options: [
            { value: 'yes', label: 'Yes, show pricing' },
            { value: 'contact', label: 'Show "Contact for Pricing"' },
            { value: 'no', label: 'No pricing section' }
          ],
          default: 'no'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Preferences',
      description: 'Any specific requirements?',
      fields: [
        {
          name: 'formFields',
          label: 'Lead Form Fields (if applicable)',
          type: 'checkbox-group',
          required: false,
          options: [
            { value: 'email', label: 'Email (required)', checked: true, disabled: true },
            { value: 'name', label: 'Full Name' },
            { value: 'company', label: 'Company Name' },
            { value: 'phone', label: 'Phone Number' },
            { value: 'message', label: 'Message/Comments' },
            { value: 'custom', label: 'Custom Fields (specify below)' }
          ]
        },
        {
          name: 'customFormFields',
          label: 'Custom Form Fields',
          type: 'textarea',
          required: false,
          dependsOn: { field: 'formFields', includes: 'custom' },
          placeholder: 'List any custom fields needed...',
          rows: 3
        },
        {
          name: 'integrations',
          label: 'Required Integrations',
          type: 'text',
          required: false,
          placeholder: 'e.g., Mailchimp, HubSpot, Google Analytics',
          description: 'Any tools or platforms the page should integrate with'
        },
        {
          name: 'specialRequirements',
          label: 'Special Requirements or Notes',
          type: 'textarea',
          required: false,
          placeholder: 'Any additional requirements, accessibility needs, or specific instructions...',
          rows: 4
        }
      ]
    },
    {
      id: 'review',
      title: 'Review & Generate',
      description: 'Review your inputs and generate the prompt',
      type: 'summary'
    }
  ],

  // Validation rules
  validation: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    url: /^https?:\/\/.+\..+/,
    phone: /^[\d\s\-\+\(\)]+$/,
    color: /^#[0-9A-F]{6}$/i
  }
};

export default formConfig;

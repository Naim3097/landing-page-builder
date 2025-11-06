# Axtra Landing Page Service# Axtra Landing Page Builder



A professional landing page requirements collection system that generates comprehensive project briefs for design teams.A sophisticated form-based builder that collects requirements from clients and generates detailed AI prompts for creating custom landing pages.



## 🚀 Live Demo## 🎯 Project Overview



Visit: [https://naim3097.github.io/landing-page-builder/](https://naim3097.github.io/landing-page-builder/)This tool bridges the gap between client requirements and AI-assisted landing page development. Users fill out a structured form with their business needs, preferences, and objectives. The system then processes this input and generates a comprehensive, detailed prompt that can be used with AI agents to build a complete landing page.



## 📋 Overview## 🏗️ Project Structure



Axtra Landing Page Service helps Malaysian business owners define their landing page requirements through an intuitive 8-step form. The system collects business details, design preferences, and content requirements, then generates a detailed project brief for our design team.```

axtra-lp-builder/

### Key Features├── docs/                          # Documentation

│   ├── project-overview.md        # Detailed project specs

- **8-Step Guided Form** - Easy-to-follow process for collecting all necessary information│   ├── user-flow.md              # User journey and flow

- **Template Gallery** - View design examples with elegant book-flip animations│   └── prompt-templates.md        # Prompt generation templates

- **Malaysian Business Ready** - Language options include Bahasa Malaysia, localized examples├── src/                           # Source code

- **Axtra Design System** - Minimal, black & white aesthetic with sophisticated interactions│   ├── assets/                    # Static assets

- **Comprehensive Output** - Generates detailed project briefs with technical specifications│   │   ├── css/

│   │   │   ├── design-tokens.css  # Design tokens from designtoken.md

## 🎨 Design Philosophy│   │   │   ├── components.css     # Reusable components

│   │   │   └── builder.css        # Builder-specific styles

**"Colouring Your Business"** - Axtra maintains a sophisticated black & white brand while showcasing clients' vibrant, colorful work. The template gallery embodies this concept with grayscale-to-color reveal animations.│   │   └── js/

│   │       ├── config/

## 🛠️ Technology Stack│   │       │   ├── form-fields.js       # Form configuration

│   │       │   └── industry-data.js     # Industry & competitor data

- **Frontend**: Vanilla JavaScript (no dependencies)│   │       ├── modules/

- **Styling**: CSS3 with custom properties (Axtra Design System)│   │       │   ├── form-handler.js      # Form logic & validation

- **Data**: JSON-based configuration files│   │       │   ├── prompt-generator.js  # Converts input to prompts

- **Deployment**: GitHub Pages│   │       │   └── data-processor.js    # Data transformation logic

│   │       └── main.js                  # Main application entry

## 🚀 Getting Started│   ├── index.html                 # Builder interface

│   └── preview.html               # Prompt preview/output page

### Local Development├── templates/                     # Prompt templates

│   ├── base-template.md          # Base prompt structure

1. **Clone the repository**│   ├── industry-templates/       # Industry-specific templates

```bash│   └── objective-templates/      # Objective-based templates

git clone https://github.com/Naim3097/landing-page-builder.git├── data/                          # Reference data

cd landing-page-builder│   ├── industries.json           # Industry categories & competitors

```│   ├── styles.json               # Design style options

│   └── components.json           # Available LP components

2. **Start a local server**├── designsystem.md               # Design system reference

```bash├── designtoken.md                # Design tokens reference

# Using Python 3└── README.md                     # This file

python -m http.server 8000```



# Using Node.js## 🔑 Key Features

npx http-server -p 8000

```### 1. **Multi-Step Form Builder**

- Industry selection with competitor reference suggestions

3. **Open in browser**- Landing page objective (sales, lead gen, webinar, product launch, etc.)

```- Design style preferences (minimal, bold, professional, creative, etc.)

http://localhost:8000- Language and localization options

```- Business details collection

- Target audience definition

The root `index.html` will automatically redirect to `src/index.html`.- Key messaging and value propositions

- CTA preferences

## 📖 User Flow

### 2. **Intelligent Data Processing**

1. **Welcome Screen** - Introduction to the service- Validates user inputs

2. **Step 1: Industry** - Select business industry with competitor examples- Processes selections into structured data

3. **Step 2: Objective** - Define primary goal (leads, sales, sign-ups)- Matches industry with relevant competitors

4. **Step 3: Design Style** - Choose design direction + view template gallery- Applies style preferences to design recommendations

5. **Step 4: Business Details** - Company name, description, target audience- Generates component suggestions based on objectives

6. **Step 5: Content** - Headlines, benefits, call-to-action text

7. **Step 6: Social Proof** - Testimonials, logos, statistics options### 3. **Prompt Generation Engine**

8. **Step 7: Technical** - Form fields, integrations, special requirements- Converts form data into detailed, structured prompts

9. **Step 8: Review** - Summary of all inputs before submission- Includes technical specifications (HTML structure, CSS, components)

10. **Output** - Detailed project brief with implementation steps- Provides content guidelines and copy suggestions

- Specifies design system usage (Axtra tokens and components)

## 🎯 Template Gallery- Generates step-by-step implementation instructions



The gallery showcases 6 template examples across different industries with:### 4. **Output Delivery**

- Full-screen modal with book-flip animations- Displays generated prompt in formatted view

- Grayscale to color reveal on hover ("Colouring Your Business")- Copy-to-clipboard functionality

- Keyboard navigation (← → arrows, Esc to close)- Downloadable prompt as markdown file

- Responsive design- Email delivery option (future enhancement)



## 📊 Data Files## 🎨 Design System Integration



### industries.jsonThe builder uses the **Axtra Design System** for its own interface, demonstrating the design quality that will be used in generated landing pages:

11 industry categories with 35+ competitor examples

- **Design Tokens**: All colors, typography, spacing from `designtoken.md`

### styles.json- **Components**: Buttons, forms, cards following `designsystem.md`

8 design style options from Minimal to Editorial- **Minimal & Professional**: Grayscale foundation with strategic accent colors



### components.json## 🚀 User Flow

14 landing page component types with variants

1. **Welcome Screen** → Brief intro and start button

## 🎨 Design System2. **Industry Selection** → Choose industry + view competitor examples

3. **Objective Definition** → Select landing page goal

Built on the **Axtra Design System**:4. **Style Preferences** → Choose design direction

- Grayscale foundation5. **Business Details** → Company info, branding, assets

- Strategic accent colors6. **Content Input** → Messaging, value props, CTAs

- Consistent spacing scale7. **Technical Preferences** → Features, integrations, special requirements

- Typography system8. **Review & Generate** → Preview inputs and generate prompt

- CSS custom properties9. **Prompt Output** → View, copy, or download the generated prompt



See `designsystem.md` and `designtoken.md` for complete documentation.## 🛠️ Technology Stack



## 📝 Generated Output- **HTML5**: Semantic markup

- **CSS3**: Custom properties (design tokens), Grid, Flexbox

The system generates a comprehensive Markdown brief including:- **Vanilla JavaScript**: No frameworks, modular ES6+ code

- Business context and objectives- **JSON**: Data storage for industries, styles, templates

- Design specifications

- Content structure## 📋 Form Fields Configuration

- Technical requirements

- Implementation steps (9 detailed steps)### Core Fields:

- Quality checklist (12 items)1. **Industry** (dropdown with search)

2. **Landing Page Objective** (radio/cards)

## 🔒 Privacy & Data3. **Design Style** (visual selector)

4. **Language** (dropdown)

- All data stored in browser's localStorage5. **Business Name** (text)

- No server-side processing6. **Business Description** (textarea)

- No data transmitted externally7. **Target Audience** (textarea)

- Users can download their brief as Markdown8. **Key Messages** (repeatable text fields)

9. **Unique Value Propositions** (repeatable text fields)

## 📄 License10. **Call-to-Action Text** (text)

11. **CTA Type** (button style selector)

© 2025 Axtra. All rights reserved.12. **Social Proof** (options: testimonials, logos, stats)

13. **Special Requirements** (textarea)

---

## 🎯 Prompt Output Structure

**Built with ❤️ by Axtra Team**

The generated prompt will include:

*Colouring Your Business*

```
# Landing Page Build Request

## Business Context
[Company name, industry, target audience]

## Landing Page Objective
[Specific goal with success metrics]

## Design Direction
[Style preferences, competitor references, Axtra design system usage]

## Content Structure
[Sections, components, messaging hierarchy]

## Technical Specifications
[HTML structure, CSS approach, responsive requirements]

## Detailed Implementation Steps
[Step-by-step guide for AI agent to build the page]

## Assets & Resources
[Required images, icons, copy, design tokens to use]
```

## 📝 Development Phases

### Phase 1: Foundation (Current)
- Project structure setup
- Documentation and planning
- Data models and configuration

### Phase 2: Core Builder
- HTML form interface
- CSS styling with Axtra design system
- Form validation and handling

### Phase 3: Processing Engine
- Data transformation logic
- Prompt generation templates
- Output formatting

### Phase 4: Enhancement
- Preview functionality
- Export options
- Refinements and polish

## 🎓 For Developers

This project demonstrates:
- Clean, modular JavaScript architecture
- CSS custom properties and design tokens
- Form handling and validation best practices
- Template-based content generation
- Design system implementation

## 📄 License

Internal tool for Axtra projects.

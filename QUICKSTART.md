# Quick Start - Axtra Landing Page Builder

## 🚀 Get Started in 3 Steps

### 1. Open the Builder
Navigate to `src/index.html` in your browser or set up a local server.

### 2. Fill Out the Form
Complete the 8-step form with your landing page requirements:
- Industry & Market
- Landing Page Objective
- Design Style
- Business Details
- Content & Messaging
- Social Proof & Features
- Technical Preferences
- Review & Generate

### 3. Get Your Prompt
Copy the generated prompt and use it with any AI coding assistant to build your landing page!

---

## 📁 Project Structure Overview

```
axtra-lp-builder/
├── data/                    # JSON data files
│   ├── industries.json      # Industry definitions & competitors
│   ├── styles.json          # Design style options
│   └── components.json      # Component specifications
├── src/                     # Source code
│   ├── assets/
│   │   ├── css/            # Stylesheets
│   │   └── js/             # JavaScript modules
│   ├── index.html          # Main builder interface
│   └── preview.html        # Prompt output page
├── templates/              # Prompt templates
├── docs/                   # Documentation
├── designsystem.md        # Design system reference
└── designtoken.md         # Design tokens
```

---

## 🎯 Key Features

✅ **8-Step Guided Form** - Structured questions to collect all necessary information

✅ **Industry-Specific Data** - Competitor references and best practices by industry

✅ **Design System Integration** - Uses Axtra Design System for professional UI

✅ **Smart Prompt Generation** - Converts inputs into comprehensive, actionable prompts

✅ **Multiple Export Options** - Copy, download, or print your prompt

✅ **Mobile Responsive** - Works on all devices

---

## 💻 Running the Builder

### Option 1: Direct File Access
Simply open `src/index.html` in your browser.

**Note:** Some browsers may restrict loading JSON files from `file://` protocol. If you encounter issues, use Option 2.

### Option 2: Local Server (Recommended)

**Using Python:**
```bash
cd "axtra LP builder/src"
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using Node.js:**
```bash
cd "axtra LP builder/src"
npx serve
```

**Using VS Code:**
Install "Live Server" extension and right-click `index.html` → "Open with Live Server"

---

## 📝 Usage Example

### Scenario: SaaS Company Landing Page

**Step 1 - Industry:**
- Industry: SaaS & Software
- Competitors: Stripe, Notion

**Step 2 - Objective:**
- Objective: Free Trial/Signup
- Success: 5% conversion rate

**Step 3 - Style:**
- Design Style: Minimal & Clean
- Colors: Axtra default

**Step 4 - Business:**
- Name: TaskFlow
- Description: Project management for small teams
- Audience: Small business owners, 5-20 employees

**Step 5 - Content:**
- Headline: "Project Management That Actually Gets Used"
- Value Props: Simple setup, Real-time collaboration, No training needed
- CTA: "Start Free Trial"

**Step 6 - Social Proof:**
- Testimonials, Stats, Logos
- Pricing: Yes, show pricing

**Step 7 - Technical:**
- Form: Email, Name, Company
- Integrations: Stripe, Google Analytics

**Step 8 - Review & Generate!**

---

## 🎨 Design System Usage

The builder itself demonstrates the Axtra Design System:

### Colors
```css
/* Used throughout */
--color-primary: #1a1a1a
--color-accent: #2563eb
--color-surface: #fafafa
```

### Typography
```css
/* Headings */
font-family: var(--font-primary)
font-weight: var(--font-semibold)

/* Body */
color: var(--color-text-secondary)
line-height: var(--leading-normal)
```

### Components
- Buttons with hover states
- Form inputs with focus styles
- Cards with subtle shadows
- Progress indicators

---

## 🔧 Customization

### Adding Industries
Edit `data/industries.json`:
```json
{
  "id": "your-industry",
  "name": "Your Industry Name",
  "description": "Industry description",
  "competitors": [...],
  "commonComponents": [...]
}
```

### Adding Design Styles
Edit `data/styles.json`:
```json
{
  "id": "your-style",
  "name": "Style Name",
  "description": "Style description",
  "characteristics": [...],
  "examples": [...]
}
```

### Modifying Prompt Template
Edit `templates/base-template.md` to change the output structure.

---

## 📤 Using Generated Prompts

### With AI Coding Assistants

1. **Copy the prompt** from the result page

2. **Paste into AI chat:**
   ```
   [Paste your entire generated prompt here]
   ```

3. **The AI will build:**
   - Complete HTML structure
   - Styled with Axtra Design System
   - All specified sections
   - Responsive design
   - Accessibility features

4. **Review and refine** as needed

### Manual Implementation

You can also use the prompt as a detailed specification document for manual development.

---

## 🐛 Troubleshooting

### "Industry dropdown is empty"
- Ensure `data/industries.json` is accessible
- Check browser console for errors
- Use a local server instead of file:// protocol

### "Cannot generate prompt"
- Verify all required fields are filled
- Check browser console for errors
- Ensure localStorage is enabled

### "Styles not loading"
- Check CSS file paths in HTML
- Verify all CSS files exist in `src/assets/css/`
- Clear browser cache

---

## 📚 Additional Resources

- **Design System:** `designsystem.md` - Complete design system documentation
- **Design Tokens:** `designtoken.md` - All CSS variables and usage
- **User Flow:** `docs/user-flow.md` - Detailed user journey
- **Project Overview:** `docs/project-overview.md` - Getting started guide

---

## 🎓 Best Practices

### For Users:
1. ✅ Prepare your content before starting
2. ✅ Review competitor examples for inspiration
3. ✅ Be specific in your descriptions
4. ✅ Use the review step to double-check everything
5. ✅ Save your generated prompt for records

### For Developers:
1. ✅ Use design tokens for all styling
2. ✅ Keep components modular and reusable
3. ✅ Validate all user inputs
4. ✅ Test on multiple devices/browsers
5. ✅ Document any customizations

---

## 🚀 Next Steps

1. **Try it out:** Build your first landing page prompt
2. **Customize:** Adapt it for your specific needs
3. **Integrate:** Add industry-specific data
4. **Enhance:** Add new features (templates, save drafts, etc.)
5. **Deploy:** Make it accessible to your team

---

## 💡 Tips for Success

**Getting the Best Prompts:**
- Be specific about your target audience
- Provide concrete examples in text fields
- Choose competitors that match your desired quality level
- Include 4-5 value propositions for best results
- Review and edit before generating

**Using with AI Agents:**
- The more specific your inputs, the better the AI output
- You can ask the AI to adjust specific sections
- Request multiple variations if needed
- Iterate based on results

---

**Ready to build amazing landing pages? Open `src/index.html` and get started! 🚀**

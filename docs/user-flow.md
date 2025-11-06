# User Flow - Axtra Landing Page Builder

## Overview
This document outlines the complete user journey through the Axtra Landing Page Builder.

---

## Flow Diagram

```
┌─────────────────┐
│  Welcome Screen │
│  - Introduction │
│  - Value Props  │
│  - Start Button │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────────────┐
│              Multi-Step Form                      │
├─────────────────────────────────────────────────┤
│                                                   │
│  Step 1: Industry & Market                      │
│  ├─ Select industry                             │
│  ├─ Choose competitor references               │
│  └─ Add custom reference URL                   │
│                                                   │
│  Step 2: Landing Page Objective                │
│  ├─ Select primary goal                        │
│  └─ Define success metric                      │
│                                                   │
│  Step 3: Design Style                          │
│  ├─ Choose design style                        │
│  └─ Set color preference                       │
│                                                   │
│  Step 4: Business Details                      │
│  ├─ Business name                              │
│  ├─ Business description                       │
│  ├─ Target audience                            │
│  └─ Language                                    │
│                                                   │
│  Step 5: Content & Messaging                   │
│  ├─ Main headline                              │
│  ├─ Sub-headline                               │
│  ├─ Value propositions (3-6)                  │
│  ├─ CTA text & style                          │
│  └─ Secondary CTA                              │
│                                                   │
│  Step 6: Social Proof & Features               │
│  ├─ Select social proof types                 │
│  ├─ Add key features                          │
│  └─ Pricing section preference                │
│                                                   │
│  Step 7: Technical Preferences                 │
│  ├─ Form field requirements                   │
│  ├─ Integrations                               │
│  └─ Special requirements                       │
│                                                   │
│  Step 8: Review & Generate                     │
│  ├─ Review all inputs                         │
│  └─ Generate button                            │
│                                                   │
└────────┬────────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│ Loading State   │
│ (Processing)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Result Screen  │
│  - Full prompt  │
│  - Copy button  │
│  - Download     │
│  - Print        │
└─────────────────┘
```

---

## Detailed User Journey

### 1. Landing (Welcome Screen)

**User sees:**
- Welcome message
- Brief description of what the tool does
- Key features/benefits
- Prominent "Start Building" CTA

**User action:**
- Clicks "Start Building" button

**System response:**
- Hides welcome screen
- Shows Step 1 of the form
- Displays progress indicator

---

### 2. Industry Selection (Step 1)

**User input:**
- Selects industry from dropdown
- (Optional) Checks competitor references that appear
- (Optional) Adds custom reference URL

**Validation:**
- Industry selection is required
- URL format validated if provided

**Navigation:**
- "Continue →" button to proceed

---

### 3. Objective Definition (Step 2)

**User input:**
- Selects landing page objective from visual cards
- (Optional) Enters success metric

**Available objectives:**
- Lead Generation
- Direct Sales
- Webinar Registration
- Product Launch
- Brand Awareness
- Free Trial/Signup
- Content Download
- Event Registration

**Navigation:**
- "← Back" to previous step
- "Continue →" to next step

---

### 4. Design Style Selection (Step 3)

**User input:**
- Selects design style from visual cards
- Chooses color preference:
  - Use Axtra system (default)
  - Provide brand colors
  - AI suggest colors
- If "brand colors" selected, inputs 3 color values

**Available styles:**
- Minimal & Clean
- Bold & Impactful
- Professional & Corporate
- Creative & Artistic
- Elegant & Sophisticated
- Modern & Trendy
- Playful & Fun
- Technical & Data-Driven

**Navigation:**
- "← Back" and "Continue →"

---

### 5. Business Information (Step 4)

**User input (required):**
- Business/Product name
- Business description (50-500 chars)
- Target audience (20-300 chars)
- Primary language

**Validation:**
- All fields required
- Character limits enforced

**Navigation:**
- "← Back" and "Continue →"

---

### 6. Content & Messaging (Step 5)

**User input (required):**
- Main headline
- Value propositions (minimum 3, maximum 6)
- CTA text
- CTA style (Primary/Outline/Link)

**User input (optional):**
- Sub-headline
- Secondary CTA

**Interactions:**
- "+" button to add value propositions
- "Remove" button for extra propositions (beyond first 3)

**Validation:**
- Must have at least 3 value propositions
- Headline and CTA text required

**Navigation:**
- "← Back" and "Continue →"

---

### 7. Social Proof & Features (Step 6)

**User input (optional, all fields):**
- Social proof types (checkboxes):
  - Customer Testimonials
  - Client/Partner Logos
  - Key Statistics
  - Reviews/Ratings
  - Case Studies
  - Press/Media Mentions
- Key features to highlight (repeatable field)
- Pricing section preference:
  - Yes, show pricing
  - Show "Contact for Pricing"
  - No pricing section

**Navigation:**
- "← Back" and "Continue →"

---

### 8. Technical Preferences (Step 7)

**User input (optional, all fields):**
- Lead form fields (checkboxes)
- Required integrations (text)
- Special requirements/notes (textarea)

**Navigation:**
- "← Back" and "Review & Generate →"

---

### 9. Review & Generate (Step 8)

**User sees:**
- Summary of all inputs organized by category:
  - Business Information
  - Landing Page Details
  - Value Propositions
  - Additional selections

**User action:**
- Reviews information
- Can go back to edit any step
- Clicks "🚀 Generate Prompt"

**System response:**
- Shows loading state with spinner
- Processes form data
- Generates detailed prompt
- Redirects to result page

---

### 10. Result Screen

**User sees:**
- Success message
- Action buttons:
  - Copy to Clipboard
  - Download as MD
  - Print
- Full generated prompt in scrollable container

**User actions:**
- **Copy**: Copies prompt to clipboard, shows success notification
- **Download**: Downloads prompt as `.md` file with business name
- **Print**: Opens print dialog
- **Start New**: Link to return to welcome screen

**System behavior:**
- Prompt stored in localStorage
- Formatted in markdown
- Ready to use with AI agents

---

## Navigation Rules

### Forward Navigation
- User must fill required fields before proceeding
- Real-time validation on "Continue" click
- Error messages displayed next to invalid fields
- Cannot skip steps

### Backward Navigation
- Can always go back to previous steps
- Data is preserved when going back
- No validation required for backward navigation

### Progress Indication
- Badge showing "Step X of 8" in header
- Visual progress indicator (future enhancement)

---

## Error Handling

### Validation Errors
- Display inline error messages
- Highlight invalid fields with red border
- Prevent navigation until errors resolved
- Clear error when field is corrected

### System Errors
- Loading errors show alert
- Return user to form
- Preserve all entered data
- Log errors to console

---

## Data Persistence

### During Session
- Form data saved to JavaScript state after each step
- Allows backward/forward navigation without data loss

### After Generation
- Generated prompt stored in localStorage
- Form data stored in localStorage
- Available on result page
- Cleared when starting new form

---

## Accessibility Considerations

- Keyboard navigation supported
- All form fields have labels
- Required fields marked with asterisk
- Error messages announced to screen readers
- Sufficient color contrast ratios
- Focus states visible

---

## Mobile Experience

- Fully responsive design
- Touch-friendly button sizes (min 44px)
- Single column layout on mobile
- Simplified navigation on small screens
- No horizontal scrolling

---

## Future Enhancements

1. **Save Draft**: Allow users to save progress and return later
2. **Email Delivery**: Send generated prompt via email
3. **Templates**: Quick-start templates by industry
4. **Preview Mode**: Visual preview of landing page structure
5. **History**: View previously generated prompts
6. **Collaboration**: Share form with team members
7. **API Integration**: Direct integration with website builders

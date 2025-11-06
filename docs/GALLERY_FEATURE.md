# Template Gallery Feature - "Colouring Your Business"

## Concept
A sophisticated, minimalist gallery that showcases client templates while maintaining Axtra's black & white brand aesthetic. The gallery reveals color on interaction, embodying the "Colouring Your Business" philosophy.

## Key Features

### 1. **Full-Screen Modal Gallery**
- Elegant black backdrop (95% opacity)
- Centered, perspective-enabled container
- Backdrop blur effects for premium feel

### 2. **Book-Flip Page Animation**
- 3D page-turn effect using CSS transforms
- Smooth cubic-bezier easing
- Perspective: 2000px for depth
- 0.8s transition duration

### 3. **Split-Screen Layout**
Each slide has two panels:

**Left Panel: Template Preview**
- Grayscale image by default (Axtra brand)
- **Reveals full color on hover** (client work)
- Embodies "Colouring Your Business" concept
- Subtle gradient overlay

**Right Panel: Template Details**
- Clean white background
- Minimal typography
- Tag, title, description
- Feature list with subtle bullets

### 4. **Navigation**
- Previous/Next arrow buttons
- Dot pagination (active dot expands)
- Keyboard support: Arrow keys, Escape
- Click overlay to close
- Smooth transitions throughout

### 5. **Design Philosophy**
```
Axtra = Black & White (sophisticated, minimal)
Client Templates = Full Color (vibrant, alive)
Interaction = Color Reveal (transformation)
```

## Technical Implementation

### CSS Classes Added:
- `.template-gallery-overlay` - Full-screen modal
- `.gallery-slider` - Perspective container
- `.gallery-slide` - Individual slides with 3D transform
- `.gallery-slide-content` - Split-panel layout
- `.gallery-preview` - Grayscale → Color reveal
- `.gallery-details` - Template information
- `.gallery-nav` - Navigation controls
- `@keyframes pageFlipOut/In` - Book animation

### JavaScript Functions:
- `openTemplateGallery()` - Initialize and show
- `closeTemplateGallery()` - Hide modal
- `nextSlide() / previousSlide()` - Navigation
- `goToSlide(index)` - Direct navigation
- Keyboard event handlers (Esc, Arrow keys)

### Template Data Structure:
```javascript
{
  tag: 'Industry/Category',
  title: 'Template Name',
  description: 'Detailed description',
  features: ['Feature 1', 'Feature 2'],
  previewImage: 'URL'
}
```

## Current Templates (6 Examples):
1. **Minimal Tech Platform** (SaaS)
2. **Bold Product Launch** (E-commerce)
3. **Corporate & Trustworthy** (Professional Services)
4. **Bold & Creative** (Creative Agency)
5. **Friendly & Accessible** (Education)
6. **Calm & Trustworthy** (Healthcare)

## User Experience Flow

1. User reaches Step 3 (Design Style)
2. Sees "View Template Examples →" button
3. Clicks to open full-screen gallery
4. Views templates in elegant book-flip slider
5. Hovers over preview to see color (transformation moment)
6. Navigates with arrows, dots, or keyboard
7. Closes gallery and returns to form

## Visual Hierarchy

```
Black (95%) Overlay
  └─ White Card (Split Screen)
      ├─ Left: Grayscale Preview
      │   └─ Hover → Full Color
      └─ Right: Template Details
          ├─ Tag (uppercase, small)
          ├─ Title (large, bold)
          ├─ Description (readable)
          └─ Features (bulleted list)
```

## Responsive Considerations
- Gallery adapts to screen size
- Mobile: Stacked layout (top/bottom)
- Tablet: Side-by-side maintains
- Touch gestures: Swipe to navigate

## Brand Consistency
- ✓ Maintains Axtra grayscale base
- ✓ Showcases client color work
- ✓ Sophisticated animations
- ✓ Minimal UI elements
- ✓ Premium feel throughout
- ✓ "Colouring Your Business" concept realized

## Performance
- CSS-only animations (GPU accelerated)
- Lazy-load images (can implement)
- Smooth 60fps transitions
- No external libraries needed

## Future Enhancements
- [ ] Add actual client screenshot examples
- [ ] Filter by industry
- [ ] Filter by style
- [ ] "Use This Template" quick action
- [ ] Video previews on hover
- [ ] Mobile swipe gestures
- [ ] More template examples (aim for 15-20)

---

**This gallery is the perfect embodiment of your brand concept** - Axtra stays black & white (sophisticated, minimal, expensive), while your clients' work bursts with color (vibrant, alive, successful). The interaction of revealing color on hover makes the "Colouring Your Business" tagline tangible and experiential.

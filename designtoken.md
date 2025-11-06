# Design Tokens Quick Reference

A cheat sheet for all CSS custom properties in the Axtra Design System.

---

## 🎨 Colors

### Grayscale
```css
--color-black: #1a1a1a
--color-gray-900: #2d2d2d
--color-gray-800: #3d3d3d
--color-gray-700: #4a4a4a
--color-gray-600: #6b6b6b
--color-gray-500: #8b8b8b
--color-gray-400: #9ca3af
--color-gray-300: #d1d5db
--color-gray-200: #e5e5e5
--color-gray-100: #f3f4f6
--color-gray-50: #fafafa
--color-white: #ffffff
```

### Semantic
```css
--color-primary: #1a1a1a        (black)
--color-secondary: #4a4a4a      (dark gray)
--color-accent: #2563eb         (blue)
--color-success: #059669        (green)
--color-warning: #d97706        (amber)
--color-error: #dc2626          (red)
--color-info: #0891b2           (cyan)
```

### Surfaces
```css
--color-background: #ffffff
--color-surface: #fafafa
--color-surface-raised: #ffffff
--color-border: #e5e5e5
--color-border-light: #f3f4f6
--color-border-dark: #d1d5db
```

### Text
```css
--color-text-primary: #1a1a1a      (headlines)
--color-text-secondary: #6b6b6b    (body)
--color-text-tertiary: #8b8b8b     (supporting)
--color-text-muted: #9ca3af        (metadata)
--color-text-inverse: #ffffff      (on dark)
```

### States
```css
--color-hover: #4a4a4a
--color-active: #1a1a1a
--color-focus: #2563eb
--color-disabled: #d1d5db
```

---

## 📝 Typography

### Font Families
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...
--font-display: var(--font-primary)
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', ...
```

### Font Sizes
```css
--text-xs: 0.75rem      (12px)
--text-sm: 0.875rem     (14px)
--text-base: 1rem       (16px)
--text-lg: 1.125rem     (18px)
--text-xl: 1.25rem      (20px)
--text-2xl: 1.5rem      (24px)
--text-3xl: 1.875rem    (30px)
--text-4xl: 2.25rem     (36px)
--text-5xl: 3rem        (48px)
```

### Font Weights
```css
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

### Line Heights
```css
--leading-none: 1
--leading-tight: 1.2
--leading-snug: 1.375
--leading-normal: 1.5
--leading-relaxed: 1.625
--leading-loose: 2
```

### Letter Spacing
```css
--tracking-tighter: -0.05em
--tracking-tight: -0.025em
--tracking-normal: 0
--tracking-wide: 0.025em
--tracking-wider: 0.05em
--tracking-widest: 0.1em
```

---

## 📏 Spacing

### Scale
```css
--space-0: 0
--space-1: 0.25rem      (4px)
--space-2: 0.5rem       (8px)
--space-3: 0.75rem      (12px)
--space-4: 1rem         (16px)
--space-5: 1.25rem      (20px)
--space-6: 1.5rem       (24px)
--space-8: 2rem         (32px)
--space-10: 2.5rem      (40px)
--space-12: 3rem        (48px)
--space-16: 4rem        (64px)
--space-20: 5rem        (80px)
--space-24: 6rem        (96px)
```

### Semantic
```css
--space-xs: 0.5rem      (8px)
--space-sm: 1rem        (16px)
--space-md: 1.5rem      (24px)
--space-lg: 2.5rem      (40px)
--space-xl: 4rem        (64px)
--space-2xl: 6rem       (96px)
```

---

## 📐 Layout

### Containers
```css
--container-xs: 320px
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1200px      (default)
--container-2xl: 1400px
--container-full: 100%

--max-width: 1200px
```

### Breakpoints
```css
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

### Z-Index
```css
--z-base: 0
--z-dropdown: 100
--z-sticky: 200
--z-fixed: 300
--z-modal-backdrop: 400
--z-modal: 500
--z-popover: 600
--z-tooltip: 700
--z-notification: 800
```

---

## 🔲 Borders

### Radius
```css
--radius-none: 0
--radius-sm: 2px        (default)
--radius-base: 4px
--radius-md: 6px
--radius-lg: 8px
--radius-xl: 12px
--radius-2xl: 16px
--radius-full: 9999px

--radius: 2px           (default)
```

### Width
```css
--border-width: 1px
--border-width-2: 2px
--border-width-4: 4px
```

---

## 🌑 Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-base: 0 2px 4px rgba(0, 0, 0, 0.06)
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08)
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.12)
--shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06)
```

---

## ⏱️ Transitions

### Duration
```css
--duration-fast: 150ms
--duration-base: 200ms
--duration-slow: 300ms
--duration-slower: 500ms
```

### Easing
```css
--ease-linear: linear
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Presets
```css
--transition: all 200ms cubic-bezier(0, 0, 0.2, 1)
--transition-fast: all 150ms cubic-bezier(0, 0, 0.2, 1)
--transition-slow: all 300ms cubic-bezier(0, 0, 0.2, 1)
```

---

## 🎯 Icons

```css
--icon-xs: 12px
--icon-sm: 16px
--icon-base: 20px
--icon-md: 24px
--icon-lg: 32px
--icon-xl: 40px
--icon-2xl: 48px
```

---

## 🔘 Component Sizes

### Buttons
```css
--button-height-sm: 32px
--button-height-base: 40px
--button-height-lg: 48px
```

### Inputs
```css
--input-height-sm: 32px
--input-height-base: 40px
--input-height-lg: 48px
```

---

## 💡 Opacity

```css
--opacity-0: 0
--opacity-10: 0.1
--opacity-20: 0.2
--opacity-30: 0.3
--opacity-40: 0.4
--opacity-50: 0.5
--opacity-60: 0.6
--opacity-70: 0.7
--opacity-80: 0.8
--opacity-90: 0.9
--opacity-100: 1
```

---

## 📦 Common Patterns

### Card
```css
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: var(--radius);
padding: var(--space-lg);
```

### Button
```css
padding: var(--space-3) var(--space-6);
font-size: var(--text-base);
font-weight: var(--font-semibold);
background: var(--color-primary);
color: var(--color-text-inverse);
border-radius: var(--radius);
transition: var(--transition);
```

### Input
```css
padding: var(--space-3) var(--space-4);
font-size: var(--text-base);
background: var(--color-background);
border: 1px solid var(--color-border);
border-radius: var(--radius);
```

### Section
```css
padding: var(--space-2xl) 0;  /* 96px top/bottom */
max-width: var(--max-width);   /* 1200px */
margin: 0 auto;
```

---

## 🎨 Category Colors

```css
/* Funnel */
--category-funnel-bg: #f3f4f6
--category-funnel-text: #374151
--category-funnel-border: #d1d5db

/* Brand */
--category-brand-bg: #fef3c7
--category-brand-text: #78350f
--category-brand-border: #fcd34d

/* Social */
--category-social-bg: #dbeafe
--category-social-text: #1e40af
--category-social-border: #93c5fd

/* Website */
--category-website-bg: #e0e7ff
--category-website-text: #3730a3
--category-website-border: #a5b4fc

/* SEO */
--category-seo-bg: #dcfce7
--category-seo-text: #166534
--category-seo-border: #86efac
```

---

## 🚀 Usage Examples

### Create a Card
```html
<div style="
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-lg);
">
  <h3 style="
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    margin-bottom: var(--space-sm);
  ">Card Title</h3>
  <p style="
    color: var(--color-text-secondary);
    font-size: var(--text-base);
  ">Card description</p>
</div>
```

### Create a Button
```html
<button style="
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
">Button Text</button>
```

### Create Spacing
```html
<div style="margin-bottom: var(--space-md)">...</div>  <!-- 24px -->
<div style="padding: var(--space-lg)">...</div>        <!-- 40px -->
<div style="gap: var(--space-sm)">...</div>            <!-- 16px -->
```

---

**Pro Tip:** Always use design tokens instead of hardcoded values for consistency and easy theme switching!

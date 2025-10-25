# Zillgo Portfolio Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Portfolio/content creator website with strong visual identity and animated brand presence. The design is already fully specified in the provided React code and must be preserved exactly as-is with no changes.

## Core Design Principles
- Bold neon green (#00FF00) and black (#000000) cyberpunk aesthetic
- Glass-morphism UI elements with backdrop blur
- Animated brand background (ONLY behind Hero and Featured Work sections)
- Clean, minimal layouts with strategic use of gradients and shadows

## Colors
```
Primary Neon: #00FF00
Dark Green: #007A00
Lime: #00CC00
Black: #000000
Dark Background: #0a0a0a
Light Green Text: #6ee787
Medium Green: #8bff8b
Bright Green: #4dff4d
Soft Green: #a9ffb0
Muted Green: #57cc57
```

## Typography
- **Font Family**: System font stack: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif
- **Hero Title**: 56px, weight 900, line-height 1.05, color #007A00
- **Hero Subtitle**: 22px, weight 600, color #4dff4d, 0.9 opacity
- **Section Headers (h2)**: 24px, weight 900, 0.08em letter-spacing, color #8bff8b
- **Subsection Headers (h3)**: 16px, weight 700, color #8bff8b
- **Body Text**: Default size, color #a9ffb0
- **Brand Name**: Weight 800, 0.08em letter-spacing, color #8bff8b

## Layout System
- **Container Max-Width**: 1200px with auto margins
- **Section Padding**: 24px horizontal, 96px bottom, 40px top (for most sections)
- **Header Padding**: 24px all around
- **Card Padding**: 24px
- **Grid Gaps**: 16px (portfolio), 24px (hero grid), 12px (CTA buttons)
- **Spacing Units**: 8px, 12px, 16px, 24px, 36px, 56px, 96px

## Component Library

### Header
- Fixed-height header with flex layout
- Left: Brand mark (36x36px gradient square with 12px border-radius) + "ZILLGO" text
- Center: Navigation links (Portfolio, About, Contact)
- Right: Primary CTA button
- Z-index: 10 for layering above background

### Hero Section
- Glass-morphism card: backdrop-filter blur(14px), rgba(255,255,255,0.08) background
- Border: 1px solid rgba(0,255,0,0.25)
- Border-radius: 24px
- Shadow: 0 10px 30px rgba(0,0,0,0.35)
- Desktop: Two-column grid (text + video)
- Mobile: Single column stacked

### Buttons
- **Primary Button**: 
  - Linear gradient (135deg, #00FF00 to #00CC00)
  - Padding: 12px 18px
  - Border-radius: 16px
  - Font: 14px, weight 700
  - Color: black text
  - Shadow: 0 6px 18px rgba(0,255,0,0.25)
  
- **Ghost Button**:
  - Border: 1px solid rgba(0,255,0,0.4)
  - Padding: 12px 18px
  - Border-radius: 16px
  - Color: #8bff8b
  - No background

### Video Embeds
- 16:9 aspect ratio containers (56.25% padding-top)
- Border-radius: 24px
- Border: 1px solid rgba(0,255,0,0.3)
- Shadow: 0 10px 30px rgba(0,0,0,0.35)
- Background: rgba(0,0,0,0.7)
- Use youtube-nocookie.com domain (no autoplay)
- Loading: lazy with strict referrer policy

### Portfolio Grid
- Desktop: 3 columns
- Mobile: 1 column
- Gap: 16px between items

### Contact Section
- Card on solid black background (no animated bg)
- Border: 1px solid rgba(0,255,0,0.3)
- Border-radius: 24px
- Background: rgba(0,0,0,0.6) with backdrop-filter blur(8px)
- Grid layout for contact info and social links

### Footer
- Simple centered text
- Font-size: 12px
- Color: #57cc57
- Padding: 56px bottom

## Animations

### Animated Background (Scoped)
- **Placement**: ONLY behind Header + Hero + Featured Work sections
- **Implementation**: Absolutely positioned wrapper containing:
  1. Base gradient layer (black to dark)
  2. Radial glow overlays with screen blend mode, opacity 0.6, blur(30px)
  3. Seven rows of scrolling "ZILLGO" marquee text
  
### Marquee Animation
- Rotated container: -8deg
- Seven horizontal rows at 13.5% vertical spacing
- Each row: decreasing font size (140px to 80px), decreasing opacity (0.75 to 0.19)
- -webkit-text-stroke: 2px #00FF00
- Fill: rgba(0,0,0,0.9)
- Text-shadow: 0 0 10px rgba(0,255,0,0.15)
- Animation: Linear scroll from 0 to -50% translateX, 30-65s duration per row
- 16 repetitions per row for infinite seamless loop

## Images
No images are used in this design. The visual impact comes from:
- Animated background with scrolling text
- YouTube video embeds (3 in portfolio, 1 in hero)
- Glass-morphism effects and gradients
- Neon green color scheme

## Accessibility
- Semantic HTML5 elements
- ARIA labels on background (aria-hidden)
- Proper iframe titles for videos
- High contrast green on black
- Keyboard-navigable links and buttons

## Responsive Behavior
- Mobile-first approach
- Single column layouts on mobile
- Two-column hero grid at 768px+
- Three-column portfolio grid at 768px+
- Consistent 24px horizontal padding across all screen sizes
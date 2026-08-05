# Design Document: Zhili Index Website Redesign (Apple-like Minimalist + Structural Blueprint)

## 1. Overview
The current website is transitioning to an "Apple-like Minimalist" design system combined with the structural clarity of a high-end enterprise SaaS landing page (as seen in the 4-4-6 reference mockup). 

The goal is to strip away unnecessary embellishments (glowing backgrounds, heavy borders, chaotic gradients, cluttered icons) and rely on world-class typography, extreme whitespace, and soft, tactile card UI to communicate enterprise confidence and high-end technological capability.

This redesign aligns with the newly structured business logic:
- 4 Solutions (Business Directions)
- 4 Products/Platforms
- 6 Key Business Cases

## 2. Global Styling System

### 2.1 Colors
The palette shifts from dark-tech/neon to a highly refined light theme.
- **Global Background**: `#FBFBFD` (A warm, ultra-light grey characteristic of premium hardware/software sites)
- **Card/Surface Background**: `#FFFFFF`
- **Primary Typography**: `#1D1D1F` (Deep, near-black grey for high contrast without being harsh)
- **Secondary Typography**: `#86868B` (Cool mid-grey for descriptions and metadata)
- **Accent/Interactive**: `#0066CC` (Sky/Apple blue for CTAs, text links, and active states)
- **Pill/Tag Background**: `#F5F5F7`
- **Image Placeholder/Skeleton**: `#F0F0F2`

### 2.2 Typography
- **Font Stack**: Global San-serif (Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)
- **Headings**: Extremely large, heavy font weights (e.g., `800` or `700`), with negative letter-spacing (`-0.02em` to `-0.04em`) to create a tight, engineered look.
- **Body**: Generous line-height (`1.6` to `1.8`) in a regular weight (`400`).

### 2.3 Layout & Spacing
- **Macro Whitespace**: Inter-section padding will increase to `120px` - `160px`. Content must never feel cramped.
- **Max Width**: Maintained around `1180px` for readability.
- **Borders & Separation**: Hard borders are strictly forbidden. Separation is achieved through padding, subtle background shifts (`#FFFFFF` on `#FBFBFD`), and diffuse shadows.

## 3. Component System

### 3.1 Card Primitives
- **Radius**: Ultra-round corners (`24px` for small cards, up to `32px` or `40px` for large containers).
- **Shadows**: Only the softest diffuse shadows. 
  - Rest state: Almost invisible (`0 4px 12px rgba(0,0,0,0.02)`) or completely flat.
  - Hover state (Interactive cards only): `0 20px 40px rgba(0,0,0,0.06)` with a smooth `transform: translateY(-2px)`.

### 3.2 Navigation & Footer (Shell)
- **Header**: High-blur frosted glass (`backdrop-filter: blur(20px)`), completely borderless, merging seamlessly into the background. Logo on left, nav center, primary CTA on right.
- **Footer**: Deep navy or dark grey (`#102033` or `#1D1D1F`). Stripped down to essential typography organized in clean columns.

## 4. Key Page Blocks (Home Page)

### 4.1 Hero Section
- **Layout**: Two-column split layout.
- **Left Column (Text)**: 
  - Massive, confident headline: "AI 驱动的计算机教育科技公司".
  - Short, constrained secondary text below.
  - CTAs: Primary button (`#0066CC` solid), Secondary button (transparent, text-only or light ghost button).
- **Right Column (Visual)**: 
  - A clean, minimalist architectural diagram representing the synergy between "Digital Capabilities" and "Physical Implementation". Glassmorphism elements over a very subtle light blue background mesh.

### 4.2 Solutions (四大业务方向)
- **Layout**: Bento Grid.
- **Card Design**: Pure white background, no borders. 
- **Content**: Clean title, short description, and feature tags arranged at the bottom. No heavy illustrations, relying on negative space.

### 4.3 Products & Platforms (四个业务平台)
- **Layout**: 2x2 grid of wide cards.
- **Card Design**: Split internally. Left side contains the product name, deep grey text, and tags. Right side features a prominent, high-fidelity UI mockup screenshot with a subtle shadow, floating over a light background.

### 4.4 Cases & Partners (六个案例成果)
- **Cases (3x2 Grid)**: 
  - Image thumbnail at top (grey skeleton or actual image with soft top radius).
  - A pill-shaped tag (e.g., "职校", "文旅") overlapping the image corner.
  - Bold title and quantifiable outcome description below the image.
- **Partners**: Greyscale logos or text names set to `opacity: 0.4` by default, lighting up to `opacity: 1` on hover. Minimal visual noise.

### 4.5 Bottom CTA Band
- A solid color block (e.g., `#0066CC` or a very soft blue gradient) taking up full width.
- Crisp white text: "让业务结构更清晰，让项目落地更高效".
- Prominent final CTA buttons.

## 5. Technical Constraints
- The project will continue using **CSS Modules** (`.module.css`). 
- No Tailwind configuration will be added.
- Existing class names should be reused where possible, but their internal CSS definitions will be entirely rewritten to match this spec.
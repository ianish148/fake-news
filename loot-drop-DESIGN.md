---
version: alpha
name: "Brutalist Graveyard"
description: "Loot Drop is a failed-startup case study database with an unapologetically neo-brutalist visual identity. The design uses a saturated yellow (#FFD600) hero surface, zero border-radius on all elements, thick 3–4px black borders, and hard offset box-shadows (4px–8px, no blur) to create a raw, editorial energy. Typography is exclusively Space Grotesk (display/body) and Space Mono (labels/code), both rendered at heavy weights. Color accents. green, pink, orange, red. appear as card surface fills against the yellow field, reinforcing a zine-like, high-contrast aesthetic."
colors:
  yellow-brand: "#ffd600"
  amber: "#f59e0b"
  green-accent: "#00c853"
  off-white-background: "#fafafa"
  orange-accent: "#ff6b00"
  pink-accent: "#ff4081"
  white: "#ffffff"
  brutalist-red: "#b91c1c"
  near-black: "#0a0a0a"
  pure-black: "#000000"
typography:
  hero-display:
    fontFamily: "Space Grotesk"
    fontSize: "120px"
    fontWeight: "900"
    lineHeight: "1"
  section-heading:
    fontFamily: "Space Grotesk"
    fontSize: "24px"
    fontWeight: "900"
    lineHeight: "26.4px"
  sub-heading:
    fontFamily: "Space Grotesk"
    fontSize: "18px"
    fontWeight: "900"
    lineHeight: "27px"
  body:
    fontFamily: "Space Grotesk"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  body-bold:
    fontFamily: "Space Grotesk"
    fontSize: "16px"
    fontWeight: "900"
    lineHeight: "24px"
  label-caps:
    fontFamily: "Space Grotesk"
    fontSize: "12px"
    fontWeight: "700"
    lineHeight: "18px"
    letterSpacing: "0.5px"
  small-label:
    fontFamily: "Space Grotesk"
    fontSize: "11px"
    fontWeight: "600"
    lineHeight: "16.5px"
  mono-label:
    fontFamily: "Space Mono"
    fontSize: "12px"
    fontWeight: "700"
  mono-caps:
    fontFamily: "Space Mono"
    fontSize: "12px"
    fontWeight: "900"
    lineHeight: "18px"
    letterSpacing: "0.5px"
  nav-label:
    fontFamily: "Space Grotesk"
    fontSize: "20px"
    fontWeight: "400"
    lineHeight: "24px"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "6px"
  md-sm: "8px"
  md: "12px"
  md-lg: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  4xl: "80px"
---

## Overview

Loot Drop is a failed-startup case study database with an unapologetically neo-brutalist visual identity. The design uses a saturated yellow (#FFD600) hero surface, zero border-radius on all elements, thick 3–4px black borders, and hard offset box-shadows (4px–8px, no blur) to create a raw, editorial energy. Typography is exclusively Space Grotesk (display/body) and Space Mono (labels/code), both rendered at heavy weights. Color accents. green, pink, orange, red. appear as card surface fills against the yellow field, reinforcing a zine-like, high-contrast aesthetic.

**Signature traits:**
- Dual typeface system: Pairs Space Grotesk and Space Mono across the type hierarchy.
- Tight geometric corners: Near-square geometry with corner radii capped around 0px.

## Colors

The palette uses 10 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **action-primary** maps to `yellow-brand`: Role "primary" is grounded by usage context "Hero background, primary CTA button fill, brand signature surface".
- **border-text** maps to `near-black`: Role "text" is grounded by usage context "Body text, borders, shadow color, icon fills — dominant foreground".
- **action-border** maps to `pure-black`: Role "border" is grounded by usage context "Hard shadow layers, border strokes on cards and buttons".
- **surface-background** maps to `off-white-background`: Role "background" is grounded by usage context "Page background, modal surface, card base".

### Primary Brand
- **Yellow Brand** (#ffd600): Hero background, primary CTA button fill, brand signature surface. Role: primary. {authored: rgb(255, 214, 0), space: rgb}

### Text Scale
- **Brutalist Red** (#b91c1c): Destructive states, warning labels, failure-category highlights. Role: text. {authored: rgb(185, 28, 28), space: rgb}
- **Near Black** (#0a0a0a): Body text, borders, shadow color, icon fills — dominant foreground. Role: text. {authored: rgb(10, 10, 10), space: rgb}

### Interactive
- **Pure Black** (#000000): Hard shadow layers, border strokes on cards and buttons. Role: border. {authored: rgb(0, 0, 0), space: rgb, alpha: 0.05}

### Surface & Shadows
- **Amber** (#f59e0b): Secondary highlight surface, badge fills. Role: background. {authored: rgb(245, 158, 11), space: rgb}
- **Green Accent** (#00c853): Hero item card background (confirmed by probe: hero-item backgroundColor). Role: background. {authored: rgb(0, 200, 83), space: rgb}
- **Off-White Background** (#fafafa): Page background, modal surface, card base. Role: background. {authored: rgb(250, 250, 250), space: rgb}
- **Orange Accent** (#ff6b00): VC capital highlight badge, accent card fills. Role: background. {authored: rgb(255, 107, 0), space: rgb}
- **Pink Accent** (#ff4081): Industry Deep Dives card surface, accent category fills. Role: background. {authored: rgb(255, 64, 129), space: rgb}
- **White** (#ffffff): Input fields, inner card surfaces, text on dark fills. Role: background. {authored: rgb(255, 255, 255), space: rgb, alpha: 0.05}

## Typography

Typography uses Space Grotesk, Space Mono across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes Space Grotesk and Space Mono for visual contrast. Weight range spans bold, regular, semi-bold. Sizes range from 11px to 120px.

### Font Roles
- **Headline Font**: Space Grotesk
- **Body Font**: Space Grotesk

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Primary hero headline — extreme scale, ultra-heavy weight (probe-confirmed: 120px) | Space Grotesk | 120px | 900 | 1 | normal | Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif | Extracted token |
| Card and section titles | Space Grotesk | 24px | 900 | 26.4px | normal | Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif | Extracted token |
| Card sub-headings and feature labels | Space Grotesk | 18px | 900 | 27px | normal | Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif | Extracted token |
| Primary body text, descriptions, paragraph content | Space Grotesk | 16px | 400 | 24px | normal | Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif | Extracted token |
| Emphasized inline body text | Space Grotesk | 16px | 900 | 24px | normal | Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif | Extracted token |
| All-caps labels, tags, category badges | Space Grotesk | 12px | 700 | 18px | 0.5px | Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif | Extracted token |
| Micro-labels, metadata, secondary tags | Space Grotesk | 11px | 600 | 16.5px | normal | Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif | Extracted token |
| Code-style tags, data callouts, monospace badges | Space Mono | 12px | 700 | normal | normal | Space Mono, monospace | Extracted token |
| Uppercase monospace labels on live data badges and stat callouts | Space Mono | 12px | 900 | 18px | 0.5px | Space Mono, monospace | Extracted token |
| Navigation items (probe-confirmed: hero-nav-label, 20px) | Space Grotesk | 20px | 400 | 24px | normal | Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif | Extracted token |

## Layout

Responsive system uses 2 breakpoint tier(s): mobile, tablet.

This system uses a 4px base grid with scale values 4, 6, 8, 12, 16, 20, 24, 32, 40, 80.

### Responsive Strategy
- **mobile (480-1024px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (>= 768px)**: Increase spacing and column structure for medium-width viewports.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| xs | 4px | 4 | Extracted spacing token |
| sm | 6px | 6 | Extracted spacing token |
| md-sm | 8px | 8 | Extracted spacing token |
| md | 12px | 12 | Extracted spacing token |
| md-lg | 16px | 16 | Extracted spacing token |
| lg | 20px | 20 | Extracted spacing token |
| xl | 24px | 24 | Extracted spacing token |
| 2xl | 32px | 32 | Extracted spacing token |
| 3xl | 40px | 40 | Extracted spacing token |
| 4xl | 80px | 80 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-color | rgb(10, 10, 10) ; rgb(0, 0, 0) ; rgb(255, 255, 255) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(0.99863, 0.052336, -0.052336, 0.99863, 0, 0) ; matrix(0.999391, 0.0348995, -0.0348995, 0.999391, 0, 0) ; matrix(0.95, 0, 0, 0.95, 0, 20) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| none | 0px | 0 | Hairline corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| none | 0 | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Dual typeface system, Tight geometric corners without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 479px | screen and (max-width: 479px) |
| Mobile | <= 480px | (max-width: 480px) |
| Mobile | <= 600px | (max-width: 600px) |
| Mobile | <= 640px | (max-width: 640px) |
| Breakpoint 5 | <= 768px | (max-width: 768px) |
| Breakpoint 6 | <= 900px | (max-width: 900px) |
| Breakpoint 7 | <= 1024px | (max-width: 1024px) |
| Mobile | >= 480px | screen and (min-width: 480px) |
| Mobile | >= 481px | screen and (min-width: 481px) |
| Tablet | >= 768px | (min-width: 768px) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.

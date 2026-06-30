# Brutalist Real-Time Fact-Checker (V3)

Per your request, we are completely overhauling the visual identity to match the **"Brutalist Graveyard / Loot Drop"** design system and moving the project to your chosen directory.

## The New Brutalist Identity
We are replacing the smooth, dark glassmorphism with an unapologetically **neo-brutalist** aesthetic.
- **Color Palette**: Saturated Yellow (`#FFD600`) as the primary background, with stark Off-White (`#FAFAFA`) surfaces and vibrant Green, Pink, and Orange accents.
- **Geometry**: Absolutely **zero border-radius** on all elements. Every corner will be sharp and precise.
- **Borders & Shadows**: Thick 3–4px solid black borders (`#000000`) and hard offset box-shadows (e.g., `4px 4px 0px 0px rgba(0,0,0,1)`).
- **Typography**: Dual-font system using Google Fonts: **Space Grotesk** (display/body) and **Space Mono** (labels/code).

## Technical Implementation
- **Workspace**: The project will be built directly inside `C:\Users\anish\Downloads\fake_news_det_new`.
- **Framework**: Next.js 14+ with Tailwind CSS (which will be heavily customized to support the brutalist design tokens).
- **Backend Engine**: The same powerful Gemini 2.5 Pro API route with **Real-Time Google Search Grounding** to actively verify claims.

## User Review Required
> [!IMPORTANT]
> **Workspace Overwrite**: Since the `fake_news_det_new` folder already exists and has design files, I will initialize the Next.js app in the *current* directory (using `npx create-next-app .`). Are you okay with this? (It will keep your existing design files intact but add the Next.js files alongside them).

## Proposed Changes

### Project Setup
- Re-run `npx create-next-app` inside `C:\Users\anish\Downloads\fake_news_det_new`.
- Install `lucide-react` (for blocky/bold icons) and `@google/genai`.
- Configure `tailwind.config.js` to include the specific brutalist colors (`yellow-brand`, `near-black`, etc.), custom box shadows, and the Space Grotesk / Space Mono fonts.

### Frontend UI/UX
#### [NEW] `app/page.tsx`
- A raw, high-contrast landing page. The background will be the `yellow-brand` color.
- Input fields will have thick black borders and sharp corners.
- Submit buttons will feature the hard offset shadow that compresses on click (simulating a physical button press).

#### [NEW] `app/globals.css`
- Import Space Grotesk and Space Mono from Google Fonts.
- Define global neo-brutalist utility classes (e.g., `.brutal-card`, `.brutal-button`).

### Backend
#### [NEW] `app/api/verify/route.ts`
- Implement the Gemini Search Grounding API as we did before, providing real-time verdict and live sources.

## Verification Plan
1. Start the Next.js development server in the new directory.
2. Verify that the UI perfectly matches the "Loot Drop" brutalist guidelines (colors, fonts, sharp edges, hard shadows).
3. Test a news verification to ensure the Gemini integration works seamlessly.

If you approve this plan, I will immediately initialize the Next.js project in your `fake_news_det_new` folder and start building!

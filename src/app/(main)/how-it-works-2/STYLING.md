# QC Design Events - Brand & Styling Guidelines

## 1. Mood & Concept
The brand embodies **Luxury, Prestige, and Professionalism**. The target audience comprises aspiring professionals seeking a reputable certification to launch their careers in high-end event planning, weddings, and corporate events. The visual language should feel like a high-end luxury concierge mixed with a modern educational institution. 

**Vibe:** Sophisticated, minimalist, aspirational, organized, warm, and highly trustworthy.

## 2. Typography
We use a deliberate combination of an editorial serif for prestige and a clean sans-serif for usability and modern appeal.

*   **Display / Headings (Serif):** `Playfair Display`
    *   *Usage:* Hero sections, large statistics, section titles.
    *   *Styling:* Keep weights refined (300 to 500). Use italics deliberately for contrast (e.g., *Your Journey* or *The Planner*).
*   **Body & Utility (Sans-Serif):** `Inter` or `Montserrat`
    *   *Usage:* Body paragraphs, navigation, micro-labels, pricing, FAQ.
    *   *Styling:* Clean weights (400 for body text, 500/600 for small caps and tags).

## 3. Color Palette
The colors prioritize elegance over aggressive marketing. We avoid bright neon or standard "tech blue".

*   **Background (Light):** Warm off-white (`#FCFBF9` or `#F5F2ED`) to feel premium like fine paper. 
*   **Ink / Text (Dark):** Charcoal ink (`#1A1A1A`) instead of pure black for reduced eye strain and a softer, high-end look.
*   **Primary Accent:** Slate / Midnight Blue (`#0F172A`) for grounding elements, footers, and primary buttons.
*   **Secondary / Brand Accent:** Soft Gold / Champagne (`#B89759` or Tailwind `amber-600`) for subtle highlighting, icons, and interactive hover states.

## 4. Spacing & Layout
*   **Rhythm:** Generous whitespace. Padding between major sections should be expansive (`py-24` or `py-32`) to let content breathe.
*   **Grids:** Utilize bento grids and 50/50 split layouts to contrast text with imagery or statistics.
*   **Containment:** Ensure reading lines do not get too long. Max width on readable paragraphs should be constrained (`max-w-prose` or `max-w-3xl`). Main container max width: `max-w-7xl`.

## 5. UI Elements
*   **Radii / Corners:** Minimalist rounded corners (`rounded-none` or subtle `rounded-sm`) to lean into editorial layout, or occasionally pill buttons (`rounded-full`) for CTAs.
*   **Borders:** Thin, elegant borders (`border-gray-200` or `border-[#1A1A1A]/10`) to separate sections instead of relying on heavy dropshadows.
*   **Cards:** 
    *   Style 1: Clean outline cards with negative space.
    *   Style 2: Solid background cards matching the Primary Accent (midnight blue) with light text for contrast.
*   **Buttons:**
    *   *Primary:* Midnight blue background, white text, subtle hover lift or fade.
    *   *Secondary:* Transparent background, thin solid border, midnight blue text.

## 6. Motion & Interaction
*   **Transitions:** Smooth, drawn-out fades and gentle slides (minimum `500ms` duration). 
*   **Hovers:** Opacity shifts rather than aggressive scale changes. Buttons lift slightly or shift background colors smoothly.
*   **Scroll:** Elements fade and slide up gently as they enter the viewport to maintain an effortless, choreographic feel.

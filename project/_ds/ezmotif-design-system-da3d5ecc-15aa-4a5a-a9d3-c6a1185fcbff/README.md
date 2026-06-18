# EZMOTIF STUDIO VISUALS — Design System

> A design studio identity built on the belief that great design should be
> **intentional, timeless, and meaningful**. Grounded in simplicity and inspired
> by nature, the brand is calm and refined while keeping a bold, distinctive
> presence. The visual language draws on **Scandinavian design principles**:
> clean layouts, thoughtful typography, and a restrained palette that creates
> warmth, comfort and sophistication — modern, approachable, cohesive.

EZMOTIF is a creative/design studio brand. There is **no product codebase or
Figma file** — this system is built from the brand assets the studio provided:
two logo lockups, a colour palette board, and three typefaces. Everything here
is an original interpretation of those foundations.

## Sources provided
- `uploads/final logo_espresso.png` — primary wordmark, espresso (4312×434, transparent PNG)
- `uploads/final logo_stone grey.png` — wordmark, stone grey, for dark grounds
- `uploads/branding colours.jpg` — nested-square colour board with named swatches + hex
- Typefaces: **Anybody** (variable, roman + italic), **Lato** (9 styles), **Nanum Pen Script**

All copied into `assets/` and `fonts/`.

---

## CONTENT FUNDAMENTALS

The studio's voice is **calm, confident, and quietly opinionated** — a curator,
not a salesperson. It says less and means more.

- **Tone:** warm minimalism. Plain-spoken but considered. Never hypey, never
  jargon-heavy. Lets whitespace and a single strong word carry weight.
- **Point of view:** speaks as **"we"** (the studio) to **"you"** (the client).
  Collaborative, e.g. *"We shape brands that feel inevitable."*
- **Casing:** Headlines and the wordmark are **UPPERCASE** (Anybody's strong
  geometric caps are the signature). Body copy is sentence case. Avoid Title
  Case for running UI labels — use sentence case.
- **Length:** short. Headlines are 2–5 words. Paragraphs are 1–3 sentences.
  Favour fragments for impact: *"Intentional. Timeless. Meaningful."*
- **Punctuation:** the period is a design element — used to slow the reader down
  on a triad of words. Sparse exclamation. No ALL-CAPS shouting in body.
- **Emoji:** **none.** Emoji break the refined register. The one sanctioned
  source of playfulness is the **Nanum Pen Script** handwritten accent — used
  the way a designer scribbles a note in a margin (*"made with care"*,
  a circled word, a hand-drawn arrow).
- **Vibe words to reach for:** intentional, grounded, refined, considered,
  warm, quiet, bold, natural, timeless, cohesive.
- **Words to avoid:** synergy, leverage, disrupt, game-changing, cutting-edge,
  revolutionary, 🚀-energy.

**Examples**
- Eyebrow: `STUDIO — VISUAL IDENTITY`
- Hero: `DESIGN WITH INTENTION`
- Lead: *"We craft calm, distinctive identities for brands that want to last."*
- Script accent (handwritten): *"by nature"* tucked under a headline.
- Button: `Start a project` · `View work` · `Get in touch`

---

## VISUAL FOUNDATIONS

**Overall feel.** Scandinavian editorial: lots of warm off-white space, a single
deep espresso ink, square corners, hairline rules, and one electric lime spark.
Composition over decoration. The page should feel like good paper stock.

### Colour
- **Primary:** Espresso `#2d1c14` (ink / dark grounds) + Stone grey `#d3cfcb`
  (warm neutral). These do 80% of the work.
- **Secondary:** Mist blue `#8a9fb7`, Horizon blue `#5079b2`, Pure white
  `#ffffff`. Blues are atmospheric supporting tones — backgrounds, illustration,
  data, links.
- **Accent:** Acid lime `#b4c62a`. **Used sparingly** — a CTA, an underline, a
  single highlighted word, a small block. Never large flat fields of lime.
- Grounds are warm off-white (`--stone-050 #f6f4f2`) or espresso for dark
  sections. Avoid pure `#fff` as the whole page — reserve white for raised cards.
- Imagery skews **warm and natural**: matte, soft daylight, earthy + muted-blue,
  gentle film grain welcome. No heavy saturation, no neon (except the lime as a
  graphic accent, not in photos).

### Typography
- **Anybody** (variable, width + weight axes) — display/headings only. Lean on
  its **strong wide caps**; set headings UPPERCASE, black/bold weight, slightly
  expanded width (~110–115%), tight tracking.
- **Lato** — all body, UI, captions. Friendly, modern, minimal. Light (300) for
  leads, Regular (400) for body, Bold (700) for emphasis/labels.
- **Nanum Pen Script** — decoration only. Hand-written accents to break the
  "decent" formality with a playful, human detail. Never for body or UI labels.
- Scale: major-third (1.25). Body 16px / line-height 1.6. See `colors_and_type.css`.

### Spacing & layout
- 4px base grid; 8-step scale (`--space-1`…`--space-10`).
- Generous margins; content likes to breathe. Wide outer gutters, narrow
  measure for text (~60–70ch).
- Strong left-alignment and baseline grids. Editorial asymmetry over centred
  symmetry. Fixed header that's quiet (hairline bottom border, no shadow).

### Borders, radii, cards
- **Corners are mostly square.** Radii are restrained: 0–4px for most surfaces,
  8px max for larger cards, pill only for tags/toggles. The brand's character is
  the **hard geometric edge** echoing the logo.
- Borders are **hairline** warm-grey (`--border`) or full espresso ink for
  emphasis blocks. A 1px espresso outline is a recurring motif.
- **Cards:** white surface, hairline border OR soft warm shadow (rarely both),
  square-to-4px corners, generous internal padding (24–32px).

### Elevation & shadow
- Shadows are **soft, warm-tinted (espresso alpha), low-spread** — see
  `--shadow-sm/md/lg`. Elevation is subtle; this is a flat-ish, paper system.
- No glows, no hard drop shadows, no neumorphism.

### Motion
- Quiet and precise. **Fades and short slides** (8–16px), `--ease-out`.
- Durations 140–420ms. No bounce, no spring, no parallax theatrics.
- Hover/press are the main interactions; page transitions stay calm.

### States
- **Hover:** darken fills ~6–8% or shift to a deeper tone (lime→darker lime,
  link→`--link-hover`); ghost buttons fill with a faint stone wash.
- **Press:** slight darken + `translateY(1px)`; no scale-down.
- **Focus:** 2px espresso or horizon-blue outline, 2px offset. Always visible.
- **Disabled:** 40% opacity, no shadow.

### Transparency & blur
- Used sparingly: a subtle stone/espresso wash over imagery for text legibility
  (**protection gradient**, not a hard scrim), and optional light backdrop-blur
  on a sticky header over photography. Default UI is opaque.

### Backgrounds
- Mostly **flat warm fields** (off-white or espresso). No busy gradients.
- Optional: very subtle large geometric blocks (the nested-square motif from the
  colour board), full-bleed warm photography with a protection gradient, or a
  single oversized Anybody letterform as a quiet graphic device.

---

## ICONOGRAPHY

The brand ships **no custom icon set**, so the system standardises on
**[Lucide](https://lucide.dev)** (loaded from CDN) as the closest match to the
identity: **thin, geometric, square-cornered, outline** icons that echo
Anybody's engineered edges and the system's hairline rules.

- **Style:** outline only, **1.75px stroke**, square/butt line caps, no fills,
  currentColor (usually espresso, occasionally horizon blue or lime for a single
  active state). 24px default grid; 20px in dense UI.
- **Substitution flag:** Lucide is a substitution — the studio did not provide
  icons. If EZMOTIF has a house icon set, drop the SVGs into `assets/icons/`
  and we'll swap it in.
- **Emoji:** never used as UI or decoration.
- **Unicode glyphs:** a few typographic marks are sanctioned as "icons" — the
  arrow `→`, the middle dot `·`, and the period as a rhythm device. Set in Lato.
- **Hand-drawn marks:** for playful accents prefer **Nanum Pen Script** strokes
  (a circled word, a scrawled arrow) over icon-library decoration.
- **Logo:** the EZMOTiF wordmark is the hero mark; there is no separate symbol/
  monogram. Use `assets/logo-espresso.png` on light, `assets/logo-stonegrey.png`
  on espresso. Maintain clear space ≥ the cap-height on all sides; never recolour
  beyond the two supplied versions or the lime accent for special uses.

---

## INDEX — what's in this system

**Root**
- `README.md` — this file (brand context, content + visual foundations, iconography, index)
- `colors_and_type.css` — color tokens, type tokens, semantic element classes
- `SKILL.md` — Agent-Skills-compatible entry point

**Folders**
- `fonts/` — Anybody (variable), Lato (7 weights), Nanum Pen Script
- `assets/` — logos (espresso + stone grey), branding colour board
- `preview/` — Design System tab cards (colors, type, spacing, components, brand)
- `ui_kits/studio-website/` — EZMOTIF studio marketing site UI kit (index.html + JSX components)

> No product codebase or Figma was provided. The UI kit is an original
> interpretation that demonstrates the brand applied to a studio website — not a
> recreation of an existing product. No slide deck/template was supplied, so none
> was created; ask if you'd like a branded deck template added.

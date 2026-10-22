# SOLACE website

A static website for SOLACE (Supportive Opportunities for Living, Assistance, Community & Empowerment): transitional housing for veterans and people in need, starting in Dallas, Texas.

Plain HTML, CSS, and a little vanilla JavaScript. There's no build step, no framework, and no external fonts, scripts, or hotlinked images.

## Structure

```
website/
├── index.html          Home: mission hero, the problem, who we serve, how it works, impact goals, get involved
├── about.html          Mission, the matching problem, principles, why Dallas–Fort Worth, roadmap, founder, status note
├── programs.html       "Our Model": Match/House/Belong, veterans homes, one-home-one-population table,
│                       support, community life (House Manager, voting), example house rules, help that follows the person
├── get-involved.html   Donate ($160,000 campaign), gift tiers, sponsor a bed, in-kind gifts, volunteer, partner, interest form
├── apply.html          Apply for housing: safety note, who can apply, process, documents, housing interest form
├── contact.html        Contact details (placeholders), contact form, FAQ
├── css/styles.css      All styles (responsive, accessible color palette)
├── js/main.js          Mobile nav toggle, footer year, "form not connected" handler
└── images/
    ├── hero-home.svg   Hero illustration (original SVG)
    ├── logo-leaf.svg   Logo mark (leaf motif from the decks, redrawn as SVG)
    ├── favicon.svg
    └── leaf-1..4.png   Decorative leaf images taken from the SOLACE donor and pitch decks
```

## Preview

- Open `index.html` in a browser. Relative links work from the file system.
- Or run a local server from this folder: `python3 -m http.server 8000` and open http://localhost:8000.

## Deploy

Upload the folder as-is to any static host (Netlify, GitHub Pages, Cloudflare Pages, S3, and so on). `index.html` is the entry point.

## Placeholders to fill in

Search the HTML for `TODO` to find each one.

| What | Where | Current placeholder |
|---|---|---|
| Contact email | footer (all pages), `contact.html` | `contact@example.org` |
| Phone number (optional) | `contact.html` | none listed yet (TODO comment) |
| Mailing address | `contact.html` | `[Mailing address to come], Dallas, Texas`. Never list confidential home locations. |
| GoFundMe campaign link | `get-involved.html` ("Give on GoFundMe") | `https://www.gofundme.com/` |
| Form endpoints | `get-involved.html`, `apply.html`, `contact.html` (`action="#"`) | Forms don't submit yet. `main.js` shows a "not connected" message. Housing inquiries may be sensitive, so use a secure, access-controlled service. |
| Crisis resources | `apply.html` | Only "call 911" is shown. A TODO suggests adding verified hotlines (for example the Veterans Crisis Line and the National Domestic Violence Hotline). |

Also review:
- **Tax status wording.** The site says the SOLACE Community Foundation 501(c)(3) is planned (application in 2027) and that gifts are not yet tax-deductible, matching the source documents. Update it when that changes.
- **Dates and goals.** "Spring 2027" first move-in, 16 homes and 96 beds by 2029, and the outcome targets come from the 2026 plan and donor deck. They are presented as goals. Update them as plans change.

## Editing tip

Each page repeats the same header and footer, so update every page when you change navigation or footer text.

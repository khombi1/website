# Sweet Crumbs Bakery Website
- **Student:** Khombisile Mavunge
- **Student number:** 10528846
- **Subject:** WEDE5020 - Web Development
- **Institution:** IIE Rosebank College


A multi-page website for Sweet Crumbs Bakery, a family bakery in Nkomazi, Mpumalanga, founded in 2017 by Lindiwe Dube. Built for WEDE5020 (Web Development), Part 3.

**Live site:** https://khombi1.github.io/website/
**Repository:** https://github.com/khombi1/website
## Goals
- Build a clean, easy-to-navigate website for a small bakery business
- Apply responsive design so the site works well on desktop, tablet, and mobile
- Practice semantic HTML, CSS layout techniques (Flexbox and Grid), and basic JavaScript form handling
- Add interactive JavaScript features and validated forms (Part 3)
- Apply SEO best practices and deploy the site online (Part 3)

## Part 1 Summary
In Part 1, I planned and built the first version of the Sweet Crumbs Bakery website. It had five linked pages (Home, About, Products, Enquiry and Contact), a consistent navigation header and footer, and a basic enquiry form. I used semantic HTML and added a logo and photography to match the bakery's brand.

## Part 2 Summary
In Part 2, I styled the site with an external stylesheet (css/style.css) using Google Fonts (Lora and Open Sans), a brown, cream and peach colour palette, Flexbox for the header and navigation, CSS Grid for the product cards, hover and focus states, and media queries at 1024px and 600px so the layout adapts to tablet and mobile screens.
## Features
- Five responsive pages: Home, About, Products, Enquiry and Contact
- Accordion FAQ (About page)
- Product search and sort, plus a gallery lightbox (Products page)
- Scroll fade-in animations and DOM-built content
- Interactive Leaflet map with a marker (Contact page)
- Enquiry form with HTML5 and JavaScript validation, AJAX submission, and an estimated cost and availability response
- Contact form that validates input and compiles an email the visitor can send to hello@sweetcrumbsbakery.co.za
- SEO: titles, meta descriptions, heading structure, image alt text, robots.txt and sitemap.xml
- Images: bread.jpg (Kaboompics, 2020), cakes.jpg (flat hito, 2018), cookies.jpg (Sarah Films, 2022), croissant.jpg (Collington, 2025), cupcake.jpg (Ren, 2020), muffins.jpg (Chalova, 2021), interior.jpg (Boltneva, 2024). Logo: logo.png (Canva, n.d.)

## Technologies
HTML5, CSS3 (Flexbox and Grid), JavaScript (ES6), Leaflet 1.9.4, OpenStreetMap tiles, Google Fonts (Lora and Open Sans), Git and GitHub, GitHub Pages.

## Folder structure
- index.html, about.html, products.html, enquiry.html, contact.html
- css/style.css
- js/main.js (interactive features), js/forms.js (form validation and submission), js/script.js (Part 2 script)
- images/ (all site images)
- robots.txt, sitemap.xml
- screenshot-desktop.jpeg, screenshot-tablet.jpeg, screenshot-mobile.jpeg

## Setup instructions
1. Clone the repository: git clone https://github.com/khombi1/website.git
2. Open the folder in VS Code.
3. Open index.html in a browser (or use the Live Server extension).
4. The contact map needs an internet connection.
5. To enable real form submission, create a free Formspree form and replace YOUR_ID in the FORM_ENDPOINT line in js/forms.js. Until then, the enquiry form runs in demo mode.

## Screenshots
![Desktop view](screenshot-desktop.jpeg)
![Tablet view](screenshot-tablet.jpeg)
![Mobile view](screenshot-mobile.jpeg)

## Testing
- Pages checked in the W3C HTML validator: [result, e.g. no errors on all 5 pages]
- Forms tested with empty, invalid and valid input
- Layout checked at desktop, tablet and mobile widths
- Live site tested after deployment on GitHub Pages

## Changelog

| 26 october 2026 | Version | Feedback received | Change made | Testing outcome |
|------|---------|-------------------|-------------|-----------------|
| [26 october 2026] | 2.1 | index.html had malformed HTML and no document structure | Rebuilt index.html with one DOCTYPE, html, head and body, and correct nesting | Passed W3C validator |
| [26 october 2026] | 2.1 | about.html had duplicated DOCTYPE and html/head sections | Removed the duplicate sections | Passed W3C validator |
| [26 october 2026] | 2.1 | Form loaded js/script.js but the file was script.js.txt | Removed script.js.txt and fixed script paths on all pages | Scripts load with no console errors |
| [26 october 2026] | 2.1 | Home page had no viewport meta tag or Google Fonts link | Added both to the head of every page | Fonts and responsive layout work on all pages |
| [26 october 2026] | 2.1 | Spelling and capitalisation errors ("freash", "corissants", "traditonal") | Corrected spelling and capitalisation, including image alt text | Proofread on all pages |
| [26 october 2026] | 2.1 | Duplicate website folder | Deleted the duplicate folder, kept one final version of each page, and moved the js folder out of css | Clean folder structure |
| [26 october 2026] | 2.1 | README screenshot names did not match actual files | Renamed screenshots and updated links | Screenshots display on GitHub |
| [26 october 2026] | 2.1 | References lacked exact URLs and access dates | Updated references with URLs and access dates in Harvard format | Checked against the IIE guide |
| [26 october 2026] | 3.0 | New: JavaScript interactivity | Added main.js (accordion, lightbox, search and sort, animations, Leaflet map) | Tested in browser |
| [26 october 2026] | 3.0 | New: form validation | Added forms.js with validation, error messages, AJAX submission, enquiry response and contact email | Tested with valid and invalid input |
| [26 october 2026] | 3.0 | New: SEO | Added meta tags, heading structure, alt text, robots.txt and sitemap.xml | Checked on the live site |
all 5 pages passed the W3C HTML validator with no errors on 26 october 2026.

## References
Agafonkin, V. (2023) *Leaflet: an open-source JavaScript library for mobile-friendly interactive maps* (version 1.9.4). Available at: https://leafletjs.com/ (Accessed: [date you accessed it]).

Google (n.d.) *Google Fonts: Lora and Open Sans*. Available at: https://fonts.google.com/ (Accessed: [date you accessed it]).

OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright (Accessed: [date you accessed it]).

Formspree (n.d.) *Formspree: form backend service*. Available at: https://formspree.io/ (Accessed: [date you accessed it]).

## References

Agafonkin, V. (2023) *Leaflet: an open-source JavaScript library for mobile-friendly interactive maps* (version 1.9.4). Available at: https://leafletjs.com/ (Accessed: 25 October 2026).

Boltneva, V. (2024) *Charming bakery display of fresh bread and pastries* [Photograph]. Available at: https://www.pexels.com/photo/charming-bakery-display-of-fresh-bread-and-pastries-29380150/ (Accessed: 25 October 2026).

Canva (n.d.) *Red and white cute vintage cupcake bakery logo* [Template]. Available at: https://www.canva.com/templates/EAHNNHxfpVQ-red-and-white-cute-vintage-cupcake-bakery-logo/ (Accessed: 25 October 2026).

Chalova, Y. (2021) *Close-up shot of chocolate cupcakes on wooden surface* [Photograph]. Available at: https://www.pexels.com/photo/close-up-shot-of-chocolate-cupcakes-on-wooden-surface-10167769/ (Accessed: 25 October 2026).

Collington, J. (2025) *Close-up of freshly baked croissants in bakery display* [Photograph]. Available at: https://www.pexels.com/photo/close-up-of-freshly-baked-croissants-in-bakery-display-30403209/ (Accessed: 25 October 2026).

flat hito (2018) *Bake pastry on short-stem cake tray* [Photograph]. Available at: https://www.pexels.com/photo/bake-pastry-on-short-stem-cake-tray-863006/ (Accessed: 25 October 2026).

Formspree (n.d.) *Formspree: form backend service*. Available at: https://formspree.io/ (Accessed: 25 October 2026).

Google (n.d.) *Google Fonts: Lora and Open Sans*. Available at: https://fonts.google.com/ (Accessed: 25 October 2026).

Kaboompics (2020) *Basket with fresh Swiss buns on marble table* [Photograph]. Available at: https://www.pexels.com/photo/basket-with-fresh-swiss-buns-on-marble-table-4197905/ (Accessed: 25 October 2026).

OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright (Accessed: 25 October 2026).

Ren, W. (2020) *Close-up photo of sweet cupcakes* [Photograph]. Available at: https://www.pexels.com/photo/close-up-photo-of-sweet-cupcakes-4981623/ (Accessed: 25 October 2026).

Sarah Films (2022) *Cookies on baking tray* [Photograph]. Available at: https://www.pexels.com/photo/cookies-on-baking-tray-14839145/ (Accessed: 25 October 2026).
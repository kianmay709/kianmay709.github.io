# Stonevale Commerce website

Live site: https://stonevalecommerce.com/

This repository is the publishing source for the existing GitHub Pages website. `CNAME` retains the custom domain. The site is static HTML, CSS and JavaScript; there is no build step. It is not published through the connected Wix account.

## Files and contact flow

- `index.html`: concise positioning, expandable expertise, potential solution examples, approach, advisory demonstrations and enquiry form.
- `styles.css`: retained shared styles for supporting pages.
- `luxury.css`: the restrained editorial homepage, updated 3 November 2026; no card grids, with service details revealed on request.
- `script.js`: mobile navigation, optional reveals on older layouts, year and enquiry submission handling.
- `privacy.html`, `thank-you.html`: supporting contact pages.
- `sample-audit.html`, `sample-ecommerce-audit.html`: existing fictional advisory demonstration reports, retained unchanged.
- `assets/`: existing logo and monogram, retained unchanged.
- `POSITIONING.md`: agreed positioning and outreach conventions for future work.

The enquiry form retains the existing Formspree endpoint, field names and email fallback. On a successful JSON response, it redirects to `/thank-you.html`; on failure it shows a retry/direct-email message. A discovery call is requested through this form and scheduled by email; no calendar booking integration is implied.

Preview from this folder with `python3 -m http.server 8765 --bind 127.0.0.1`.

Do not change domain or form routing as part of visual updates. Do not modify unrelated repositories or outreach systems.

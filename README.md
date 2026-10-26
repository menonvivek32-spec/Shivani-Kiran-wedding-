# Wedding invitation website starter

A responsive, mobile-first wedding invitation inspired by the elegant forest-green, cream and antique-gold style of the reference. This is a new starter project, not the original site's source code or assets.

## Quick start on an Android phone

You can edit and publish this project from your phone using a browser:

1. Download and extract `sumita-vishal-wedding-site.zip`.
2. Create/sign in to a GitHub account and create a **public** repository named `wedding-invitation` (or keep it private if your chosen deployment workflow supports it).
3. Upload the extracted files and folders to the repository. Make sure `index.html`, `styles.css`, `script.js`, and `assets/` are at the repository root, not inside an extra nested folder.
4. Open Vercel in your browser, sign in with GitHub, choose **Add New → Project**, and import that repository. This is a plain static site; no build command is needed. If asked, leave Build Command empty and set Output Directory to `.`.
5. Deploy. Vercel gives you a shareable website URL. Every push to the connected repository can redeploy it.

## Personalise the site first

Open `script.js` and edit the `wedding` object near the top:

- `date`: wedding date and local time, e.g. `2027-02-14T10:00:00`.
- `dateLabel`: date text shown to guests.
- `venueName`, `venueAddress`, `mapUrl`: real venue details.
- `rsvpEndpoint`: add a Formspree form endpoint if you want submissions delivered online.

Edit the couple names, family names, shloka, event timing and wording in `index.html`. Replace the four sample photo URLs in the gallery with images the couple has permission to use. For better speed/privacy, upload compressed photos into `assets/` and use relative paths such as `assets/couple-1.jpg`.

## Make RSVP work

The starter includes validation and an optional Formspree endpoint. Create a form at Formspree, copy its endpoint, and set `rsvpEndpoint` in `script.js` to that endpoint. Test a submission before sharing the invitation. Without an endpoint, the form opens the visitor's email app with a draft; replace `REPLACE-WITH-FAMILY-EMAIL@example.com` with the family's real RSVP email. The form is not a private database by itself.

## Add background music

Use only music the couple has rights/permission to use. Add an MP3 named `wedding-music.mp3` into `assets/`. The play/pause button is included; music will not autoplay, because mobile browsers generally require a user gesture.

## Before publishing checklist

- [ ] Replace all sample text and placeholder venue details.
- [ ] Set the exact wedding date and local time.
- [ ] Replace stock gallery photos with approved couple photos.
- [ ] Set and test the RSVP destination.
- [ ] Add licensed music, if desired.
- [ ] Open the deployed link on Android and test every section, map link, RSVP and music control.
- [ ] Share the public link only after the family approves it.

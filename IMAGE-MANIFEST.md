# Image & document manifest

Every photo and PDF on the site is currently an on-theme **placeholder**. To go
live with the real material, replace each placeholder file below with the matching
file from your Google Drive folder, keeping the **exact filename on the left**.

You (or Claude Code) just drop the files into `/public` over the placeholders —
no code changes needed. Filenames must match exactly.

---

## Photos → `public/images/`

| Put this file here (keep the name)   | …using this Drive file            |
|--------------------------------------|-----------------------------------|
| `hero.jpg`                           | pick your best exterior — e.g. **KA 8 1900.jpg** |
| `ka-1900.jpg`                        | KA 8 1900.jpg                     |
| `ka-1912.jpg`                        | KA 3 1912.jpg                     |
| `ka-1952.jpg`                        | KA2 1952.jpg                      |
| `ka-1950s.jpg`                       | KA 7 1950s.jpg                    |
| `ka-1960s.jpg`                       | KA 6 10960s.jpg (labelled 1960s)  |
| `ka-1960s-b.jpg`                     | Kings Arms 11 1960s.jpg           |
| `ka-1981.jpg`                        | KA 10 1981.jpg                    |
| `ka-1995.jpg`                        | KA 9 1995 refurbishment.jpg       |
| `ka-a.jpg`                           | KA1.jpg                           |
| `the-fire-1.jpg`                     | Fire.jpg                          |
| `the-fire-2.jpg`                     | Fire 2.jpg                        |
| `the-fire-3.jpg`                     | Fire 3.jpg                        |
| `the-fire-4.jpg`                     | Fire 4.jpg                        |
| `1897-map-stokenchurch.jpg`          | 1897 Map of stokenchurch.jpg      |
| `conservation-area-map.jpg`          | (a screenshot of the conservation map, optional) |

Spare photos not yet placed: **KA4.jpg**, **KA5.jpg** — add more slots in
`app/kings-arms/page.js` if you'd like them in the gallery.

**Not used:** the Alamy stock image (`…GED7HR.jpg`) — left out on purpose.
The Facebook-sourced image (`477442971…_n.jpg`) is unused pending confirmation
of who it belongs to.

## People → `public/images/people/`

| Filename (keep exactly)     | Drive file              |
|-----------------------------|-------------------------|
| `sir-david-steel.jpg`       | Sir-David-Steel.jpeg    |
| `chris-nash.jpg`            | Chris Nash.jpeg         |
| `andrew-preece.jpg`         | Andrew Preece.jpeg      |
| `bernice-scanlon.jpg`       | Bernice Scanlon.png     |
| `mark-ackford.jpg`          | Rev Mark Ackford.jpeg   |
| `egon-hunt.jpg`             | Egon Hunt.jpeg          |
| `tim-anning.jpg`            | Tim Anning.jpeg         |
| `richard-rivett.jpg`        | Richard Rivett.jpeg     |
| `rob-emmett.jpg`            | Rob Emmett.jpeg         |
| `andrew-nunn.jpg`           | Andrew Nunn.jpeg        |
| `peter-sutcliffe.jpg`       | Peter Sutcliffe.jpeg    |

## Documents → `public/documents/`

| Filename (keep exactly)                    | Drive file                                  |
|--------------------------------------------|---------------------------------------------|
| `order-for-trial-june-2026.pdf`            | June 2026 Order for Trial.pdf               |
| `land-registry-title-plan.pdf`             | 2026-06-16_title_plan_BM151257_GOV.UK.pdf  |
| `stokenchurch-conservation-area-map.pdf`   | Stokenchurch-conservation-area-map.pdf     |

---

## Text — now included

The real text from the two Word documents is now in the site:

- ✅ **Kings Hotel Background.docx** → the full history is in `app/kings-arms/page.js`
  (royalty, the Civil War, inquests, auctions, the licensees, and the fire).
- ✅ **Chairman's Introduction.docx** → in `app/about/page.js` (Project Phoenix).
- ✅ **Ownership & the dispute** → summarised on `app/the-case/page.js`, trial set for April 2027.

Still to come:
- **Sir David Steel's foreword** (when supplied) → foreword block in `app/about/page.js`.
- **Kings Hotel People.docx** → optional short associate bios if you'd like them added.

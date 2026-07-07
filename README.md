# The Kings Arms Reclamation — website

A Next.js (App Router) site for the campaign to reclaim the Kings Arms in
Stokenchurch. Deploys on Vercel exactly like your dental sites: push to `main`,
Vercel builds and publishes automatically.

## Pages
- `/` — home
- `/kings-arms` — history, the through-the-years gallery, the fire, and maps
- `/about` — President's foreword, Chairman's introduction, and the associates
- `/the-case` — the proceedings and the document downloads
- `/support` — register support / pledge interest (the form)

## Before it goes live
1. **Drop in the real photos and PDFs.** Everything is a placeholder right now —
   see `IMAGE-MANIFEST.md` for exactly which Drive file replaces each one. Keep
   the filenames as they are and drop the files into `/public`.
2. **Paste the two documents' text** (history + Chairman's introduction) over the
   `EDIT ME` blocks — again, see the manifest.
3. **Wire up the form:** create a free form at https://formspree.io and paste its
   endpoint into `FORM_ENDPOINT` in `components/SupportForm.js`.
4. **Have the case page checked** before publishing court material (proceedings
   are ongoing).

## Get it live (one time)
1. Create a new empty GitHub repo (separate from the dental sites).
2. Push these files to `main` (GitHub Desktop or Claude Code).
3. vercel.com → Add New → Project → import the repo → Deploy (no config needed).
4. Vercel → Settings → Domains → add `www.thekingsarmsreclamation.com`.

## Editing later
All wording to change is marked with `EDIT ME`. Colours and type live in the
`:root` block at the top of `app/globals.css`. Edit in Claude Code the same way
you do the dental sites.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

- Fonts are self-hosted (no Google calls). Content is readable without JavaScript;
  animations are enhancement only. Mobile-first, keyboard-accessible, reduced-motion respected.

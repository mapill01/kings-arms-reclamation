export const metadata = {
  title: "Minutes",
  description:
    "Minutes of meetings of the Kings Arms Reclamation Group, published in full. The group is committed to being totally transparent.",
};

/* ────────────────────────────────────────────────────────────────
   EDIT ME — paste the published CSV link for your minutes sheet.
   In the Sheet: File → Share → Publish to web → select the sheet,
   choose "Comma-separated values (.csv)" → Publish → copy the link.
   Setup steps are in MINUTES-SETUP.md.
   ──────────────────────────────────────────────────────────────── */
const MINUTES_SHEET_CSV = "PASTE_YOUR_PUBLISHED_CSV_LINK_HERE";

// Re-check the sheet every 10 minutes, so new rows appear without a redeploy.
export const revalidate = 600;

/* Minimal CSV parser — handles quoted fields and commas inside them. */
function parseCSV(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c !== "\r") field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

async function getMinutes() {
  if (MINUTES_SHEET_CSV.includes("PASTE_YOUR")) return null;
  try {
    const res = await fetch(MINUTES_SHEET_CSV, { next: { revalidate: 600 } });
    if (!res.ok) return [];
    const rows = parseCSV(await res.text());
    if (rows.length < 2) return [];

    // Read the header row so column order doesn't matter.
    const head = rows[0].map((h) => h.trim().toLowerCase());
    const idx = (name) => head.indexOf(name);
    const iDate = idx("date"), iTitle = idx("title"), iLink = idx("link"), iNotes = idx("notes");

    return rows.slice(1).map((r) => ({
      date: (r[iDate] || "").trim(),
      title: (r[iTitle] || "").trim(),
      link: (r[iLink] || "").trim(),
      notes: (r[iNotes] || "").trim(),
    })).filter((m) => m.title || m.date);
  } catch {
    return [];
  }
}

export default async function Minutes() {
  const minutes = await getMinutes();

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Transparency</p>
          <h1>Minutes of our meetings.</h1>
          <p className="lede">
            The group is, and will continue to be, totally transparent. Our minutes are published here
            in full.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">The record</span>
          <h2 className="reveal">Meeting minutes.</h2>

          {minutes === null ? (
            <div className="note reveal">
              <p>Minutes will be published here shortly.</p>
            </div>
          ) : minutes.length === 0 ? (
            <div className="note reveal">
              <p>No minutes have been published yet. They will appear here after our next meeting.</p>
            </div>
          ) : (
            <ul className="doc-list reveal">
              {minutes.map((m, i) => (
                <li key={i}>
                  {m.link ? (
                    <a className="doc" href={m.link} target="_blank" rel="noopener noreferrer">
                      <span className="doc-icon">PDF</span>
                      <span className="doc-body">
                        <span className="doc-title">{m.title || "Meeting minutes"}</span>
                        <span className="doc-meta">
                          {m.date}
                          {m.notes ? ` \u00b7 ${m.notes}` : ""}
                        </span>
                      </span>
                      <span className="doc-arrow">&darr;</span>
                    </a>
                  ) : (
                    <div className="doc" style={{ cursor: "default" }}>
                      <span className="doc-icon">&mdash;</span>
                      <span className="doc-body">
                        <span className="doc-title">{m.title || "Meeting minutes"}</span>
                        <span className="doc-meta">
                          {m.date}
                          {m.notes ? ` \u00b7 ${m.notes}` : ""}
                        </span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}

          <div className="note reveal">
            <p>
              Minutes are published as PDFs. If a document does not open, or you would like a printed
              copy, email{" "}
              <a href="mailto:Chris@thekingsarmsreclamation.com">Chris@thekingsarmsreclamation.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

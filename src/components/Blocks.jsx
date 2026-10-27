// Renders the content blocks used inside case-study sections.
//   { p }                 paragraph
//   { ul }                bullet list
//   { flow: [{label, steps}] }   chained steps, one row per pathway
//   { table: {head, rows, caption} }
//   { bars: {items:[{label, value}], max, caption} }
export default function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    if (b.p) return <p key={i}>{b.p}</p>;
    if (b.ul) {
      return (
        <ul key={i} className="bullets">
          {b.ul.map((t) => <li key={t}>{t}</li>)}
        </ul>
      );
    }
    if (b.flow) {
      return (
        <div key={i} className="flow">
          {b.flow.map((row) => (
            <div key={row.label} className="flow__row">
              <p className="flow__label">{row.label}</p>
              <ol className="flow__steps">
                {row.steps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          ))}
        </div>
      );
    }
    if (b.table) {
      const t = b.table;
      return (
        <div key={i} className="table-wrap">
          <table>
            {t.caption && <caption>{t.caption}</caption>}
            <thead><tr>{t.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {t.rows.map((r) => (
                <tr key={r[0]}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (b.bars) {
      const { items, max, caption } = b.bars;
      return (
        <figure key={i} className="bars">
          {caption && <figcaption>{caption}</figcaption>}
          <ul>
            {items.map((it) => (
              <li key={it.label}>
                <span className="bars__label">{it.label}</span>
                <span className="bars__track"><span className="bars__fill" style={{ width: `${(it.value / max) * 100}%` }} /></span>
                <span className="bars__value">{it.value}</span>
              </li>
            ))}
          </ul>
        </figure>
      );
    }
    return null;
  });
}

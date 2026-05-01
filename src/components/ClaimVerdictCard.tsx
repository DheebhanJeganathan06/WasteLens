import type { ClaimVerdict, Verdict } from '../types'

interface Props {
  verdict: ClaimVerdict
}

const verdictMeta: Record<Verdict, { label: string; tone: string }> = {
  supported: { label: 'Supported', tone: 'text-confidence-high border-confidence-high/40 bg-confidence-high/5' },
  misleading: { label: 'Misleading', tone: 'text-confidence-misleading border-confidence-misleading/40 bg-confidence-misleading/5' },
  unsupported: { label: 'Unsupported', tone: 'text-confidence-low border-confidence-low/40 bg-confidence-low/5' },
  depends: { label: 'Depends on the data', tone: 'text-confidence-med border-confidence-med/40 bg-confidence-med/5' },
  'low-confidence': { label: 'Low confidence', tone: 'text-confidence-low border-confidence-low/40 bg-confidence-low/5' },
}

export default function ClaimVerdictCard({ verdict }: Props) {
  const meta = verdictMeta[verdict.verdict]
  return (
    <article className="rounded-md border border-paper-line bg-paper-card p-6">
      <header className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <p className="font-serif text-lg font-semibold text-ink leading-snug">
          “{verdict.claim}”
        </p>
        <span
          className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium ${meta.tone}`}
        >
          {meta.label}
        </span>
      </header>
      <p className="text-sm text-ink-soft leading-relaxed">{verdict.reasoning}</p>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-confidence-high/30 bg-confidence-high/5 p-3 text-sm">
          <div className="small-caps mb-1 text-confidence-high">Defensible</div>
          <p className="text-ink-soft">{verdict.defensible}</p>
        </div>
        <div className="rounded border border-confidence-misleading/30 bg-confidence-misleading/5 p-3 text-sm">
          <div className="small-caps mb-1 text-confidence-misleading">Indefensible</div>
          <p className="text-ink-soft">{verdict.indefensible}</p>
        </div>
      </div>
    </article>
  )
}

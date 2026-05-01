import { useState } from 'react'
import type { Dataset } from '../types'

interface Props {
  dataset: Dataset
}

export default function DatasetCard({ dataset }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <article className="rounded-md border border-paper-line bg-paper-card p-6">
      <header className="mb-3">
        <h3 className="font-serif text-xl font-semibold text-ink">{dataset.name}</h3>
        <p className="mt-1 text-sm text-ink-mute">
          {dataset.publisher} · {dataset.year}
        </p>
      </header>
      <dl className="grid grid-cols-1 gap-y-2 text-sm text-ink-soft sm:grid-cols-2 sm:gap-x-6">
        <div>
          <dt className="small-caps text-ink-mute">Sample</dt>
          <dd>{dataset.sampleSize}</dd>
        </div>
        <div>
          <dt className="small-caps text-ink-mute">Geography</dt>
          <dd>{dataset.geography}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="small-caps text-ink-mute">Method</dt>
          <dd>{dataset.method}</dd>
        </div>
      </dl>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-deep"
        aria-expanded={open}
      >
        {open ? '− Hide strengths & limitations' : '+ Strengths & limitations'}
      </button>
      {open && (
        <div className="mt-4 grid grid-cols-1 gap-4 border-t border-paper-line pt-4 text-sm md:grid-cols-2">
          <div>
            <h4 className="small-caps mb-2 text-confidence-high">Strengths</h4>
            <ul className="list-disc space-y-1 pl-5 text-ink-soft">
              {dataset.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="small-caps mb-2 text-confidence-misleading">Limitations</h4>
            <ul className="list-disc space-y-1 pl-5 text-ink-soft">
              {dataset.limitations.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="small-caps mb-2 text-ink-mute">Access</h4>
            <p className="text-ink-soft">{dataset.accessNote}</p>
          </div>
        </div>
      )}
    </article>
  )
}

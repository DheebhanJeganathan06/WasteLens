import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="rule mt-24 bg-paper-card">
      <div className="container-wide grid gap-8 py-12 text-sm text-ink-soft md:grid-cols-3">
        <div>
          <div className="font-serif text-base font-semibold text-ink">
            Waste<span className="text-accent">Lens</span>
          </div>
          <p className="mt-2 max-w-xs text-ink-mute">
            A data-driven audit of food-waste research — and an honest accounting of what the data
            can defend.
          </p>
        </div>
        <div>
          <div className="small-caps mb-3 text-ink-mute">Sections</div>
          <ul className="space-y-1.5">
            <li><Link to="/problem" className="no-underline hover:text-ink">The Problem</Link></li>
            <li><Link to="/data" className="no-underline hover:text-ink">The Data</Link></li>
            <li><Link to="/findings/k12" className="no-underline hover:text-ink">Findings</Link></li>
            <li><Link to="/solutions" className="no-underline hover:text-ink">Solutions</Link></li>
            <li><Link to="/about" className="no-underline hover:text-ink">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="small-caps mb-3 text-ink-mute">Method</div>
          <p className="text-ink-mute">
            Every figure on this site is annotated with its source, sample size, and confidence
            level. Where the data does not support a claim, we say so.
          </p>
        </div>
      </div>
      <div className="border-t border-paper-line">
        <div className="container-wide py-4 text-xs text-ink-mute">
          Built as an editorial project. © {new Date().getFullYear()} WasteLens.
        </div>
      </div>
    </footer>
  )
}

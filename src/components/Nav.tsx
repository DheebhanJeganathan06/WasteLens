import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/problem', label: 'The Problem' },
  { to: '/data', label: 'The Data' },
  { to: '/findings/k12', label: 'Findings' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 border-b border-paper-line bg-paper/85 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="no-underline">
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            Waste<span className="text-accent">Lens</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm no-underline transition-colors ${
                  isActive ? 'text-accent' : 'text-ink-soft hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-ink-soft"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-sm">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-paper-line bg-paper md:hidden">
          <div className="container-wide flex flex-col gap-1 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm no-underline ${isActive ? 'text-accent' : 'text-ink-soft'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/findings/k12', label: 'K-12 schools' },
  { to: '/findings/universities', label: 'Universities' },
  { to: '/findings/limits', label: "What the data can't tell us" },
]

export default function FindingsTabs() {
  return (
    <nav className="mb-10 flex flex-wrap gap-2 border-b border-paper-line pb-2">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          className={({ isActive }) =>
            `rounded-full px-4 py-1.5 text-sm no-underline transition-colors ${
              isActive
                ? 'bg-ink text-paper'
                : 'border border-paper-line text-ink-soft hover:border-accent hover:text-accent'
            }`
          }
        >
          {t.label}
        </NavLink>
      ))}
    </nav>
  )
}

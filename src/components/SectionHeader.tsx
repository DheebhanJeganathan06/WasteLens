interface Props {
  eyebrow?: string
  title: string
  lede?: string
}

export default function SectionHeader({ eyebrow, title, lede }: Props) {
  return (
    <header className="mb-10 max-w-3xl">
      {eyebrow && <div className="small-caps mb-3 text-accent">{eyebrow}</div>}
      <h1 className="text-balance">{title}</h1>
      {lede && <p className="mt-5 text-lg text-ink-soft">{lede}</p>}
    </header>
  )
}

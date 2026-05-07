import SectionHeader from '../components/SectionHeader'
import CaveatCallout from '../components/CaveatCallout'

const contributors = [
  {
    name: 'Dheebhan Jeganathan',
    role: 'Analysis & narrative',
    bullets: [
      'Led exploratory data analysis and statistical modeling',
      'Interpreted results and identified meaningful trends',
      'Framed findings through storytelling and presentation design',
      'Guided research direction and ethical decision-making',
    ],
  },
  {
    name: 'Srihas Inaganti',
    role: 'Engineering & integration',
    bullets: [
      'Developed technical infrastructure and backend logic',
      'Implemented the interactive demo',
      'Integrated analytical outputs into a functional workflow',
      'Reviewed and refined technical components of the project',
    ],
  },
  {
    name: 'Claude Opus',
    role: 'AI collaborator — direction & synthesis',
    bullets: [
      'Assisted with brainstorming and project direction',
      'Helped synthesize research and organize findings',
    ],
  },
  {
    name: 'ChatGPT Pro 5.4',
    role: 'AI collaborator — data work',
    bullets: [
      'Assisted with data cleaning and preprocessing',
      'Supported exploratory and statistical data analysis',
    ],
  },
]

const processStages = [
  {
    title: 'Ideation',
    items: [
      'Developed research questions',
      'Brainstormed intervention ideas',
      'Refined project scope',
    ],
  },
  {
    title: 'Iteration',
    items: [
      'Prompt → output → refinement cycle',
      'Reworked prompts for better specificity',
      'Compared outputs across AI tools',
    ],
  },
  {
    title: 'Human oversight',
    items: [
      'Verified AI-generated claims',
      'Corrected misleading outputs',
      'Decided which insights were realistic',
    ],
  },
  {
    title: 'Challenges',
    items: [
      'AI occasionally generalized too broadly',
      'Some generated code required debugging',
      'Contextual understanding still required humans',
    ],
  },
]

const takeaways = [
  'AI worked best when each tool had a specific job instead of being used for everything.',
  'Better prompts led to better answers because they gave the AI context, constraints, and direction.',
  'AI helped us move faster through research, cleaning, coding, and first-draft analysis.',
  'The strongest insights still came from humans deciding what was realistic, ethical, and useful.',
  'AI could find patterns, but we had to decide whether those patterns made sense in a real dining hall.',
  'The project improved when we treated AI outputs as starting points, not final answers.',
]

export default function Credits() {
  return (
    <article className="container-wide pt-16 pb-16">
      <SectionHeader
        eyebrow="Credits"
        title="Who built this, and how"
        lede="WasteLens was produced for ENES256 as a human–AI collaboration. This page documents who contributed what, the process behind the analysis, and what we learned about working alongside AI tools."
      />

      <section className="mb-16">
        <h2 className="mb-6 text-2xl">Contributors</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {contributors.map((c) => (
            <div
              key={c.name}
              className="rounded-md border border-paper-line bg-paper-card p-6"
            >
              <div className="font-serif text-xl font-semibold text-ink">{c.name}</div>
              <div className="small-caps mt-1 text-accent">{c.role}</div>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {c.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    — {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm italic text-ink-mute">
          “Combining human judgment with AI-assisted analysis to tackle campus food waste.”
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl">The process</h2>
        <p className="mb-8 max-w-3xl text-ink-soft">
          The work was not a single hand-off to AI. It was a loop: prompting, checking, and
          refining, with humans making the final calls on what to trust and publish.
        </p>
        {/* Mobile: stacked vertical timeline */}
        <ol className="relative border-l border-paper-line pl-8 md:hidden">
          {processStages.map((s, idx) => (
            <li
              key={s.title}
              className={idx === processStages.length - 1 ? '' : 'pb-10'}
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-paper-line bg-paper text-[11px] font-medium text-accent">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="font-serif text-xl font-semibold text-ink">{s.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {s.items.map((i) => (
                  <li key={i} className="leading-relaxed">
                    — {i}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal linear timeline */}
        <ol className="relative hidden md:grid md:grid-cols-4 md:gap-6">
          {processStages.map((s, idx) => {
            const isLast = idx === processStages.length - 1
            return (
              <li key={s.title} className="relative flex flex-col items-start">
                {!isLast && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[36px] right-[-24px] top-[18px] h-px border-t border-dashed border-paper-line"
                    />
                    <svg
                      aria-hidden="true"
                      className="pointer-events-none absolute top-[18px] h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-accent"
                      style={{ left: 'calc(50% + 30px)' }}
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <polygon points="2,1 10,6 2,11" />
                    </svg>
                  </>
                )}
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-paper-line bg-paper text-xs font-medium text-accent shadow-sm">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="mt-4 font-serif text-xl font-semibold text-ink">
                  {s.title}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  {s.items.map((i) => (
                    <li key={i} className="leading-relaxed">
                      — {i}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
        <p className="mt-6 max-w-2xl text-sm italic text-ink-mute">
          “Our process was more than asking AI for answers. It was a cycle of prompting, checking,
          and refining.”
        </p>
      </section>

      <div className="grid gap-12 md:grid-cols-12">
        <div className="space-y-5 text-ink-soft md:col-span-7">
          <h2 className="text-2xl">Reflections</h2>
          <p>
            Working with AI tools accelerated the parts of the project that benefit from speed —
            scaffolding code, cleaning data, drafting language. It did not replace the slower work
            of judgment: deciding which figures could carry weight, which framings were honest, and
            where a confident-sounding output was actually wrong.
          </p>
          <p>
            Outputs sometimes appeared confident but incorrect, which is the failure mode we
            watched for most. Every claim that survived into the final site was verified against
            its source, and ambiguous figures were flagged rather than smoothed over.
          </p>

          <h2 className="mt-10 text-2xl">Key takeaways</h2>
          <ul className="space-y-3">
            {takeaways.map((t) => (
              <li key={t} className="leading-relaxed">
                — {t}
              </li>
            ))}
          </ul>
        </div>

        <aside className="md:col-span-5">
          <div className="rounded-md border border-paper-line bg-paper-card p-6">
            <h3 className="font-serif text-xl font-semibold text-ink">Final deliverables</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>— Data-driven food waste analysis</li>
              <li>— Consumption and behavioral insights</li>
              <li>— Statistical visualizations</li>
              <li>— Proposed sustainability interventions</li>
              <li>— This editorial site as the public-facing artifact</li>
            </ul>
          </div>

          <div className="mt-6">
            <CaveatCallout title="Course context" tone="note">
              <p>
                Produced for ENES256 by Dheebhan Jeganathan and Srihas Inaganti. The site reflects
                the state of the project at submission and may be revised as the underlying
                research evolves.
              </p>
            </CaveatCallout>
          </div>
        </aside>
      </div>
    </article>
  )
}

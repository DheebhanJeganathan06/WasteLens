import { Link } from 'react-router-dom'
import { headlineStats } from '../data/headlineStats'
import StatCard from '../components/StatCard'

export default function Home() {
  return (
    <>
      <section className="container-wide pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-4xl">
          <div className="small-caps mb-5 text-accent">A WasteLens audit</div>
          <h1 className="text-balance">
            What food-waste data <em className="text-accent not-italic">actually</em> says — and what it doesn't.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-ink-soft">
            The most-cited figures on cafeteria food waste come from small, self-selected samples.
            WasteLens audits the data behind the headlines and tells you what those datasets can —
            and cannot — defensibly support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/problem"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper no-underline transition-colors hover:bg-accent-deep"
            >
              Start with the problem
            </Link>
            <Link
              to="/findings/limits"
              className="rounded-full border border-paper-line px-5 py-2.5 text-sm font-medium text-ink no-underline transition-colors hover:border-accent hover:text-accent"
            >
              See what the data can't tell us
            </Link>
          </div>
        </div>
      </section>

      <section className="container-wide pb-20">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-serif">The headline numbers</h2>
          <Link to="/data" className="text-sm text-accent no-underline">
            Data sources →
          </Link>
        </div>
        <p className="mb-10 max-w-prose text-ink-soft">
          Three figures that shape the public conversation about school food waste — annotated with
          the sample sizes they were drawn from and the confidence each deserves.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {headlineStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="rule mb-12" />
        <h2 className="mb-6">Our thesis</h2>
        <div className="space-y-5 text-lg text-ink-soft">
          <p>
            Food-waste research is dominated by convenience samples, short measurement windows, and
            point-estimates extrapolated to entire populations. The fact that a number is widely
            cited does not make it well-grounded.
          </p>
          <p>
            WasteLens treats every figure as a claim that has to earn its confidence. Some claims —
            like the 76% reduction in milk waste from bulk dispensers — survive scrutiny. Others,
            like national totals built from 46-school audits, do not.
          </p>
          <p>
            This site is the audit.
          </p>
        </div>
      </section>
    </>
  )
}

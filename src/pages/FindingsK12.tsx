import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import SectionHeader from '../components/SectionHeader'
import FindingsTabs from '../components/FindingsTabs'
import ChartFrame from '../components/ChartFrame'
import CaveatCallout from '../components/CaveatCallout'
import ClaimVerdictCard from '../components/ClaimVerdictCard'
import { k12Histogram, k12DistributionMean, k12DistributionN } from '../data/k12Distribution'
import { wasteComposition } from '../data/wasteComposition'
import { auditReductions } from '../data/auditReductions'
import { claimVerdicts } from '../data/claimVerdicts'

const compositionData = (() => {
  const categories = ['Fruit & Vegetables', 'Grains', 'Dairy', 'Protein', 'Other']
  return wasteComposition.map((s) => {
    const row: Record<string, string | number> = {
      label: `${s.study} · ${s.grade}`,
    }
    for (const c of categories) {
      const bar = s.bars.find((b) => b.category === c)
      row[c] = bar ? bar.percent : 0
    }
    return row
  })
})()

const compositionColors: Record<string, string> = {
  'Fruit & Vegetables': '#3a7d7b',
  Grains: '#c9a227',
  Dairy: '#cfe1e0',
  Protein: '#a13a2c',
  Other: '#6b716e',
}

const k12Verdicts = claimVerdicts.filter((v) =>
  ['national-extrapolation', 'auditing-reduces-waste', 'vegetables-most-wasted'].includes(v.id),
)

export default function FindingsK12() {
  return (
    <article className="container-wide pt-16 pb-16">
      <SectionHeader
        eyebrow="Findings"
        title="K-12 schools: spread, composition, and the audit-effect myth"
        lede={`Three things the data supports — and three things it gets stretched into supporting. Anchored to ${k12DistributionN} schools in the WWF database.`}
      />
      <FindingsTabs />

      <section className="mb-16">
        <h2 className="mb-3">The spread is the story</h2>
        <p className="mb-8 max-w-prose text-ink-soft">
          The headline figure is{' '}
          <strong className="text-ink">39.2 lb of plate waste per student per year</strong>. But the
          mean obscures a wide spread: many schools cluster well above and below it, and the long
          right tail dominates the totals.
        </p>
        <ChartFrame
          title="Distribution of plate waste across audited schools"
          subtitle="Pounds of plate waste per student per year, bucketed in 10-lb bins."
          source="WasteLens approximation, calibrated to WWF Food Waste Warriors summary statistics"
          sampleSize={`${k12DistributionN} schools (illustrative)`}
          caveat="Synthetic distribution matched to published mean and tail; awaiting row-level data."
          height={340}
        >
          <ResponsiveContainer>
            <BarChart data={k12Histogram}>
              <CartesianGrid stroke="#e6e1d6" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="range" tick={{ fontSize: 11, fill: '#6b716e' }} label={{ value: 'lb / student / year', position: 'insideBottom', offset: -5, fill: '#6b716e', fontSize: 11 }} height={50} />
              <YAxis tick={{ fontSize: 11, fill: '#6b716e' }} label={{ value: 'schools', angle: -90, position: 'insideLeft', fill: '#6b716e', fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: 6, border: '1px solid #e6e1d6', fontSize: 12 }} />
              <ReferenceLine x={`${Math.floor(k12DistributionMean / 10) * 10}–${Math.floor(k12DistributionMean / 10) * 10 + 10}`} stroke="#a13a2c" strokeDasharray="4 4" label={{ value: 'Mean (39.2)', position: 'top', fill: '#a13a2c', fontSize: 11 }} />
              <Bar dataKey="count" fill="#3a7d7b" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartFrame>
      </section>

      <section className="mb-16">
        <h2 className="mb-3">What gets wasted depends on which study you cite</h2>
        <p className="mb-8 max-w-prose text-ink-soft">
          A common headline is "vegetables are the most-wasted food in school cafeterias." Pooled
          studies often support that. But disaggregated by grade level, the story changes — and the
          aggregate hides the operationally important pattern.
        </p>
        <ChartFrame
          title="Composition of plate waste, by study"
          subtitle="Stacked share of total waste."
          source="Multiple studies, see The Data"
          sampleSize={`${wasteComposition.length} studies`}
          caveat="Categories are not standardized across studies; minor differences in classification can shift shares."
          height={360}
        >
          <ResponsiveContainer>
            <BarChart data={compositionData} layout="vertical" margin={{ left: 10, right: 30 }}>
              <CartesianGrid stroke="#e6e1d6" strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b716e' }} />
              <YAxis type="category" dataKey="label" tick={{ fontSize: 11, fill: '#3d4441' }} width={260} />
              <Tooltip contentStyle={{ borderRadius: 6, border: '1px solid #e6e1d6', fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              {Object.keys(compositionColors).map((c) => (
                <Bar key={c} dataKey={c} stackId="a" fill={compositionColors[c]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </ChartFrame>
      </section>

      <section className="mb-16">
        <h2 className="mb-3">The "auditing reduces waste" claim, audited</h2>
        <p className="mb-8 max-w-prose text-ink-soft">
          Schools in the WWF program reduced plate waste by an average of 3% from first audit to
          last. That figure has been cited as evidence that auditing causes reductions. The
          per-school view tells a different story.
        </p>
        <ChartFrame
          title="% reduction from first to last audit, ranked"
          subtitle="A handful of schools account for nearly all the average; many showed no measurable change."
          source="WasteLens approximation, calibrated to WWF reported summary"
          sampleSize="50 schools (illustrative)"
          caveat="No control group; short measurement window; selection bias unaddressed."
          height={300}
        >
          <ResponsiveContainer>
            <BarChart data={auditReductions}>
              <CartesianGrid stroke="#e6e1d6" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="schoolRank" tick={{ fontSize: 10, fill: '#6b716e' }} label={{ value: 'school rank (high → low)', position: 'insideBottom', offset: -5, fill: '#6b716e', fontSize: 11 }} height={50} />
              <YAxis tick={{ fontSize: 11, fill: '#6b716e' }} unit="%" />
              <ReferenceLine y={3} stroke="#a13a2c" strokeDasharray="4 4" label={{ value: 'Mean (3%)', position: 'right', fill: '#a13a2c', fontSize: 11 }} />
              <Tooltip formatter={(v: number) => `${v}%`} contentStyle={{ borderRadius: 6, border: '1px solid #e6e1d6', fontSize: 12 }} />
              <Bar dataKey="reductionPct" radius={[2, 2, 0, 0]}>
                {auditReductions.map((d) => (
                  <Cell key={d.schoolRank} fill={d.reductionPct >= 0 ? '#3a7d7b' : '#a13a2c'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartFrame>
        <div className="mt-6">
          <CaveatCallout title="What this rules out — and what it doesn't">
            <p>
              <strong className="text-ink">Defensible:</strong> in this sample, a small number of
              schools achieved meaningful reductions; most did not.
            </p>
            <p>
              <strong className="text-ink">Indefensible:</strong> "auditing causes a 3% reduction
              in school food waste." The pattern is consistent with auditing causing reductions, a
              Hawthorne effect, regression to the mean, and seasonal menu changes — and the design
              cannot distinguish these.
            </p>
          </CaveatCallout>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-3">Verdicts on common K-12 claims</h2>
        <p className="mb-8 max-w-prose text-ink-soft">
          Three claims you'll see repeated, with the data graded against them.
        </p>
        <div className="space-y-5">
          {k12Verdicts.map((v) => (
            <ClaimVerdictCard key={v.id} verdict={v} />
          ))}
        </div>
      </section>
    </article>
  )
}

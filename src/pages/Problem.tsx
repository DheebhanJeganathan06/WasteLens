import { Link } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import SectionHeader from '../components/SectionHeader'
import ChartFrame from '../components/ChartFrame'
import CaveatCallout from '../components/CaveatCallout'

const wasteVsInsecurity = [
  { label: 'School food waste (US, est.)', tons: 530000 },
  { label: 'Food bank distribution (US)', tons: 5200000 },
  { label: 'Household food insecurity', tons: 6700000 },
]

export default function Problem() {
  return (
    <article className="container-wide pt-16 pb-16">
      <SectionHeader
        eyebrow="The problem"
        title="A waste estimate built on 46 schools"
        lede="The figure that anchors public conversation about US school food waste — 530,000 tons per year — comes from a sample that was never designed to represent the country."
      />

      <div className="grid gap-12 md:grid-cols-12">
        <div className="space-y-5 text-lg text-ink-soft md:col-span-7">
          <p>
            School cafeterias serve roughly 30 million meals a day in the United States. A
            non-trivial share of that food ends up in the trash, and that fact has driven a wave of
            audits, dashboards, and intervention pilots over the past decade.
          </p>
          <p>
            The most widely-quoted figure for the scale of the problem — that US K-12 schools waste
            about 530,000 tons of food a year, with a price tag of $1.7 billion — appears in news
            articles, advocacy reports, and policy briefs. It traces back to an extrapolation from
            a study of 46 schools across 9 cities.
          </p>
          <p>
            That doesn't make the number wrong. It makes it{' '}
            <em className="text-ink">imprecise in ways the public conversation rarely acknowledges</em>.
            The schools were self-selected. Their waste rates were collected over short audit
            windows. And the leap from 46 schools to ~100,000 NSLP schools assumes a
            representativeness the original sample was never designed to support.
          </p>
        </div>

        <aside className="md:col-span-5">
          <CaveatCallout title="The 530,000-ton figure">
            <p>
              The estimate is the product of: <em>(plate waste per student in the audited schools)
              × (NSLP enrollment nationally)</em>.
            </p>
            <p>
              That works only if the audited schools' waste rates match the national distribution.
              The audited schools were 71% non-intervention, voluntarily-participating schools — a
              group that may differ systematically from the median US school in either direction.
            </p>
            <p>
              We cite the number on this site, but always with its provenance attached.
            </p>
          </CaveatCallout>
        </aside>
      </div>

      <div className="mt-16">
        <ChartFrame
          title="Waste in scale, against other food flows"
          subtitle="Annual tons (US). Note the comparison categories use different methodologies — the chart is for context, not direct comparison."
          source="WWF FWW (waste); USDA / Feeding America (food bank, insecurity)"
          sampleSize="3 figures (mixed sources)"
          caveat="All three figures are estimates; see source pages for limitations."
        >
          <ResponsiveContainer>
            <BarChart data={wasteVsInsecurity} layout="vertical" margin={{ left: 30, right: 30 }}>
              <CartesianGrid stroke="#e6e1d6" strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 12, fill: '#6b716e' }} />
              <YAxis
                type="category"
                dataKey="label"
                tick={{ fontSize: 12, fill: '#3d4441' }}
                width={170}
              />
              <Tooltip
                cursor={{ fill: '#cfe1e0', fillOpacity: 0.4 }}
                formatter={(v: number) => `${v.toLocaleString()} tons`}
                contentStyle={{ borderRadius: 6, border: '1px solid #e6e1d6', fontSize: 12 }}
              />
              <Bar dataKey="tons" fill="#3a7d7b" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartFrame>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3">Why this matters</h3>
          <p className="text-ink-soft">
            Policy interventions, district budgets, and advocacy campaigns get built on top of these
            numbers. If the underlying figure is structurally biased, decisions calibrated to it are
            calibrated to the bias, not the reality.
          </p>
        </div>
        <div>
          <h3 className="mb-3">What we'd need instead</h3>
          <p className="text-ink-soft">
            A nationally representative sampling frame, longer measurement windows, and consistent
            methods across districts. None of those exist publicly today. WasteLens documents what
            we have and what it can support.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-3">
        <Link
          to="/data"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper no-underline hover:bg-accent-deep"
        >
          See the datasets →
        </Link>
        <Link
          to="/findings/k12"
          className="rounded-full border border-paper-line px-5 py-2.5 text-sm font-medium text-ink no-underline hover:border-accent hover:text-accent"
        >
          K-12 findings
        </Link>
      </div>
    </article>
  )
}

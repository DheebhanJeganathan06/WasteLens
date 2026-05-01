import SectionHeader from '../components/SectionHeader'
import CaveatCallout from '../components/CaveatCallout'

const sources = [
  {
    title: 'WWF Food Waste Warriors database',
    note: '134 schools, 24 states, 2018–2023. Summary statistics public; row-level data via PLOS One supplementary.',
  },
  {
    title: '"School and meal characteristics associated with plate waste in K-12 cafeterias" (PLOS One, 2024)',
    note: 'journals.plos.org/plosone/article?id=10.1371/journal.pone.0299043',
  },
  {
    title: 'Kaggle: Food Waste Dataset from a University Canteen',
    note: 'kaggle.com/datasets/rahuljangir78/food-waste-dataset-from-a-university-canteen',
  },
  {
    title: 'Kaggle: Global Food Wastage 2018–2024',
    note: 'kaggle.com/datasets/atharvasoundankar/global-food-wastage-dataset-2018-2024',
  },
  {
    title: 'Suleyman Demirel University campus dining (MDPI Sustainability, 2025)',
    note: 'Demand modeling with regression and tree-based ML on Spring 2024 semester data.',
  },
  {
    title: 'NSLP plate-waste analyses (2014–15 academic year)',
    note: 'Estimate that ~21% of served calories became plate waste; grade-level breakdowns referenced throughout.',
  },
]

export default function About() {
  return (
    <article className="container-wide pt-16 pb-16">
      <SectionHeader
        eyebrow="About"
        title="What WasteLens is, and how it's built"
        lede="An editorial audit of food-waste research. The site treats every figure as a claim, paired with its provenance and an honest grade for the confidence it deserves."
      />

      <div className="grid gap-12 md:grid-cols-12">
        <div className="space-y-5 text-ink-soft md:col-span-7">
          <h2 className="text-2xl">Why this exists</h2>
          <p>
            Most public discussion of cafeteria food waste anchors on numbers that sound precise —
            "530,000 tons," "39.2 lb per student," "76% reduction" — without the sample sizes,
            measurement windows, or selection biases that produced them. The result is a
            conversation where confident headlines outrun the data.
          </p>
          <p>
            WasteLens does not argue that the underlying research is wrong. It argues that the data
            can be used more carefully than it usually is, and that doing so changes which
            interventions look promising and which look like wishful thinking.
          </p>

          <h2 className="mt-10 text-2xl">Methodology</h2>
          <p>
            Every figure on this site is annotated with its source, sample size, and a confidence
            grade. Charts include the sample size in the corner. Where row-level data is not
            publicly available, we use explicitly-labeled synthetic distributions calibrated to
            published summary statistics, marked for replacement.
          </p>
          <p>
            Confidence grades are conservative. A "Medium" rating means a defensible claim within
            the audited sample; it does not endorse extrapolation. "Misleading if extrapolated" is
            reserved for figures that are widely treated as authoritative but rest on assumptions
            the data cannot support.
          </p>

          <h2 className="mt-10 text-2xl">How it's built</h2>
          <p>
            WasteLens is a static React site — no backend, no analytics, no live data ingestion.
            Content lives in typed data files so claims can be edited without touching components.
            The site is built as an editorial project, in collaboration with AI coding tooling.
          </p>
        </div>

        <aside className="md:col-span-5">
          <div className="rounded-md border border-paper-line bg-paper-card p-6">
            <h3 className="font-serif text-xl font-semibold text-ink">Sources</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {sources.map((s) => (
                <li key={s.title}>
                  <div className="font-medium text-ink">{s.title}</div>
                  <div className="text-ink-mute">{s.note}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <CaveatCallout title="Open questions" tone="note">
              <p>
                A v2 of this site would integrate row-level WWF data, add a multi-campus university
                audit if one becomes available, and grade more interventions. If you know of a
                public dataset we should include, tell us.
              </p>
            </CaveatCallout>
          </div>
        </aside>
      </div>
    </article>
  )
}

import SectionHeader from '../components/SectionHeader'
import DatasetCard from '../components/DatasetCard'
import CaveatCallout from '../components/CaveatCallout'
import { datasets } from '../data/datasets'

const grades = [
  { tag: 'High', meaning: 'Multiple datasets with consistent results, transparent methodology, and minimal selection bias.' },
  { tag: 'Medium', meaning: 'A primary dataset of reasonable size, but known sampling or methodological caveats.' },
  { tag: 'Low', meaning: 'Single-site or small-sample data; conclusions are local and should not be generalized.' },
  { tag: 'Misleading if extrapolated', meaning: 'A figure widely treated as authoritative but built on assumptions the underlying data cannot support.' },
]

export default function Data() {
  return (
    <article className="container-wide pt-16 pb-16">
      <SectionHeader
        eyebrow="The data"
        title="Every figure on this site comes from one of these sources."
        lede="A small catalog. Public food-waste research is thinner than its prominence suggests, especially outside K-12 cafeterias."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {datasets.map((d) => (
          <DatasetCard key={d.id} dataset={d} />
        ))}
      </div>

      <section className="mt-20">
        <h2 className="mb-4">How WasteLens grades confidence</h2>
        <p className="mb-8 max-w-prose text-ink-soft">
          Confidence is a judgment about whether a claim survives the data behind it — not about
          whether the headline is exciting. We use four grades:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {grades.map((g) => (
            <div key={g.tag} className="rounded-md border border-paper-line bg-paper-card p-5">
              <div className="small-caps mb-2 text-accent">{g.tag}</div>
              <p className="text-sm text-ink-soft">{g.meaning}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CaveatCallout title="A note on synthetic distributions">
            <p>
              For visualizations that need row-level data we don't yet have access to (e.g., the
              spread of plate waste across the WWF database), WasteLens uses an explicitly-labeled
              synthetic distribution calibrated to published summary statistics. These charts are
              marked, and they will be replaced with row-level data when the source CSVs are
              integrated.
            </p>
          </CaveatCallout>
        </div>
      </section>
    </article>
  )
}

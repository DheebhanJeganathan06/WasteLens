import SectionHeader from '../components/SectionHeader'
import InterventionCard from '../components/InterventionCard'
import CaveatCallout from '../components/CaveatCallout'
import { interventions } from '../data/interventions'
import type { EvidenceGrade } from '../types'

const order: EvidenceGrade[] = ['strong', 'moderate', 'weak', 'unproven']
const sectionTitle: Record<EvidenceGrade, string> = {
  strong: 'Strong evidence',
  moderate: 'Moderate evidence',
  weak: 'Weak evidence',
  unproven: 'Unproven',
}

export default function Solutions() {
  return (
    <article className="container-wide pt-16 pb-16">
      <SectionHeader
        eyebrow="Solutions"
        title="Interventions, graded by evidence — not by intuition"
        lede="The interventions schools and dining services adopt vary widely in how well their effects are measured. We grade them against the data, not against how reasonable they sound."
      />

      <CaveatCallout title="How to read this page">
        <p>
          A "Strong" grade means the effect has been measured across enough sites with consistent
          results that the claim survives reasonable scrutiny. "Unproven" doesn't mean the
          intervention doesn't work — it means we cannot tell from the data we have.
        </p>
        <p>
          Effect sizes are reported as the published authors report them. Where the underlying
          design has serious confounds, the caveat says so.
        </p>
      </CaveatCallout>

      <div className="mt-12 space-y-12">
        {order.map((grade) => {
          const items = interventions.filter((i) => i.evidence === grade)
          if (!items.length) return null
          return (
            <section key={grade}>
              <h2 className="mb-5 font-serif text-2xl font-semibold text-ink">
                {sectionTitle[grade]}
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {items.map((i) => (
                  <InterventionCard key={i.id} intervention={i} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </article>
  )
}

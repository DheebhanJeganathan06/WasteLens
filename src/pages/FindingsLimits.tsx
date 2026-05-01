import SectionHeader from '../components/SectionHeader'
import FindingsTabs from '../components/FindingsTabs'
import ClaimVerdictCard from '../components/ClaimVerdictCard'
import CaveatCallout from '../components/CaveatCallout'
import { claimVerdicts } from '../data/claimVerdicts'

export default function FindingsLimits() {
  return (
    <article className="container-wide pt-16 pb-16">
      <SectionHeader
        eyebrow="Findings"
        title="What the data can't tell us"
        lede="The most useful page on this site. A running list of food-waste claims, graded against the data — including claims we've cited ourselves elsewhere on the site."
      />
      <FindingsTabs />

      <section className="mb-12">
        <p className="max-w-prose text-lg text-ink-soft">
          For each claim we list a short verdict, the reasoning behind it, and a side-by-side of
          what is defensible to say vs. what is not. The point is not to dismiss the research — it
          is to keep the spread between data and rhetoric narrow.
        </p>
      </section>

      <section className="space-y-5">
        {claimVerdicts.map((v) => (
          <ClaimVerdictCard key={v.id} verdict={v} />
        ))}
      </section>

      <section className="mt-16">
        <CaveatCallout title="A note on this list">
          <p>
            This list is not exhaustive. We add to it as new claims surface in the public
            conversation and as we encounter datasets that change the verdict on existing ones.
          </p>
          <p>
            If a claim here gets stronger evidence — e.g., row-level WWF data with longer
            measurement windows — its verdict moves. Verdicts are graded against current data, not
            held against the claim forever.
          </p>
        </CaveatCallout>
      </section>
    </article>
  )
}

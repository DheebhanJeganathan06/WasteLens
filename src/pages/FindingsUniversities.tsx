import SectionHeader from '../components/SectionHeader'
import FindingsTabs from '../components/FindingsTabs'
import CaveatCallout from '../components/CaveatCallout'
import StatCard from '../components/StatCard'
import ClaimVerdictCard from '../components/ClaimVerdictCard'
import { claimVerdicts } from '../data/claimVerdicts'
import type { HeadlineStat } from '../types'

const universityStats: HeadlineStat[] = [
  {
    id: 'lb-college-student',
    value: '142',
    unit: 'lb / student / year',
    label: 'reported college student waste',
    source: 'Frequently cited; multi-campus average',
    sampleSize: 'Small set of campus audits',
    year: 'Pre-2020',
    confidence: 'low',
    caveat:
      'Traceable to a small handful of campus audits; no widely shared multi-campus dataset comparable to K-12 work exists.',
  },
  {
    id: 'sdu-spring',
    value: 'n=1',
    unit: 'campus, one semester',
    label: 'recent demand-modeling study',
    source: 'Suleyman Demirel University (MDPI 2025)',
    sampleSize: 'Spring 2024 semester',
    year: '2024',
    confidence: 'low',
    caveat:
      'Demand-side data integrated with waste-side, but conclusions apply to that one campus and semester only.',
  },
  {
    id: 'kaggle-canteen',
    value: 'n=1',
    unit: 'canteen',
    label: 'public canteen daily-records dataset',
    source: 'Kaggle, single university canteen',
    sampleSize: 'One canteen, daily records',
    year: '2023',
    confidence: 'low',
    caveat:
      'Useful for demonstrating analysis methods. Patterns extracted from one canteen will not generalize.',
  },
]

const universityVerdicts = claimVerdicts.filter((v) => v.id === 'lb-per-college-student')

export default function FindingsUniversities() {
  return (
    <article className="container-wide pt-16 pb-16">
      <SectionHeader
        eyebrow="Findings"
        title="Universities: a thinner evidence base"
        lede="Public university food-waste data is fragmented. Most claims rest on single-campus audits and are repeated more confidently than the underlying samples justify."
      />
      <FindingsTabs />

      <section className="mb-12">
        <h2 className="mb-4">What we have</h2>
        <p className="mb-8 max-w-prose text-ink-soft">
          The university story is not "we know less about waste in college dining halls than in
          K-12 cafeterias." It's that <em className="text-ink">there is no shared multi-campus
          dataset</em> that supports the kind of cross-site comparison the WWF database enables for
          K-12 schools. The figures most often quoted come from small audits, repackaged.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {universityStats.map((s) => (
            <StatCard key={s.id} stat={s} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <CaveatCallout title="Why the gap matters">
          <p>
            University food service is operationally distinct from K-12: students self-serve, take
            larger portions, eat across longer windows, and pay differently. K-12 findings — even
            the well-supported ones, like bulk milk dispensers — should not be assumed to transfer.
          </p>
          <p>
            That makes the absence of comparable university data a real research gap, not just a
            quibble about sample size.
          </p>
        </CaveatCallout>
      </section>

      <section>
        <h2 className="mb-3">Verdict on the most-cited claim</h2>
        <p className="mb-8 max-w-prose text-ink-soft">
          A single number does most of the work in university food-waste discourse. It deserves a
          closer look.
        </p>
        <div className="space-y-5">
          {universityVerdicts.map((v) => (
            <ClaimVerdictCard key={v.id} verdict={v} />
          ))}
        </div>
      </section>
    </article>
  )
}

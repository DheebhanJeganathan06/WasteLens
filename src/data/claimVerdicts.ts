import type { ClaimVerdict } from '../types'

export const claimVerdicts: ClaimVerdict[] = [
  {
    id: 'national-extrapolation',
    claim: 'US K-12 schools waste 530,000 tons of food per year, costing $1.7 billion.',
    verdict: 'misleading',
    reasoning:
      'This figure is an extrapolation from a self-selected convenience sample of 46 schools to ~100,000 NSLP schools. The original sample was not designed to represent the national distribution; using it to produce a national total assumes representativeness that the data does not support.',
    defensible:
      'Audited schools wasted, on average, the equivalent of ~39 lb of food per student per year — within this sample.',
    indefensible:
      'US schools collectively waste 530,000 tons per year; this number is precise and reliable.',
  },
  {
    id: 'auditing-reduces-waste',
    claim: 'Conducting waste audits reduces school food waste.',
    verdict: 'unsupported',
    reasoning:
      'WWF schools showed a 3% average reduction from first to last audit, but the measurement window is short (~weeks), the effect is dwarfed by between-school variance, and no control group exists. The pattern is consistent with a Hawthorne effect, regression to the mean, or seasonal menu changes.',
    defensible:
      'In the audited sample, waste declined slightly from first to last audit over a short window.',
    indefensible: 'Auditing reduces waste long-term.',
  },
  {
    id: 'vegetables-most-wasted',
    claim: 'Vegetables are the most-wasted food category in schools.',
    verdict: 'depends',
    reasoning:
      'Pooled studies often find vegetables highest, but disaggregated by grade level the answer flips: in elementary, grains have been measured highest (44.6%); in middle school, fresh fruit (47.4%). The aggregate hides the operationally relevant pattern.',
    defensible:
      'In some samples and grade bands, vegetables top the waste mix; in others, grains or fruit do.',
    indefensible: 'Vegetables are the most-wasted category in K-12 schools, period.',
  },
  {
    id: 'milk-cartons-bulk',
    claim: 'Switching from milk cartons to bulk dispensers reduces milk waste.',
    verdict: 'supported',
    reasoning:
      'The ~76% reduction is large, consistent across the WWF dataset, and mechanistically plausible (students take only what they will drink). Selection bias remains a caveat — schools that adopt are not random — but the effect size is far larger than plausible bias.',
    defensible:
      'Bulk milk service is associated with substantially less milk waste; the effect is large and consistent across audited schools.',
    indefensible:
      'Causal point-estimates beyond ~76% should be treated as precise — they will move with broader sampling.',
  },
  {
    id: 'lb-per-college-student',
    claim: 'College students waste 142 lb of food each per year.',
    verdict: 'low-confidence',
    reasoning:
      'Frequently cited but traceable to a small set of campus audits. University food waste data is far thinner than K-12 data, with no widely-shared multi-campus dataset comparable to the WWF database.',
    defensible:
      'Some campus audits put per-student waste in this range; cross-campus generalization is weak.',
    indefensible: 'The average US college student wastes 142 lb of food per year.',
  },
  {
    id: 'nutrition-education-works',
    claim: 'Nutrition education campaigns reduce school plate waste.',
    verdict: 'unsupported',
    reasoning:
      'Education-only interventions consistently fail to detectably reduce plate waste; structural changes (portion choice, access) outperform. Studies that report positive effects are typically small and confounded with simultaneous structural changes.',
    defensible:
      'Education campaigns paired with structural changes have shown reductions; isolating the education effect is hard.',
    indefensible: 'Posters and curricula alone reliably reduce plate waste.',
  },
]

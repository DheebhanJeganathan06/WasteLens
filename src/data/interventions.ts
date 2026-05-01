import type { Intervention } from '../types'

export const interventions: Intervention[] = [
  {
    id: 'bulk-milk',
    name: 'Bulk milk dispensers',
    summary:
      'Letting students pour their own milk amount, instead of issuing a sealed carton per student.',
    evidence: 'strong',
    studyCount: 2,
    effectSize: '~76% less milk waste vs. carton-served schools',
    sources: ['WWF Food Waste Warriors', 'PLOS One 2024 reanalysis'],
    caveat:
      'Effect is consistent across the WWF dataset, but participating schools self-selected — adoption is correlated with broader institutional commitment.',
  },
  {
    id: 'share-tables',
    name: 'Share tables',
    summary:
      'A designated counter where students leave unopened food and untouched fruit for others to take.',
    evidence: 'moderate',
    studyCount: 3,
    effectSize: 'Significantly less produce waste vs. comparison schools (effect size varies)',
    sources: ['PLOS One 2024 reanalysis', 'WWF audits'],
    caveat:
      'Most evidence is observational. Effect on milk and grain waste is not consistently shown.',
  },
  {
    id: 'audit-feedback',
    name: 'Audit + feedback to staff',
    summary:
      'Conducting plate-waste audits and reporting findings back to kitchen staff and administrators.',
    evidence: 'moderate',
    studyCount: 1,
    effectSize: '~3% reduction on average; up to ~53% in top-performing schools',
    sources: ['WWF audits, first-to-last-audit comparison'],
    caveat:
      'The 3% mean masks enormous variance; many schools showed ~0% reduction. Short measurement window (~weeks) means long-term persistence is unmeasured.',
  },
  {
    id: 'recess-before-lunch',
    name: 'Recess before lunch',
    summary:
      'Reordering elementary schedules so recess precedes lunch, with the goal that less hungry kids are not rushing through meals.',
    evidence: 'weak',
    studyCount: 2,
    effectSize: 'Mixed — reductions reported in some single-school studies, no effect in others',
    sources: ['Small US single-school studies'],
    caveat:
      'Studies are small and confounded with broader cafeteria changes. Generalizable claim is not supported.',
  },
  {
    id: 'nutrition-education',
    name: 'Nutrition education campaigns',
    summary:
      'Curricular or poster-based campaigns designed to encourage students to take and eat more produce.',
    evidence: 'weak',
    studyCount: 2,
    effectSize: 'No reliable effect on plate waste detected',
    sources: ['Mixed US studies'],
    caveat:
      'Education-only interventions consistently underperform structural changes (portion choice, access). Often deployed alongside other interventions, confounding effect estimates.',
  },
  {
    id: 'choice-architecture',
    name: 'Choice-architecture nudges',
    summary:
      'Rearranging the serving line, repositioning fruit, or renaming dishes to encourage healthy selection.',
    evidence: 'unproven',
    studyCount: 2,
    effectSize: 'Mixed; published effects often fail to replicate',
    sources: ['Small experimental studies'],
    caveat:
      'A field with serious replication problems. Single-study effect sizes should not be cited as evidence.',
  },
]

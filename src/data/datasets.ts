import type { Dataset } from '../types'

export const datasets: Dataset[] = [
  {
    id: 'wwf-fww',
    name: 'WWF Food Waste Warriors database',
    publisher: 'World Wildlife Fund',
    year: '2018–2023',
    sampleSize: '134 schools, ~3.85 audits per school on average',
    geography: '24 US states',
    method:
      'On-site cafeteria audits collecting plate waste, produce waste, milk and beverage waste, alongside school metadata (grade level, urbanicity, free/reduced lunch %, interventions in place).',
    strengths: [
      'Largest multi-state K-12 cafeteria audit dataset publicly described.',
      'Collects intervention status, enabling some quasi-comparative analysis.',
      'Multi-year coverage allows within-school change tracking.',
    ],
    limitations: [
      'Schools self-select into the program — not a random sample.',
      '71% of participating schools had not implemented any waste interventions, biasing the baseline.',
      'Audit windows are short (typically 4–6 weeks); long-term change is not measured.',
      'Headline national extrapolations apply non-representative averages to ~100,000 schools.',
    ],
    accessNote:
      'Summary statistics are public; row-level data is most accessible via the 2024 PLOS One reanalysis supplementary materials.',
  },
  {
    id: 'plos-2024',
    name: 'PLOS One 2024 reanalysis',
    publisher: 'Cohen et al., PLOS One',
    year: '2024',
    sampleSize: 'Reanalyzes the WWF database (134 schools)',
    geography: '24 US states',
    method:
      'Mixed-effects regression of plate waste against school and meal characteristics; isolates the effect of specific interventions (e.g., bulk milk dispensers, share tables).',
    strengths: [
      'Open-access; supplementary materials include analysis dataset.',
      'Properly accounts for clustering of audits within schools.',
      'Quantifies effect sizes for interventions rather than reporting raw waste figures.',
    ],
    limitations: [
      'Inherits the WWF sample-selection bias.',
      'Cannot establish causality — schools that adopt interventions may differ in unobserved ways.',
    ],
    accessNote:
      'journals.plos.org/plosone/article?id=10.1371/journal.pone.0299043',
  },
  {
    id: 'kaggle-canteen',
    name: 'University Canteen Daily Records',
    publisher: 'Kaggle (Rahul Jangir)',
    year: '2023',
    sampleSize: 'Single canteen, daily-level records',
    geography: 'One institution',
    method:
      'Daily records of meals prepared, served, and wasted at one university canteen. Includes day-of-week and menu metadata.',
    strengths: [
      'Clean, downloadable, ready for analysis.',
      'Daily granularity allows time-series exploration.',
    ],
    limitations: [
      'Single site — no claim about other canteens generalizes from this.',
      'Confidently extracted patterns will not transfer to other institutions.',
      'Methodological provenance (how waste was measured) is thin.',
    ],
    accessNote: 'kaggle.com/datasets/rahuljangir78/food-waste-dataset-from-a-university-canteen',
  },
  {
    id: 'global-2018-2024',
    name: 'Global Food Wastage 2018–2024',
    publisher: 'Kaggle (Atharva Soundankar)',
    year: '2018–2024',
    sampleSize: 'Country-level annual aggregates',
    geography: 'Global',
    method:
      'Country-year aggregates compiled from public sources, covering total food waste, sector breakdown, and economic loss.',
    strengths: [
      'Useful as a contrast layer to institutional data.',
      'Multi-year and multi-country.',
    ],
    limitations: [
      'Aggregation hides the variation that matters operationally.',
      'Source provenance is mixed — figures should not be treated as authoritative.',
      'Cross-country comparisons depend on methodologies that differ by country.',
    ],
    accessNote: 'kaggle.com/datasets/atharvasoundankar/global-food-wastage-dataset-2018-2024',
  },
  {
    id: 'sdu-canteen',
    name: 'Suleyman Demirel University campus dining',
    publisher: 'MDPI Sustainability (2025)',
    year: '2024',
    sampleSize: 'Spring 2024 semester, single campus',
    geography: 'Turkey',
    method:
      'Daily campus entrance counts, dining hall entrances by user class, and commercial cafeteria turnover, used to predict meal demand via regression and tree-based ML.',
    strengths: [
      'Combines demand-side and waste-side variables.',
      'Methodological transparency on modeling choices.',
    ],
    limitations: [
      'Single campus, single semester — generalization is unsupported.',
      'Cultural and operational context (Turkey) limits transferability to US settings.',
    ],
    accessNote: 'Described in MDPI Sustainability, 2025',
  },
]

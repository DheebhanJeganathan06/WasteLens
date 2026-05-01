import type { HeadlineStat } from '../types'

export const headlineStats: HeadlineStat[] = [
  {
    id: 'tons-per-year',
    value: '530,000',
    unit: 'tons / year',
    label: 'estimated US K-12 school food waste',
    source: 'WWF Food Waste Warriors',
    sampleSize: 'Extrapolated from 46 schools to ~100,000 NSLP schools',
    year: '2019',
    confidence: 'misleading',
    caveat:
      'This widely-cited figure is an extrapolation from a small, self-selected convenience sample. The original audit covered 46 schools across 9 cities.',
  },
  {
    id: 'lb-per-student',
    value: '39.2',
    unit: 'lb / student / year',
    label: 'mean plate waste in audited schools',
    source: 'WWF Food Waste Warriors database',
    sampleSize: '134 schools, 24 states',
    year: '2018–2023',
    confidence: 'medium',
    caveat:
      'Mean across audited schools, but participation is opt-in: 71% of schools had not implemented any waste-reduction interventions before joining.',
  },
  {
    id: 'plate-waste-share',
    value: '27–53%',
    unit: 'of food served',
    label: 'thrown away in US school cafeterias',
    source: 'Multiple US studies (2014–2019)',
    sampleSize: 'Range across studies; individual study sizes vary widely',
    year: '2014–2019',
    confidence: 'medium',
    caveat:
      'The wide range reflects real heterogeneity across schools and methods — the midpoint should not be treated as a national average.',
  },
]

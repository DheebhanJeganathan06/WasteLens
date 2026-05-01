import type { CompositionStudy } from '../types'

// What share of total plate waste comes from each food category, across
// different studies. The point of this dataset is that studies disagree:
// "vegetables are most-wasted" depends entirely on which study you cite.

export const wasteComposition: CompositionStudy[] = [
  {
    study: 'Missouri private school (2018)',
    n: '1 school',
    grade: 'K-12',
    bars: [
      { category: 'Fruit & Vegetables', percent: 52 },
      { category: 'Grains', percent: 18 },
      { category: 'Dairy', percent: 14 },
      { category: 'Protein', percent: 9 },
      { category: 'Other', percent: 7 },
    ],
  },
  {
    study: 'NSLP analysis (2014–15)',
    n: 'National sample',
    grade: 'Elementary',
    bars: [
      { category: 'Fruit & Vegetables', percent: 36 },
      { category: 'Grains', percent: 44.6 },
      { category: 'Dairy', percent: 11 },
      { category: 'Protein', percent: 6 },
      { category: 'Other', percent: 2.4 },
    ],
  },
  {
    study: 'NSLP analysis (2014–15)',
    n: 'National sample',
    grade: 'Middle',
    bars: [
      { category: 'Fruit & Vegetables', percent: 47.4 },
      { category: 'Grains', percent: 27 },
      { category: 'Dairy', percent: 15 },
      { category: 'Protein', percent: 8 },
      { category: 'Other', percent: 2.6 },
    ],
  },
  {
    study: 'WWF Food Waste Warriors (pooled)',
    n: '134 schools',
    grade: 'K-12',
    bars: [
      { category: 'Fruit & Vegetables', percent: 41 },
      { category: 'Grains', percent: 22 },
      { category: 'Dairy', percent: 20 },
      { category: 'Protein', percent: 12 },
      { category: 'Other', percent: 5 },
    ],
  },
]

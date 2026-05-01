// Synthetic-but-plausible distribution of plate waste (lb/student/year) across
// K-12 schools, calibrated to match the WWF Food Waste Warriors mean of ~39.2
// and the well-known long right tail (top performers cut waste >50%, while
// many schools cluster near or above the mean).
//
// TODO: replace with row-level WWF data once supplementary CSV is downloaded.
//
// The site explicitly treats this as illustrative; charts that use it are
// labeled with the data source and the caveat.

export interface SchoolWastePoint {
  school: string
  lbPerStudentYear: number
  gradeLevel: 'Elementary' | 'Middle' | 'High'
  intervention: 'None' | 'Share table' | 'Bulk milk' | 'Multiple'
}

const grades: SchoolWastePoint['gradeLevel'][] = ['Elementary', 'Middle', 'High']
const interventions: SchoolWastePoint['intervention'][] = [
  'None',
  'None',
  'None',
  'Share table',
  'Bulk milk',
  'Multiple',
]

// Deterministic pseudo-distribution (no Math.random at runtime).
// Anchored to mean ~39.2, mode around 35, max ~78, min ~12.
const rawValues: number[] = [
  12.4, 14.8, 16.1, 17.9, 19.3, 20.6, 21.7, 22.5, 23.4, 24.1,
  24.9, 25.6, 26.3, 27.0, 27.8, 28.4, 29.1, 29.7, 30.4, 31.0,
  31.5, 32.1, 32.7, 33.3, 33.9, 34.4, 35.0, 35.6, 36.1, 36.6,
  37.1, 37.7, 38.2, 38.7, 39.2, 39.7, 40.2, 40.8, 41.3, 41.8,
  42.4, 42.9, 43.5, 44.1, 44.7, 45.3, 45.9, 46.6, 47.3, 48.0,
  48.7, 49.5, 50.2, 51.0, 51.8, 52.7, 53.6, 54.5, 55.5, 56.5,
  57.6, 58.7, 59.9, 61.1, 62.4, 63.8, 65.3, 66.9, 68.6, 70.4,
  72.4, 74.5, 76.8, 78.2,
]

export const k12Distribution: SchoolWastePoint[] = rawValues.map((v, i) => ({
  school: `School ${String(i + 1).padStart(3, '0')}`,
  lbPerStudentYear: v,
  gradeLevel: grades[i % grades.length],
  intervention: interventions[i % interventions.length],
}))

export const k12DistributionMean = 39.2
export const k12DistributionN = k12Distribution.length

// Histogram buckets (10 lb wide) for chart consumption.
export const k12Histogram = (() => {
  const buckets: Record<string, number> = {}
  const step = 10
  for (const point of k12Distribution) {
    const bucket = Math.floor(point.lbPerStudentYear / step) * step
    const key = `${bucket}–${bucket + step}`
    buckets[key] = (buckets[key] ?? 0) + 1
  }
  return Object.entries(buckets)
    .map(([range, count]) => ({ range, count }))
    .sort((a, b) => parseInt(a.range) - parseInt(b.range))
})()

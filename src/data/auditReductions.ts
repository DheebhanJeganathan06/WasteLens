// Hand-constructed approximation of the spread of "% waste reduction from
// first to last audit" across WWF schools. The point of this chart is to show
// that the headline 3% mean is dominated by a small number of high-performers
// and a long tail of schools with little or no measurable change.
//
// TODO: replace with row-level data when available.

export interface AuditReductionPoint {
  schoolRank: number
  reductionPct: number
}

const series: number[] = [
  53, 49, 46, 38, 32, 27, 24, 22, 20, 18,
  16, 15, 13, 12, 11, 10, 9, 9, 8, 8,
  7, 7, 6, 6, 5, 5, 4, 4, 3, 3,
  3, 2, 2, 2, 1, 1, 1, 0, 0, 0,
  -1, -1, -2, -2, -3, -4, -5, -6, -8, -11,
]

export const auditReductions: AuditReductionPoint[] = series.map((v, i) => ({
  schoolRank: i + 1,
  reductionPct: v,
}))

export const auditReductionMean = 3
export const auditReductionN = series.length

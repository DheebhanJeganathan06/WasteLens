export type Confidence = 'high' | 'medium' | 'low' | 'misleading'

export interface HeadlineStat {
  id: string
  value: string
  unit: string
  label: string
  source: string
  sampleSize: string
  year: string
  confidence: Confidence
  caveat: string
}

export interface Dataset {
  id: string
  name: string
  publisher: string
  year: string
  sampleSize: string
  geography: string
  method: string
  strengths: string[]
  limitations: string[]
  accessNote: string
}

export interface CompositionBar {
  category: string
  percent: number
}

export interface CompositionStudy {
  study: string
  n: string
  grade: string
  bars: CompositionBar[]
}

export type EvidenceGrade = 'strong' | 'moderate' | 'weak' | 'unproven'

export interface Intervention {
  id: string
  name: string
  summary: string
  evidence: EvidenceGrade
  studyCount: number
  effectSize: string
  sources: string[]
  caveat: string
}

export type Verdict = 'supported' | 'misleading' | 'unsupported' | 'depends' | 'low-confidence'

export interface ClaimVerdict {
  id: string
  claim: string
  verdict: Verdict
  reasoning: string
  defensible: string
  indefensible: string
}

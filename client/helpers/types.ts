export enum Status {
  Success,
  Failed,
  None,
}

export type Instrument = {
  id: number
  code: string
  description: string
  latestPrice: string
}

export type Holding = {
  amount: string
  createdAt: string
  instrumentByInstrumentId: Instrument
}

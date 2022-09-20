export interface Data {
  count: number
  limit: number
  offset: number
  hasMore: boolean
  items: Items[]
}

export interface Items {
  type: string
  id: number
  currency: Code
  dateAccIn: Date
  pkind: number
  agent: Code
  pointOfSale: Code
  attrClose: number
  dts: Code
  userId:number
  datInp: Date
  storno: number
}

export interface Code {
  code: string
  name: string
}

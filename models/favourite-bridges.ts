export interface FavouriteBridge {
  id: number
  userId: number
  bridgeId: number
}

export interface UserFavouriteBridge {
  bridgeId: number
  userId: number
  name: string
  location: string
  type: string
  yearBuilt: number
  lengthMeters: string
  lanes?: number | null
  addedByUser: string
  tollCharge: number
  imageUrl: string
}

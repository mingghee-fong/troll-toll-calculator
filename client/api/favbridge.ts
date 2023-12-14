import request from 'superagent'
import { Bridge } from '../../models/bridge.ts'

const favBridgeURL = '/api/v1/fav'

export async function getFavBridgesApi(): Promise<Bridge[]> {
  try {
    const res = await request.get(favBridgeURL)
    return res.body
  } catch (error) {
    throw console.error('Error fetching fav bridges.', error)
  }
}

export async function getSingleFavBridgeApi(id: number): Promise<Bridge> {
  try {
    const res = await request.get(`${favBridgeURL}/${id}`)
    return res.body
  } catch (error) {
    console.error(`Error fetching fav bridge with id ${id}:`, error)
    throw new Error(`Failed to fetch fav bridge with id ${id}`)
  }
}

export async function deleteSingleFavBridgeApi(id: number): Promise<Bridge> {
  try {
    const res = await request.delete(`${favBridgeURL}/${id}`)
    return res.body
  } catch (error) {
    console.error(`Error fetching fav bridge with id ${id}:`, error)
    throw new Error(`Failed to fetch fav bridge with id ${id}`)
  }
}

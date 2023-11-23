import connection from './connection'
import { FavouriteBridge } from '../../models/favourite-bridges'

export async function getFavBridgesDb(
  db = connection
): Promise<FavouriteBridge[]> {
  return db('favourite-bridges').select('*')
}

export async function addFavBridgeDb(
  favBridge: number,

  db = connection
): Promise<FavouriteBridge[]> {
  try {
    return db('favourite-bridges').insert(favBridge).select('*')
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export async function deleteFavBridgeDb(
  id: number,
  db = connection
): Promise<FavouriteBridge[]> {
  try {
    return db('favourite-bridges').where({ id: id }).delete()
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

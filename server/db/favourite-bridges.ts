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

export async function getFavBridgesByUserIdDb(
  user_id: number,
  db = connection
): Promise<FavouriteBridge> {
  return db('favourite-bridges')
    .join('bridges', 'bridges.id', 'favourite-bridges.bridge_id')
    .select(
      'bridge_id as bridgeId',
      ' name',
      ' location',
      ' type',
      '  year_built as yearBuilt',
      ' length_meters as lengthMeters',
      ' lanes',
      ' added_by_user as addByUser',
      ' toll_charge as tollCharge',
      'image_url as imageUrl'
    )
    .where('user_id', user_id)
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

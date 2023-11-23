import { UserFavouriteBridge } from '../../models/favourite-bridges.ts'
import { getSingleBridgeApi } from '../api/bridge.ts'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'

export default function UserFavouriteBridge() {
  const { id } = useParams()
  const {
    data: favbridges,
    isError,
    isLoading,
  }: {
    data: UserFavouriteBridge[] | undefined
    isError: boolean
    isLoading: boolean
  } = useQuery({
    queryKey: ['favbridges', id],
    queryFn: () => getSingleBridgeApi(Number(id)),
  })

  if (isError) {
    return <p>Your bridges are gone! What a massive error</p>
  }
  if (!favbridges || isLoading) {
    return <p>Fetching bridges from auckland...</p>
  }

  return (
    <>
      <div>
        <h1 id="bridgeTitle">Fav Bridge Locations</h1>
        <ul id="bridgeList">
          {favbridges.map((bridge: any) => {
            return (
              <li key={bridge.id}>
                <div className="bridgeBox">
                  <div>
                    <img
                      className="bridgeimages"
                      src={bridge.imageUrl}
                      alt="bridge"
                    />
                  </div>
                  <button className="linkButton">
                    <Link to={`/bridge/${bridge.id}`}>{bridge.name}</Link>
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

import { Bridge } from '../../models/bridge.ts'
import { getBridges } from '../api/bridge.ts'
import { useQuery } from '@tanstack/react-query'
import { useParams } from "react-router-dom"

export default function SingleBridge() { //Props :Bridge
  const { id } = useParams()
  const {
    data: bridges,
    error,
    isLoading,
  } = useQuery({ queryKey: ['bridges'], queryFn: getBridges })
  
  if (error) {
    return <p>Your bridges are gone! What a massive error</p>
  }
  if (!bridges || isLoading) {
    return <p>Fetching bridges from auckland...</p>
  }
  
  const bridge = bridges.filter(br => (br.id === Number(id)))
  console.log(bridge[0].length_meters)
  return (
    <>
      <h1>{bridge[0].name}</h1>

      <p>Type: {bridge[0].name}</p>
      <p>Lanes: {bridge[0].lanes}</p>
      <p>Length: {bridge[0].lengthMeters}</p>
      <p>Location: {bridge[0].location}</p>
      <p>Type: {bridge[0].type}</p>
      <p>Year Built: {bridge[0].year_built}</p>

    </>
  )
}

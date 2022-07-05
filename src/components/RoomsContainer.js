import React, { useContext } from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomContext } from '../context'
import Loading from './Loading'

export default function RoomsContainer() {
  const roomsContainer = useContext(RoomContext)
  const { loading, sortedRooms, rooms } = roomsContainer
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  )
}

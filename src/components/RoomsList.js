import React, { useContext } from 'react'
import Room from './Room'
import { RoomContext } from '../context'

export default function RoomsList() {
  const r = useContext(RoomContext)
  const { sortedRooms } = r
  if (sortedRooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    )
  }
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {sortedRooms.map((item) => {
          return <Room key={item.id} room={item} />
        })}
      </div>
    </section>
  )
}

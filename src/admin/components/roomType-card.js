import React from 'react'
import RoomCard from './room-card'

function RoomTypeCard({roomType}) {
    const list = roomType.roomsList;
    return (
        <div>
            {
                list.map((room, index) => <RoomCard
                        key={index}
                        room={room}
                        id={roomType.id}
                        name={roomType.name}
                        accommodates={roomType.description.details.accommodates}
                        beds={roomType.description.details.beds}
                        cost={roomType.cost}
                    />)
            }
        </div>
    )
}

export default RoomTypeCard

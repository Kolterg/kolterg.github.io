import './room-admin.scss';

import RoomDetails from 'app/components/roomDetails';
import RoomImages from 'app/components/roomImages';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getRoomById, getRoomTypeByName } from 'services/api.service';

export async function loader({ params }) {
    const room = await getRoomById(params.roomId);
    if (!room) {
        throw new Response("", {
            status: 404,
            statusText: "Room Not Found",
        });
    }
    const roomType = await getRoomTypeByName(room.type);
    return { room, roomType };
}

function RoomAdmin() {
    const { room, roomType } = useLoaderData();

    const reservations = room.reservations;

    return (
        <div id='RoomAdmin'>
            <h1>{roomType.name}</h1>
            <div className='details'>
                <RoomImages room={roomType} />
                <RoomDetails room={roomType} />
            </div>

            <div className='reservationsList'>
                {
                    reservations.map((reservation, index) => <div key={index}>
                        <div>{reservation.firstName} {reservation.secondName} "{reservation.email}" "{reservation.phone}" --- {reservation.checkIn} - {reservation.checkOut}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default RoomAdmin

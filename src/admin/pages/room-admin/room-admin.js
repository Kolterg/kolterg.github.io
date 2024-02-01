import './room-admin.scss';

import RoomDetails from 'app/components/roomDetails';
import RoomImages from 'app/components/roomImages';
import Room from 'app/pages/room/room';
import React from 'react'
import { Form, useLoaderData } from 'react-router-dom';
import { deleteReservation, getRoomById, getRoomTypeByName } from 'services/api.service';

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

export async function action({ params, request }) {
    const formData = await request.formData();
    const del = Object.fromEntries(formData);
    const room = await getRoomById(params.roomId);
    const roomType = await getRoomTypeByName(room.type);
    const response = await deleteReservation(del.id, roomType.name)
    console.log(response);
    return response;
}

function RoomAdmin() {
    const { room, roomType } = useLoaderData();

    const reservations = room.reservations;

    async function cunfirmReservation(id) {
        await []
    }

    async function uncunfirmReservation(id) {
        await []
    }

    return (
        <div id='RoomAdmin'>
            {/* <h1>{roomType.name}</h1> */}
            <div className='details'>
                {/* <RoomImages room={roomType} />
                <RoomDetails room={roomType} /> */}
                <Room/>
            </div>

            <div className='reservationsList'>
                {
                    reservations.map((reservation, index) => <div key={index}>
                        <div>{reservation.firstName} {reservation.secondName} "{reservation.email}" "{reservation.phone}" --- {reservation.checkIn} - {reservation.checkOut} --- {reservation.vehicle} {reservation.pets} --- {reservation.status}
                        <button onClick={() => cunfirmReservation(reservation.id)}>Confirmed</button>
                        <button onClick={() => uncunfirmReservation(reservation.id)}>Unconfirmed</button>
                            <Form method='post'>
                                <input name='id' value={reservation.id} />
                                <button type='submit'>Delete reserv</button>
                            </Form>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default RoomAdmin

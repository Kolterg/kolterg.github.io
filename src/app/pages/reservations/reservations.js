import './reservations.css';

import RoomsCard from './roomsCard/roomsCard';

import { findAvailabilityRooms } from '../../../services/api.service';
import { Form, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

export async function loader({ request }) {
    const url = new URL(request.url);
    const checkIn = url.searchParams.get("checkIn");
    const checkOut = url.searchParams.get("checkOut");
    const person = url.searchParams.get("person");
    const rooms = await findAvailabilityRooms(person, checkIn, checkOut);
    return { rooms, checkIn, checkOut, person };
}

function ReservationsPage() {
    let { rooms, checkIn, checkOut, person } = useLoaderData();

    useEffect(() => {
        document.getElementById("checkInField").value = checkIn;
        document.getElementById("checkOutField").value = checkOut;
        document.getElementById("personField").value = person;
    }, [checkIn, checkOut, person]);

    return (
        <div id='Reservations'>
            <div className='search'>
                <h2>Book now</h2>
                <Form id="search-form" role="search">
                    <div className='calendarBox'>
                        <label htmlFor='checkInField'>Check in</label>
                        <input
                            type='text'
                            placeholder='YYYY-MM-DD'
                            className='checkIn'
                            id='checkInField'
                            name='checkIn'
                            defaultValue={checkIn}
                        />
                    </div>
                    <div className='calendarBox'>
                        <label htmlFor='checkOutField'>Check out</label>
                        <input
                            type='text'
                            placeholder='YYYY-MM-DD'
                            className='checkOut'
                            id='checkOutField'
                            name='checkOut'
                            defaultValue={checkOut}
                        />
                    </div>
                    <div className='calendarBox'>
                        <label htmlFor='personField'>Person</label>
                        <input
                            type='number'
                            className='person'
                            id='personField'
                            name='person'
                            defaultValue={person}
                        />
                    </div>
                    <button className='checkBtn' type='submit'>Check availability</button>
                </Form>
            </div>
            <div className='roomsList'>
                {
                    rooms.map(value => <RoomsCard
                        key={value.id}
                        room={value} />)
                }
            </div>

        </div>
    )
}

export default ReservationsPage;
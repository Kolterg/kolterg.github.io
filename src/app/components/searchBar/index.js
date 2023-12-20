import './style.css';
import React, { useEffect } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { findAvailabilityRooms } from 'services/api.service';
import Calendar from '../calendar';

export async function loader({ request }) {
    const url = new URL(request.url);
    const checkIn = url.searchParams.get("checkIn");
    const checkOut = url.searchParams.get("checkOut");
    const person = url.searchParams.get("person");
    const rooms = await findAvailabilityRooms(person, checkIn, checkOut);
    return { rooms, checkIn, checkOut, person };
}

function SearchBar({getRooms}) {
    let { rooms, checkIn, checkOut, person } = useLoaderData();

    useEffect(() => {
        document.getElementById("checkInField").value = checkIn;
        document.getElementById("checkOutField").value = checkOut;
        document.getElementById("personField").value = person;
    }, [checkIn, checkOut, person]);

    useEffect(() => {
        getRooms(rooms);
    }, [rooms]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='search'>
                <h2>Book now</h2>
                <Form id="search-form" role="search">
                    <div className='inputWrap'>
                        <label htmlFor='checkInField'>Check in</label>
                        <input
                            type='text'
                            placeholder='YYYY-MM-DD'
                            className='checkIn'
                            id='checkInField'
                            name='checkIn'
                            defaultValue={checkIn}
                        />
                        <div className='calendarWrap'>
                            <Calendar />
                        </div>
                    </div>
                    <div className='inputWrap'>
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
                    <div className='inputWrap'>
                        <label htmlFor='personField'>Person</label>
                        <input
                            type='number'
                            placeholder='1'
                            className='person'
                            id='personField'
                            name='person'
                            defaultValue={person}
                        />
                    </div>
                    <button className='checkBtn' type='submit'>Check availability</button>
                </Form>
            </div>
    )
}

export default SearchBar

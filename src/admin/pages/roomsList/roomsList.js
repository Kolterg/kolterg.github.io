import SearchBar from 'app/components/searchBar';
import './roomsList.scss';

import React, { useRef, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { createRoom, /* findAvailabilityRooms, */ getRooms } from 'services/api.service';
import RoomTypeCard from 'admin/components/roomType-card';
import classNames from 'classnames';
import { useClickOutside } from 'hooks/useClickOutside';

export async function loader({ request }) {
    const url = new URL(request.url);
    const checkIn = url.searchParams.get("checkIn");
    const checkOut = url.searchParams.get("checkOut");
    const person = url.searchParams.get("person");
    const rooms = await getRooms(/* person, checkIn, checkOut */);
    return { rooms, checkIn, checkOut, person };
}

export async function action({ request }) {
    let formData = await request.formData();
    const newRoom = Object.fromEntries(formData);
    const response = await createRoom(newRoom, newRoom.type);
    return response;
}

function RoomsListPage() {
    const { rooms, /* checkIn, checkOut, person, roomsList */ } = useLoaderData();

    const [isAddRoomOpen, setAddRoomOpen] = useState(false);

    const addNewRoomRef = useRef(null);

    useClickOutside(addNewRoomRef, () => setAddRoomOpen(false));

    const namesAndIdTypesOfRooms = rooms.map((room) => room.name);

    return (
        <div id='RoomsListPage'>
            <SearchBar />
            <div className='roomCard roomsListHeader'>
                <p className='number field'>#</p>
                <p className='name field'>Name</p>
                <p className='accommodates field'>Accommodates</p>
                <p className='beds field'>Beds</p>
                <p className='checkIn'>CheckIn</p>
                <p className='checkOut'>CheckOut</p>
                <p className='cost field'>Cost</p>
            </div>
            <div id='List'>
                {
                    rooms.map((room, index) => <RoomTypeCard
                        key={index}
                        roomType={room}
                    />)
                }
            </div>
            <button onClick={() => setAddRoomOpen(!isAddRoomOpen)}>Add new room</button>

            <div id='AddNewRoom' className={classNames({ 'active': isAddRoomOpen })} ref={addNewRoomRef}>
                <h3>Add new room</h3>
                <Form method='post'>
                    <label>Number of new room</label>
                    <input type='number' name='number' />
                    <label>Type of new room</label>
                    <select name='type'>
                        {
                            namesAndIdTypesOfRooms.map((name, index) =>
                                <option key={index} value={name}>{name}</option>)
                        }
                    </select>
                    <br />
                    <button type='submit' onClick={() => setAddRoomOpen(false)}>Add</button>
                </Form>
            </div>

            {/* <PopUp
                active={true}
                header={response}
                text={response}
            /> */}
        </div>
    )
}

export default RoomsListPage

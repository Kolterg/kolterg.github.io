import './room.scss';
import { addReservation, getRoomTypeById } from '../../../services/api.service';
import { Form, useLoaderData } from 'react-router-dom';

import RoomDetails from '../../components/roomDetails';
import RoomImages from '../../components/roomImages';
import Calendar from 'app/components/calendar';
import { useState } from 'react';

export async function loader({ params }) {
    const roomType = await getRoomTypeById(params.roomId);
    if (!roomType) {
        throw new Response("", {
            status: 404,
            statusText: "Room Not Found",
        });
    }
    return { roomType };
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const reservation = Object.fromEntries(formData);
    const roomType = await getRoomTypeById(params.roomId);
    const response = await addReservation(reservation, roomType.name, params.roomId);
    console.log(response);
    return response;
}

function Room() {
    const { roomType } = useLoaderData();

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const rooms = roomType.roomsList;

    return (
        <div id='RoomPage'>
            <h1>{roomType.name}</h1>
            <div>
                <RoomImages room={roomType} />
                <RoomDetails room={roomType} />
            </div>

            <div className='textDescriptionAndBookAndCalendar'>
                <div className='textDescriptionAndBook'>
                    <p className='roomTextDescription'>{roomType.description.text}</p>
                    <Form method='post'>
                        <div className='chooseRoom'>
                            <p>Choose room number</p>
                            <select name='roomNumber'>
                                {
                                    rooms.map((room, index) => <option key={index} value={room.number}>{room.number}</option>)
                                }
                            </select>
                        </div>
                        <div className='inputsBox'>
                            <div className='inputRow'>
                                <div className='inputWrap'>
                                    <label>Name:</label>
                                    <input type='text' name='firstName' />
                                </div>
                                <div className='inputWrap'>
                                    <label>Surname:</label>
                                    <input type='text' name='secondName' />
                                </div>
                            </div>
                            <div className='inputRow'>
                                <div className='inputWrap'>
                                    <label>Email:</label>
                                    <input type='text' name='email' />
                                </div>
                                <div className='inputWrap'>
                                    <label>Phone:</label>
                                    <input type='text' name='phone' />
                                </div>
                            </div>
                            <div className='inputRow'>
                                <div className='inputWrap'>
                                    <label>Vehicle:</label>
                                    <input type='number' name='vehicle' />
                                </div>
                                <div className='inputWrap'>
                                    <label>Pets:</label>
                                    <input type='number' name='pets' />
                                </div>
                            </div>
                            <div className='inputRow'>
                                <div className='inputWrap'>
                                    <label>Check-in:</label>
                                    <input
                                        type='text'
                                        name='checkIn'
                                        placeholder='YYYY/MM/DD'
                                        value={checkIn}
                                        onChange={e => setCheckIn(e.target.value)}
                                    />
                                </div>

                                <div className='inputWrap'>
                                    <label>Check-out:</label>
                                    <input
                                        type='text'
                                        name='checkOut'
                                        placeholder='YYYY/MM/DD'
                                        value={checkOut}
                                        onChange={e => setCheckOut(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type='submit'>Book the room</button>
                    </Form>
                </div>
                <div>
                    <Calendar
                        onChange={setCheckIn}
                        secondOnChange={setCheckOut}
                        selectedDateFromInput={new Date(checkIn)}
                        secondSelectedDateFromInput={new Date(checkOut)}
                    />
                    <div className='calendarLegend'>
                        <div className='legendElement'>
                            <label>Free date - </label>
                            <div>1</div>
                        </div>
                        <div className='legendElement'>
                            <label>Booked rooms - </label>
                            <div>2</div>
                        </div>
                        <div className='legendElement'>
                            <label>Holidays - </label>
                            <div>3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room

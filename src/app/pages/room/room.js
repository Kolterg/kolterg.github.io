import './room.scss';
import { getRoomById } from '../../../services/api.service';
import { useLoaderData } from 'react-router-dom';

import RoomDetails from '../../components/roomDetails';
import RoomImages from '../../components/roomImages';
import Calendar from 'app/components/calendar';
import { useState } from 'react';

export async function loader({ params }) {
    const room = await getRoomById(params.roomId);
    if (!room) {
        throw new Response("", {
            status: 404,
            statusText: "Room Not Found",
        });
    }
    return { room };
}

function Room() {
    const { room } = useLoaderData();

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    function firstOnChange(date) {
        setCheckIn((date.getUTCFullYear()) + "/" + (date.getMonth() + 1) + "/" + (date.getUTCDate()));
        // console.log("First date " + (date.getUTCFullYear()) + "/" + (date.getMonth() + 1) + "/" + (date.getUTCDate()));
    }

    function secondOnChange(date) {
        setCheckOut((date.getUTCFullYear()) + "/" + (date.getMonth() + 1) + "/" + (date.getUTCDate()));
        // console.log("Second date " + (date.getUTCFullYear()) + "/" + (date.getMonth() + 1) + "/" + (date.getUTCDate()));
    }

    return (
        <div id='RoomPage'>
            <h1>{room.name}</h1>
            <div>
                <RoomImages room={room} />
                <RoomDetails room={room} />
            </div>

            <div>
                <div>
                    <p>{room.description.text}</p>
                    <div className='chooseRoom'>
                        <p>Choose room number</p>
                        <select>
                            <option value={[]}>1</option>
                            <option value={[]}>2</option>
                            <option value={[]}>3</option>
                        </select>
                    </div>
                    <form>
                        <div>
                            <label>
                                Name:
                                <input type='text' />
                            </label>
                            <label>
                                Email:
                                <input type='text' />
                            </label>
                            <div>
                                <label>
                                    Vehicle:
                                    <input type='checkbox' />
                                </label>
                                <label>
                                    <input type='number' />
                                </label>
                            </div>
                            <label>
                                Check-in:
                                <input
                                    type='text'
                                    placeholder='YYYY/MM/DD'
                                    value={checkIn}
                                    onChange={e => setCheckIn(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Surname:
                                <input type='text' />
                            </label>
                            <label>
                                Phone:
                                <input type='text' />
                            </label>
                            <div>
                                <label>
                                    Pets:
                                    <input type='checkbox' />
                                </label>
                                <label>
                                    <input type='number' />
                                </label>
                            </div>
                            <label>
                                Check-out:
                                <input
                                    type='text'
                                    placeholder='YYYY/MM/DD'
                                    value={checkOut}
                                    onChange={e => setCheckOut(e.target.value)}
                                />
                            </label>
                        </div>
                    </form>
                </div>
                <div>
                    <Calendar
                        onChange={firstOnChange}
                        secondOnChange={secondOnChange}
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
            <button>Book the room</button>
        </div>
    )
}

export default Room

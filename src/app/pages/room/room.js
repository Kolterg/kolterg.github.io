import './room.css';
import { getRoomById } from '../../../services/api.service';
import { useLoaderData } from 'react-router-dom';

import Calendar from '../../../assets/img/Screenshot 2023-12-01 202539.png';
import RoomDetails from '../../components/roomDetails/roomDetails';
import RoomImages from '../../components/roomImages/roomImages';

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
    const { room } = useLoaderData()

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
                                <input type='text' />
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
                                <input type='text' />
                            </label>
                        </div>
                    </form>
                </div>
                <div>
                    <img src={Calendar} alt='Calendar' />
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

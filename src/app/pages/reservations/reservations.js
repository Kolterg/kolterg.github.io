import './reservations.css';

import RoomsCard from './roomsCard/roomsCard';

import { getRooms } from '../../../services/api.service';
// import { useState } from 'react';

function ReservationsPage() {
    // let [rooms, setRooms] = useState([]);

    let rooms = getRooms();
    
    return (
        <div id='Reservations'>
            <div className='search'>
                <h2>Book now</h2>
                <div className='calendarBox'>
                    <label htmlFor='checkInField'>Check in</label>
                    <input type='text' placeholder='DD MM YY' className='checkIn' id='checkInField' readOnly/>
                </div>
                <div className='calendarBox'>
                    <label htmlFor='checkOutField'>Check out</label>
                    <input type='text' placeholder='DD MM YY' className='checkOut' id='checkOutField' readOnly/>
                </div>
                <div className='calendarBox'>
                    <label htmlFor='personField'>Person</label>
                    <input type='number' value={1} className='person' id='personField' readOnly/>
                </div>
                <button className='checkBtn'>Check availability</button>
            </div>
            <div className='roomsList'>
                {
                    rooms.map(value => <RoomsCard
                        key={value.id}
                        room={value}/>)
                }
                {/* <div className='roomsCard'>
                    <img className='roomFotos' src={BadroomFamily3} alt='Badroom Family 3' />
                    <div className='description'>
                        <h2>Badroom Family 3</h2>
                        <p>Room with 1 double bed, private bathroom, cable TV, hot water and WiFi Maximum capacity: 2 people </p>
                        <p>Beds: 1 double</p>
                        <div className='icons'>
                            <img src={WiFiIco} alt='Wi-fi' />
                            <img src={TVIco} alt='TV' />
                            <img src={ShowerIco} alt='Shower' />
                            <img src={BathIco} alt='Bath' />
                            <img src={TowelsIco} alt='Towels' />
                        </div>
                    </div>
                    <div className='bookingArea'>
                        <h3>
                            From<br />
                            S/.120
                        </h3>
                        <button>Book</button>
                        <p>Rooms left 8</p>
                    </div>
                </div>
                <div className='roomsCard'>
                    <img className='roomFotos' src={BadroomFamilyPremium} alt='Badroom Family 3' />
                    <div className='description'>
                        <h2>Matrimonial Premium</h2>
                        <p>Room with 1 double bed, private bathroom, cable TV, minibar, hot water and WiFi. (With a view towards nature) Maximum capacity: 2</p>
                        <p>Beds: 1 double</p>
                        <div className='icons'>
                            <img src={WiFiIco} alt='Wi-fi' />
                            <img src={TVIco} alt='TV' />
                            <img src={ShowerIco} alt='Shower' />
                            <img src={BathIco} alt='Bath' />
                            <img src={TowelsIco} alt='Towels' />
                        </div>
                    </div>
                    <div className='bookingArea'>
                        <h3>
                            From<br />
                            S/.180
                        </h3>
                        <button>Book</button>
                        <p>Rooms left 2</p>
                    </div>
                </div>
                <div className='roomsCard'>
                    <img className='roomFotos' src={BadroomDouble} alt='Badroom Family 3' />
                    <div className='description'>
                        <h2>Double</h2>
                        <p>Habitación con 1 cama de 2plz + 1 cama de 1.5plz , baño privado, TV cable, agua caliente y WiFi Capacidad máxima: 3 adultos</p>
                        <p>Beds: 1 single, 1 double</p>
                        <div className='icons'>
                            <img src={WiFiIco} alt='Wi-fi' />
                            <img src={TVIco} alt='TV' />
                            <img src={ShowerIco} alt='Shower' />
                            <img src={BathIco} alt='Bath' />
                            <img src={TowelsIco} alt='Towels' />
                        </div>
                    </div>
                    <div className='bookingArea'>
                        <h3>
                            From<br />
                            S/.150
                        </h3>
                        <button>Book</button>
                        <p>Rooms left 3</p>
                    </div>
                </div>
                <div className='roomsCard'>
                    <img className='roomFotos' src={BadroomTriple} alt='Badroom Triple' />
                    <div className='description'>
                        <h2>Triple</h2>
                        <p>
                            Es una habitación con capacidad máxima de 4 personas que consta de una cama de 2 plazas y 2 camas de 1 1/2 plaza, baño privado con agua caliente las 24 h, Tv-Cable, Wi-Fi.
                        </p>
                        <p>Beds: 2 single, 1 double</p>
                        <div className='icons'>
                            <img src={WiFiIco} alt='Wi-fi' />
                            <img src={TVIco} alt='TV' />
                            <img src={ShowerIco} alt='Shower' />
                            <img src={BathIco} alt='Bath' />
                            <img src={TowelsIco} alt='Towels' />
                        </div>
                    </div>
                    <div className='bookingArea'>
                        <h3>
                            From<br />
                            S/.200
                        </h3>
                        <button>Book</button>
                        <p>Rooms left 3</p>
                    </div>
                </div>
                <div className='roomsCard'>
                    <img className='roomFotos' src={BadroomDD} alt='Badroom DD' />
                    <div className='description'>
                        <h2>DD</h2>
                        <p>Es una habitación con capacidad máxima de 4 personas que consta de dos camas de 2 plazas, baño privado con agua caliente las 24h, Tv-cable, Wi-Fi.</p>
                        <p>Beds: 2 doubles</p>
                        <div className='icons'>
                            <img src={WiFiIco} alt='Wi-fi' />
                            <img src={TVIco} alt='TV' />
                            <img src={ShowerIco} alt='Shower' />
                            <img src={BathIco} alt='Bath' />
                            <img src={TowelsIco} alt='Towels' />
                        </div>
                    </div>
                    <div className='bookingArea'>
                        <h3>
                            From<br />
                            S/.180
                        </h3>
                        <button>Book</button>
                        <p>Rooms left 3</p>
                    </div>
                </div>
                <div className='roomsCard'>
                    <img className='roomFotos' src={BadroomDS} alt='Badroom DS' />
                    <div className='description'>
                        <h2>DS</h2>
                        <p>Es una habitación con capacidad máxima de 2 personas que consta de 2 camas de 1 1/2 plaza, baño privado con agua caliente las 24h, Tv-Cable y Wi-Fi.</p>
                        <p>Beds: 2 singles</p>
                        <div className='icons'>
                            <img src={WiFiIco} alt='Wi-fi' />
                            <img src={TVIco} alt='TV' />
                            <img src={ShowerIco} alt='Shower' />
                            <img src={BathIco} alt='Bath' />
                            <img src={TowelsIco} alt='Towels' />
                        </div>
                    </div>
                    <div className='bookingArea'>
                        <h3>
                            From<br />
                            S/.130
                        </h3>
                        <button>Book</button>
                        <p>Rooms left 3</p>
                    </div>
                </div>
                <div className='roomsCard'>
                    <img className='roomFotos' src={BadroomFamily2} alt='Badroom Family 2' />
                    <div className='description'>
                        <h2>Badroom Family 2</h2>
                        <p>Es una habitación ubicada en el 2do piso, con capacidad máxima de 2 personas que consta de una cama de 2 plazas, baño privado con agua caliente las 24h, Tv-Cable, Wi-Fi.</p>
                        <p>Beds: 1 double</p>
                        <div className='icons'>
                            <img src={WiFiIco} alt='Wi-fi' />
                            <img src={TVIco} alt='TV' />
                            <img src={ShowerIco} alt='Shower' />
                            <img src={BathIco} alt='Bath' />
                            <img src={TowelsIco} alt='Towels' />
                        </div>
                    </div>
                    <div className='bookingArea'>
                        <h3>
                            From<br />
                            S/.100
                        </h3>
                        <button>Book</button>
                        <p>Rooms left 3</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ReservationsPage;
import './roomDetails.css';

import WiFiIco from '../../../assets/img/rooms/ico/wi-fi.png';
import TVIco from '../../../assets/img/rooms/ico/tv.png';
import ShowerIco from '../../../assets/img/rooms/ico/shower.png';
import BathIco from '../../../assets/img/rooms/ico/bath.png';
import TowelsIco from '../../../assets/img/rooms/ico/towels.png';

function RoomDetails({room}) {
    return (
        <div id='roomDetails'>
                <h4>Details:</h4>
                <ul>
                    <li>Accommodates: {room.description.accommodates}</li>
                    <li>Beds: {room.description.beds}(s)</li>
                    <li>Floor: {room.description.floor}</li>
                    <li>
                        Services and amenities:<br />
                        <div className='icons'>
                            <div className='amenitie'>
                                <img className='ico' src={WiFiIco} alt='Wi-Fi' />
                                <p>Wi-fi</p>
                            </div>
                            <div className='amenitie'>
                                <img className='ico' src={ShowerIco} alt='Shower' />
                                <p>Shower</p>
                            </div>
                            <div className='amenitie'>
                                <img className='ico' src={TowelsIco} alt='Towels' />
                                <p>Towels</p>
                            </div>
                            <div className='amenitie'>
                                <img className='ico' src={TVIco} alt='TV' />
                                <p>TV</p>
                            </div>
                            <div className='amenitie'>
                                <img className='ico' src={BathIco} alt='Bath' />
                                <p>Bath</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='booking'>
                    <div className='price'>
                        <p>Prices start from</p>
                        <h3>S/.{room.cost}</h3>
                        <p>per night</p>
                    </div>
                </div>
            </div>
    )
}

export default RoomDetails

import WiFiIco from 'assets/img/rooms/ico/wi-fi.png';
import TVIco from 'assets/img/rooms/ico/tv.png';
import ShowerIco from 'assets/img/rooms/ico/shower.png';
import BathIco from 'assets/img/rooms/ico/bath.png';
import TowelsIco from 'assets/img/rooms/ico/towels.png';
import { Link } from 'react-router-dom';

function RoomsCard({room}) {

    return (
        <div className='roomsCard'>
            <img className='roomFotos' src={Object.values(room.miniFotos)} alt={room.name} />
            <div className='description'>
                <h2>{room.name}</h2>
                <p>{room.description.textShort}</p>
                <p>{room.description.details.beds}</p>
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
                    From
                    <br />
                    <br />
                    <p>S/.{room.cost}</p>
                </h3>
                <Link to={'../room/' + room.id}><button>Book</button></Link>
                <p className='roomsLeft'>Rooms left {room.roomsLeft}</p>
            </div>
        </div>
    );
}

export default RoomsCard;
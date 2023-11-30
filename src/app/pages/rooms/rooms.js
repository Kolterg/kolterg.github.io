import './rooms.css';

import { getRooms } from '../../../services/api.service';
import RoomComponent from './components/room.component';

function RoomsPage() {

    let rooms = getRooms();

    return (
        <div className='Rooms'>
            <div className='head'>
                <h1>Our rooms</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus. Mauris sit amet massa vitae tortor condimentum.</p>
            </div>
            <div className='content'>
                {
                    rooms.map(value => <RoomComponent
                        key={value.id}
                        room={value}/>)
                }
            </div>
        </div>
    )
}

export default RoomsPage;
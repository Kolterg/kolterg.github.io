import { dateToString } from 'app/components/calendar/calendar';
import { Link } from 'react-router-dom';
import { deleteRoom } from 'services/api.service';
// import PopUp from './popUp';
// import { useEffect, useState } from 'react';

export async function action({ request }) {
    let formData = await request.formData();
    console.log(formData.get('id'));
}

function RoomCard({ room, id, name, accommodates, beds, cost }) {

    // const [trigerRerender, setTrigerRerender] = useState(false);
    // const [isPopUpOpen, setPopUpOpen] = useState(false);

    // let response = null;

    async function delRoom(id, typeOfRoom) {
        await deleteRoom(id, typeOfRoom);
        // if (response) setPopUpOpen(true)
        // console.log(response);
        // setTrigerRerender(!trigerRerender);
    }


    return (
        <div className='roomCard'>
            <p className='number'>{room.number}</p>
            <p className='name'>{name}</p>
            <p className='accommodates'>{accommodates}</p>
            <p className='beds'> {beds}</p>
            <p className='checkIn'>{room.reservations[0] ? dateToString(room.reservations[1].checkIn) : '---'}</p>
            <p className='checkOut'> {room.reservations[0] ? dateToString(room.reservations[1].checkOut) : '---'} </p>
            <p className='cost'>S/.{cost}</p>
            <Link to={'../room-admin/' + room.id}><button id='Reserve'>Reserve</button></Link>
            <p className='deleteBtn' onClick={async () => delRoom(room.id, room.type)}>X</p>

            {/* <PopUp
                active={isPopUpOpen}
                header={response}
                text={response}
            /> */}
        </div>
    );
}

export default RoomCard;
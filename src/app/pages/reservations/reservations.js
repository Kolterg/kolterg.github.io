import './reservations.scss';

import { useLoaderData } from 'react-router-dom';
import { findAvailabilityRooms } from '../../../services/api.service';

import RoomsCard from './roomsCard/roomsCard';
import SearchBar from 'app/components/searchBar';

export async function loader({ request }) {
    const url = new URL(request.url);
    const checkIn = url.searchParams.get("checkIn");
    const checkOut = url.searchParams.get("checkOut");
    const person = url.searchParams.get("person");
    const rooms = await findAvailabilityRooms(person, checkIn, checkOut);
    return { rooms, checkIn, checkOut, person };
}

function ReservationsPage() {
    let { rooms, checkIn, checkOut, person } = useLoaderData();
    
    return (
        <div id='Reservations'>
            <SearchBar
                checkIn={checkIn === null ? '' : checkIn}
                checkOut={checkOut === null ? '' : checkOut}
                person={person}
            />
            <div className='roomsList'>
                {
                    rooms.map(value => <RoomsCard
                        key={value.id}
                        room={value}
                    />)
                }
            </div>

        </div>
    )
}

export default ReservationsPage;
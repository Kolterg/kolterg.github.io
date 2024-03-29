import { Link } from 'react-router-dom';
import RoomDetails from '../../../components/roomDetails';
import RoomImages from '../../../components/roomImages';

function RoomComponent({ room }) {
    function Description() {
        return <div className='description'>
            <h2>{room.name}</h2>
            <p>{room.description.text}</p>
            <RoomDetails room={room} />
            <div className='button-wrap'>
                <Link to={'../room/' + room.id}><button className='bookNowBtn'>Book now</button></Link>
            </div>
        </div>
    }

    return (
        <div className='RoomComponent'>
            {
                room.id % 2 === 0 ?
                    <div className='room'>
                        <RoomImages room={room} />
                        <Description />
                    </div> :
                    <div className='room'>
                        <Description />
                        <RoomImages
                            room={room}
                            right={true}
                        />
                    </div>
            }
        </div>
    )
}

export default RoomComponent;
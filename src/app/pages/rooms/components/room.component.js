import WiFiIco from '../../../../assets/img/rooms/ico/wi-fi.png';
import TVIco from '../../../../assets/img/rooms/ico/tv.png';
import ShowerIco from '../../../../assets/img/rooms/ico/shower.png';
import BathIco from '../../../../assets/img/rooms/ico/bath.png';
import TowelsIco from '../../../../assets/img/rooms/ico/towels.png';

function RoomComponent({ room }) {
    function Image() {
        return <img src={Object.values(room.fotos)} alt={room.name} width={866} />
    }

    function Description () {
        return <div className='description'>
            <h2>{room.name}</h2>
            <p>{room.description.text}</p>
            <div className='details'>
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
            </div>
            <div className='booking'>
                <div className='price'>
                    <p>Prices start from</p>
                    <h3>S/.{room.cost}</h3>
                    <p>per night</p>
                </div>
                <button className='bookNowBtn'>Book now</button>
            </div>
        </div>
    }

    return (
        <div className='RoomComponent'>
            {
                room.id % 2 === 0 ? <div className='room'>
                    <Image /> <Description />
                </div> : <div className='room'>
                    <Description /> <Image />
                </div>
            }
            {/* {image}
            {description} */}
            {/* <img src={Object.values(room.fotos)} alt='Badroom Family Premium}' width={866} />
            <div className='description'>
                <h2>{room.name}</h2>
                <p>{room.description.text}</p>
                <div className='details'>
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
                </div>
                <div className='booking'>
                    <div className='price'>
                        <p>Prices start from</p>
                        <h3>S/.{room.cost}</h3>
                        <p>per night</p>
                    </div>
                    <button className='bookNowBtn'>Book now</button>
                </div>
            </div> */}
        </div>
    )
}

export default RoomComponent;
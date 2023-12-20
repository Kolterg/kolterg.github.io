import './style.css';

function RoomImages({room, right}) {
    return (
        <img id='roomImage' className={right ? 'right' : 'left'} src={Object.values(room.fotos)} alt={room.name} width={866} />
    )
}

export default RoomImages

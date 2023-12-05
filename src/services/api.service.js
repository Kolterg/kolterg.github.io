import rooms from "../data/roomsDb";

function getRooms() {
    return roomsTypes;
}

function getRoomById(roomId) {
    return roomsTypes.find((value) => + roomId === value.id)
}

function findAvailabilityRooms(accommodates, checkIn, checkOut) {
    const availabilRooms = rooms.map(room => {
        if (room.accommodates >= accommodates) {
            return;
        }
    })
}

export { getRooms, getRoomById };
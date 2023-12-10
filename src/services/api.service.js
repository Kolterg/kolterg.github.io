import { roomsTypes } from "data/roomsTypesDb";
import { rooms } from "data/completeDB";

function getRooms() {
    return roomsTypes;
}

function getRoomById(roomId) {
    return roomsTypes.find((value) => + roomId === value.id)
}

// function onlyUniqueArray(value, index, self) {
//     return self.indexOf(value) === index;
// }

function checkDateEntrance(date, period1, period2) {
    if (period1 < date && date < period2) {
        // console.log((date.getUTCFullYear()) + "/" + (date.getMonth() + 1) + "/" + (date.getUTCDate()) + ' Попадає в період ' + (period1.getUTCFullYear()) + "/" + (period1.getMonth() + 1) + "/" + (period1.getUTCDate()) + ' - ' + (period2.getUTCFullYear()) + "/" + (period2.getMonth() + 1) + "/" + (period2.getUTCDate()));
        return true
    }
    else {
        // console.log((date.getUTCFullYear()) + "/" + (date.getMonth() + 1) + "/" + (date.getUTCDate()) + ' Не попадає в період ' + (period1.getUTCFullYear()) + "/" + (period1.getMonth() + 1) + "/" + (period1.getUTCDate()) + ' - ' + (period2.getUTCFullYear()) + "/" + (period2.getMonth() + 1) + "/" + (period2.getUTCDate()));
        return false
    }
}

function findAvailabilityRooms(accommodates = 1, checkIn, checkOut) {
    if (accommodates || (checkIn && checkOut)) {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        return rooms.filter(typeOfRoom => {

            // if (typeOfRoom.description.details.accommodates >= accommodates) {

            if (typeOfRoom.roomsList) {

                console.log(typeOfRoom);
                let valueOfAvailableRooms = typeOfRoom.roomsList.length;

                for (const room of typeOfRoom.roomsList) {

                    let isRoomCount = false;

                    if (room.reservations.length > 0) {
                        // console.log(room.number);

                        for (const reservation of room.reservations) {

                            if (!isRoomCount) {
                                // console.log(room.reservations.indexOf(reservation));
                                if (
                                    (checkDateEntrance(checkInDate, reservation.checkIn, reservation.checkOut) || checkDateEntrance(checkOutDate, reservation.checkIn, reservation.checkOut))
                                    ||
                                    (checkDateEntrance(reservation.checkIn, checkInDate, checkOutDate) || checkDateEntrance(reservation.checkOut, checkInDate, checkOutDate))
                                ) {
                                    valueOfAvailableRooms -= 1;
                                    isRoomCount = true;
                                }
                            }
                        }
                    }
                }
                typeOfRoom.roomsLeft = valueOfAvailableRooms;
            }
            console.log(typeOfRoom.roomsLeft);
            if (typeOfRoom.roomsLeft > 0) {
                return typeOfRoom;
            }
            return false;
            // }
        })
    } else return rooms;
}

export { getRooms, getRoomById, findAvailabilityRooms };
import { roomsTypes } from "data/roomsTypesDb";
import { rooms } from "data/completeDB";
import localforage from "localforage";

// const ROOMS = 'rooms';

export /* async */ function getRoomsTypes(query) {
    /* await */ fakeNetwork(`getRooms:${query}`);
    return roomsTypes;
}

export async function getRoomTypeById(id) {
    const rooms = await getRooms();
    return rooms.find(roomType => roomType.id === +id);
}

export function getRoomTypeByName(name) {
    return roomsTypes.find(roomType => roomType.name === name)
}

export async function getRooms(query) {
    await fakeNetwork(`getRooms:${query}`);
    const rooms = [];
    for (let typeOfRoom of roomsTypes) {
        let roomsList = await localforage.getItem(`${typeOfRoom.name}`);
        if (!roomsList) roomsList = [];
        typeOfRoom.roomsList = roomsList;
        rooms.push(typeOfRoom);
    }
    return rooms;
}

export async function getRoom(id, typeOfRoom) {
    const rooms = await localforage.getItem(typeOfRoom);
    return rooms.find(room => room.id === id);
}

export async function getRoomById(id) {
    const typesOfTheRooms = await getRooms();
    const rooms = typesOfTheRooms.map(roomType => roomType.roomsList).flat();
    return rooms.find(room => room.id === id);
}

export function getRoomsNamesList() {
    let roomsNames = roomsTypes.map(room => room.name)
    console.log(roomsNames);
}

function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word.charAt(0))
      .join('');
  
    return firstLetters;
  }

export async function createRoom(newRoom, typeOfRoom) {
    await fakeNetwork();
    
    let createAt = Date.now();
    let id = Math.random().toString(36).substring(2, 6) + getFirstLetters(typeOfRoom) + newRoom.number;
    let rooms = await localforage.getItem(`${typeOfRoom}`);
    // let rooms = await localforage.getItem(ROOMS);

    if (!rooms) {
        // return Error("Type of room does not exist!");
        rooms = [];
    }
    
    for (const room of rooms) {    
        if (room.number === newRoom.number) {
            console.log("Error");
            return Error("Room with this number already exist!")
        }
    }

    Object.assign(newRoom, {id: id, createAt: createAt, reservations: []})
    rooms.unshift(newRoom);
    await set(rooms, typeOfRoom);
    // console.log("Type of room: " + typeOfRoom);
    // console.log(rooms);
    console.log(newRoom);
    return "Room No " + newRoom.number + " was created";
}

export async function deleteRoom(id, typeOfRoom) {
    let rooms = await localforage.getItem(typeOfRoom);
    let index = rooms.findIndex(room => room.id === id);
    if (index > -1) {
        rooms.splice(index, 1);
        await set(rooms, typeOfRoom);
        return true;
    }
    return false;
}

export async function addReservation(reservation, typeOfRoom) {
    let rooms = await localforage.getItem(typeOfRoom);
    console.log(rooms);
    console.log(reservation);
    const index = rooms.findIndex(room => room.number === reservation.roomNumber);
    console.log(index);
    delete reservation.roomNumber;
    let room = rooms[index];
    console.log(room);
    Object.assign(reservation, {createAt: Date.now(), status: 'unconfirmed'});
    room.reservations.unshift(reservation);
    rooms[index] = room;
    set(rooms, typeOfRoom);
    return "New reservation added"
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

export function findAvailabilityRooms(accommodates = 1, checkIn, checkOut) {
    if (accommodates || (checkIn && checkOut)) {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        return rooms.filter(typeOfRoom => {

            // if (typeOfRoom.description.details.accommodates >= accommodates) {

            if (typeOfRoom.roomsList) {

                // console.log(typeOfRoom);
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
            // console.log(typeOfRoom.roomsLeft);
            if (typeOfRoom.roomsLeft > 0) {
                return typeOfRoom;
            }
            return false;
            // }
        })
    } else return rooms;
}

function set(rooms, typeOfRooms) {
    return localforage.setItem(`${typeOfRooms}`, rooms);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
    if (!key) {
        fakeCache = {};
    }

    if (fakeCache[key]) {
        return;
    }

    fakeCache[key] = true;
    return new Promise(res => {
        setTimeout(res, Math.random() * 800);
    });
}
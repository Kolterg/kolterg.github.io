import BadroomFamily3 from '../assets/img/rooms/BadroomFamily3.jpg';
import BadroomFamilyPremium from '../assets/img/rooms/BadroomFamilyNewFormat.jpeg';
import BadroomDouble from '../assets/img/rooms/Double.png';
import BadroomTriple from '../assets/img/rooms/Triple.png';
import BadroomDD from '../assets/img/rooms/DD.jpg';
import BadroomDS from '../assets/img/rooms/DS.jpg';
import BadroomFamily2 from '../assets/img/rooms/MatremonialLevel2.jpg';

import BadroomFamily3_mini from '../assets/img/rooms/BadroomFamily3_mini.jpg';
import BadroomFamilyPremium_mini from '../assets/img/rooms/BadroomFamilyNewFormat_Mini.jpeg';
import BadroomDouble_mini from '../assets/img/rooms/Double_mini.png';
import BadroomTriple_mini from '../assets/img/rooms/Triple_mini.png';
import BadroomDD_mini from '../assets/img/rooms/DD_mini.jpg';
import BadroomDS_mini from '../assets/img/rooms/DS_mini.jpg';
import BadroomFamily2_mini from '../assets/img/rooms/MatremonialLevel2_mini.jpg';

const rooms = [
    {
        id: 1,
        name: "Badroom Family 3",
        description: {
            text: "It is a room located on the 3rd floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, Cable TV and Wi-Fi.",
            textShort: "Room with 1 double bed, private bathroom, cable TV, hot water and WiFi Maximum capacity: 2 people",
            details: {
                accommodates: 2,
                beds: "1 doble",
                floor: "3rd",
                amenities: {
                    wifi: {
                        name: 'Wi-fi',
                        icon: ''
                    },
                    tv: {
                        name: 'TV',
                        icon: ''
                    },
                    shower: {
                        name: 'Shower',
                        icon: ''
                    },
                    bath: {
                        name: 'Bath',
                        icon: ''
                    },
                    towels: {
                        name: 'Towels',
                        icon: ''
                    }
                }
            },
        },
        cost: 120,
        fotos: {BadroomFamily3},
        miniFotos: {BadroomFamily3_mini},
        status: {
            isFree: true,
            reserved: {}
        },
        roomsLeft: 8
    },
    {
        id: 2,
        name: "Matrimonial Premium",
        description: {
            text: "It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
            textShort: "Room with 1 double bed, private bathroom, cable TV, minibar, hot water and WiFi. (With a view towards nature) Maximum capacity: 2",
            details: {
                accommodates: 2,
                beds: "1 doble",
                floor: "4rd",
                amenities: {
                    wifi: {
                        name: 'Wi-fi',
                        icon: ''
                    },
                    tv: {
                        name: 'TV',
                        icon: ''
                    },
                    shower: {
                        name: 'Shower',
                        icon: ''
                    },
                    bath: {
                        name: 'Bath',
                        icon: ''
                    },
                    towels: {
                        name: 'Towels',
                        icon: ''
                    }
                }
            },
        },
        cost: 150,
        fotos: {BadroomFamilyPremium},
        miniFotos: {BadroomFamilyPremium_mini},
        status: {
            isFree: true,
            reserved: {}
        },
        roomsLeft: 5
    },
    {
        id: 3,
        name: "Double",
        description: {
            text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
            textShort: "Room with 1 2-inch bed + 1 1.5-inch bed, private bathroom, cable TV, hot water and WiFi Maximum capacity: 3 adults",
            details: {
                accommodates: 3,
                beds: "1 single, 1 double",
                floor: "3rd",
                amenities: {
                    wifi: {
                        name: 'Wi-fi',
                        icon: ''
                    },
                    tv: {
                        name: 'TV',
                        icon: ''
                    },
                    shower: {
                        name: 'Shower',
                        icon: ''
                    },
                    bath: {
                        name: 'Bath',
                        icon: ''
                    },
                    towels: {
                        name: 'Towels',
                        icon: ''
                    }
                }
            },
        },
        cost: 150,
        fotos: {BadroomDouble},
        miniFotos: {BadroomDouble_mini},
        status: {
            isFree: true,
            reserved: {}
        },
        roomsLeft: 4
    },
    {
        id: 4,
        name: "Triple",
        description: {
            text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
            textShort: "It is a room with a maximum capacity of 4 people that consists of a 2-seater bed and 2 1 1/2-seater beds, private bathroom with hot water 24 hours a day, Cable TV, Wi-Fi.",
            details: {
                accommodates: 4,
                beds: "2 single, 1 double",
                floor: "3rd",
                amenities: {
                    wifi: {
                        name: 'Wi-fi',
                        icon: ''
                    },
                    tv: {
                        name: 'TV',
                        icon: ''
                    },
                    shower: {
                        name: 'Shower',
                        icon: ''
                    },
                    bath: {
                        name: 'Bath',
                        icon: ''
                    },
                    towels: {
                        name: 'Towels',
                        icon: ''
                    }
                }
            },
        },
        cost: 200,
        fotos: {BadroomTriple},
        miniFotos: {BadroomTriple_mini},
        status: {
            isFree: true,
            reserved: {}
        },
        roomsLeft: 3
    },
    {
        id: 5,
        name: "DD",
        description: {
            text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
            textShort: "It is a room with a maximum capacity of 4 people that consists of two double beds, private bathroom with hot water 24 hours a day, cable TV, Wi-Fi.",
            details: {
                accommodates: 4,
                beds: "2 doubles",
                floor: "3rd",
                amenities: {
                    wifi: {
                        name: 'Wi-fi',
                        icon: ''
                    },
                    tv: {
                        name: 'TV',
                        icon: ''
                    },
                    shower: {
                        name: 'Shower',
                        icon: ''
                    },
                    bath: {
                        name: 'Bath',
                        icon: ''
                    },
                    towels: {
                        name: 'Towels',
                        icon: ''
                    }
                }
            },
        },
        cost: 180,
        fotos: {BadroomDD},
        miniFotos: {BadroomDD_mini},
        status: {
            isFree: true,
            reserved: {}
        },
        roomsLeft: 3
    },
    {
        id: 6,
        name: "DS",
        description: {
            text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
            textShort: "It is a room with a maximum capacity of 2 people that consists of 2 1 1/2 beds, a private bathroom with hot water 24 hours a day, Cable TV and Wi-Fi.",
            details: {
                accommodates: 2,
                beds: "2 singles",
                floor: "3rd",
                amenities: {
                    wifi: {
                        name: 'Wi-fi',
                        icon: ''
                    },
                    tv: {
                        name: 'TV',
                        icon: ''
                    },
                    shower: {
                        name: 'Shower',
                        icon: ''
                    },
                    bath: {
                        name: 'Bath',
                        icon: ''
                    },
                    towels: {
                        name: 'Towels',
                        icon: ''
                    }
                }
            },
        },
        cost: 130,
        fotos: {BadroomDS},
        miniFotos: {BadroomDS_mini},
        status: {
            isFree: true,
            reserved: {}
        },
        roomsLeft: 3
    },
    {
        id: 7,
        name: "Badroom Family 2",
        description: {
            text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
            textShort: "It is a room located on the 2nd floor, with a maximum capacity of 2 people that consists of a double bed, private bathroom with hot water 24 hours a day, Cable TV, Wi-Fi.",
            details: {
                accommodates: 2,
                beds: "1 double",
                floor: "3rd",
                amenities: {
                    wifi: {
                        name: 'Wi-fi',
                        icon: ''
                    },
                    tv: {
                        name: 'TV',
                        icon: ''
                    },
                    shower: {
                        name: 'Shower',
                        icon: ''
                    },
                    bath: {
                        name: 'Bath',
                        icon: ''
                    },
                    towels: {
                        name: 'Towels',
                        icon: ''
                    }
                }
            },
        },
        cost: 100,
        fotos: {BadroomFamily2},
        miniFotos: {BadroomFamily2_mini},
        status: {
            isFree: true,
            reserved: {}
        },
        roomsLeft: 3
    },
]

function getRooms() {
    return rooms;
}

function getRoomById(roomId) {
    return rooms.map((value) => roomId === value.id)
}

export { getRooms, getRoomById };

// const rooms = {
//     family3: {
//         name: "Badroom Family 3",
//         description: {
//             text: "It is a room located on the 3rd floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, Cable TV and Wi-Fi.",
//             textShort: "Room with 1 double bed, private bathroom, cable TV, hot water and WiFi Maximum capacity: 2 people",
//             details: {
//                 accommodates: 2,
//                 beds: "1 doble",
//                 floor: "3rd",
//                 amenities: {
//                     wifi: {
//                         name: 'Wi-fi',
//                         icon: ''
//                     },
//                     tv: {
//                         name: 'TV',
//                         icon: ''
//                     },
//                     shower: {
//                         name: 'Shower',
//                         icon: ''
//                     },
//                     bath: {
//                         name: 'Bath',
//                         icon: ''
//                     },
//                     towels: {
//                         name: 'Towels',
//                         icon: ''
//                     }
//                 }
//             },
//         },
//         cost: 120,
//         fotos: [],
//         miniFotos: [],
//         status: {
//             isFree: true,
//             reserved: {}
//         }
//     },
//     familyPremium: {
//         name: "Matrimonial Premium",
//         description: {
//             text: "It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
//             textShort: "Room with 1 double bed, private bathroom, cable TV, minibar, hot water and WiFi. (With a view towards nature) Maximum capacity: 2",
//             details: {
//                 accommodates: 2,
//                 beds: "1 doble",
//                 floor: "4rd",
//                 amenities: {
//                     wifi: {
//                         name: 'Wi-fi',
//                         icon: ''
//                     },
//                     tv: {
//                         name: 'TV',
//                         icon: ''
//                     },
//                     shower: {
//                         name: 'Shower',
//                         icon: ''
//                     },
//                     bath: {
//                         name: 'Bath',
//                         icon: ''
//                     },
//                     towels: {
//                         name: 'Towels',
//                         icon: ''
//                     }
//                 }
//             },
//         },
//         cost: 150,
//         fotos: [],
//         miniFotos: [],
//         status: {
//             isFree: true,
//             reserved: {}
//         }
//     },
//     double: {
//         name: "Double",
//         description: {
//             text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
//             textShort: "Room with 1 2-inch bed + 1 1.5-inch bed, private bathroom, cable TV, hot water and WiFi Maximum capacity: 3 adults",
//             details: {
//                 accommodates: 3,
//                 beds: "1 single, 1 double",
//                 floor: "3rd",
//                 amenities: {
//                     wifi: {
//                         name: 'Wi-fi',
//                         icon: ''
//                     },
//                     tv: {
//                         name: 'TV',
//                         icon: ''
//                     },
//                     shower: {
//                         name: 'Shower',
//                         icon: ''
//                     },
//                     bath: {
//                         name: 'Bath',
//                         icon: ''
//                     },
//                     towels: {
//                         name: 'Towels',
//                         icon: ''
//                     }
//                 }
//             },
//         },
//         cost: 150,
//         fotos: [],
//         miniFotos: [],
//         status: {
//             isFree: true,
//             reserved: {}
//         }
//     },
//     triple: {
//         name: "Triple",
//         description: {
//             text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
//             textShort: "It is a room with a maximum capacity of 4 people that consists of a 2-seater bed and 2 1 1/2-seater beds, private bathroom with hot water 24 hours a day, Cable TV, Wi-Fi.",
//             details: {
//                 accommodates: 4,
//                 beds: "2 single, 1 double",
//                 floor: "3rd",
//                 amenities: {
//                     wifi: {
//                         name: 'Wi-fi',
//                         icon: ''
//                     },
//                     tv: {
//                         name: 'TV',
//                         icon: ''
//                     },
//                     shower: {
//                         name: 'Shower',
//                         icon: ''
//                     },
//                     bath: {
//                         name: 'Bath',
//                         icon: ''
//                     },
//                     towels: {
//                         name: 'Towels',
//                         icon: ''
//                     }
//                 }
//             },
//         },
//         cost: 200,
//         fotos: [],
//         miniFotos: [],
//         status: {
//             isFree: true,
//             reserved: {}
//         },
//         freeRooms: 3
//     },
//     dd: {
//         name: "DD",
//         description: {
//             text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
//             textShort: "It is a room with a maximum capacity of 4 people that consists of two double beds, private bathroom with hot water 24 hours a day, cable TV, Wi-Fi.",
//             details: {
//                 accommodates: 4,
//                 beds: "2 doubles",
//                 floor: "3rd",
//                 amenities: {
//                     wifi: {
//                         name: 'Wi-fi',
//                         icon: ''
//                     },
//                     tv: {
//                         name: 'TV',
//                         icon: ''
//                     },
//                     shower: {
//                         name: 'Shower',
//                         icon: ''
//                     },
//                     bath: {
//                         name: 'Bath',
//                         icon: ''
//                     },
//                     towels: {
//                         name: 'Towels',
//                         icon: ''
//                     }
//                 }
//             },
//         },
//         cost: 180,
//         fotos: [],
//         miniFotos: [],
//         status: {
//             isFree: true,
//             reserved: {}
//         },
//         freeRooms: 3
//     },
//     ds: {
//         name: "DS",
//         description: {
//             text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
//             textShort: "It is a room with a maximum capacity of 2 people that consists of 2 1 1/2 beds, a private bathroom with hot water 24 hours a day, Cable TV and Wi-Fi.",
//             details: {
//                 accommodates: 2,
//                 beds: "2 singles",
//                 floor: "3rd",
//                 amenities: {
//                     wifi: {
//                         name: 'Wi-fi',
//                         icon: ''
//                     },
//                     tv: {
//                         name: 'TV',
//                         icon: ''
//                     },
//                     shower: {
//                         name: 'Shower',
//                         icon: ''
//                     },
//                     bath: {
//                         name: 'Bath',
//                         icon: ''
//                     },
//                     towels: {
//                         name: 'Towels',
//                         icon: ''
//                     }
//                 }
//             },
//         },
//         cost: 130,
//         fotos: [],
//         miniFotos: [],
//         status: {
//             isFree: true,
//             reserved: {}
//         },
//         freeRooms: 3
//     },
//     family2: {
//         name: "Badroom Family 2",
//         description: {
//             text: "??? It is a room located on the 4th floor, with a maximum capacity of 2 people, consisting of a double bed, private bathroom with hot water 24 hours a day, SmartTV, Wi-Fi, nightstand, toiletries kit, minibar, view to nature and with access to the terrace of the Hotel.",
//             textShort: "It is a room located on the 2nd floor, with a maximum capacity of 2 people that consists of a double bed, private bathroom with hot water 24 hours a day, Cable TV, Wi-Fi.",
//             details: {
//                 accommodates: 2,
//                 beds: "1 double",
//                 floor: "3rd",
//                 amenities: {
//                     wifi: {
//                         name: 'Wi-fi',
//                         icon: ''
//                     },
//                     tv: {
//                         name: 'TV',
//                         icon: ''
//                     },
//                     shower: {
//                         name: 'Shower',
//                         icon: ''
//                     },
//                     bath: {
//                         name: 'Bath',
//                         icon: ''
//                     },
//                     towels: {
//                         name: 'Towels',
//                         icon: ''
//                     }
//                 }
//             },
//         },
//         cost: 100,
//         fotos: [],
//         miniFotos: [],
//         status: {
//             isFree: true,
//             reserved: {}
//         },
//         freeRooms: 3
//     },
// }
const rooms = [
    {
        id: 1,
        name: 'Matrmonial lvl3',
        accommodates: 2,
        roomsList: [
            {
                number: 1,
                reservations: [
                    {
                        checkIn: new Date(2023,11,12),
                        checkOut: new Date(2023,11,24),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                    {
                        checkIn: new Date(2023,11,26),
                        checkOut: new Date(2024,0,8),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                ]
            },
            {
                number: 2,
                reservations: [
                    {
                        checkIn: new Date(2023,11,18),
                        checkOut: new Date(2023,11,26),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                    {
                        checkIn: new Date(2024,0,10),
                        checkOut: new Date(2024,0,19),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'Matrimonial Premium',
        accommodates: 2,
        roomsList: [
            {
                number: 10,
                reservations: [
                    {
                        checkIn: new Date(2023,11,10),
                        checkOut: new Date(2023,11,18),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                    {
                        checkIn: new Date(2023,11,20),
                        checkOut: new Date(2023,11,30),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                ]
            },
            {
                number: 11,
                status: '',
                reservations: [
                    {
                        checkIn: new Date(2023,11,8),
                        checkOut: new Date(2023,11,26),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                    {
                        checkIn: new Date(2024,0,8),
                        checkOut: new Date(2024,0,26),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    }
                ]
            },
            {
                number: 12,
                reservations: [
                    {
                        checkIn: new Date(2023,11,9),
                        checkOut: new Date(2023,11,22),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                    {
                        checkIn: new Date(2024,0,2),
                        checkOut: new Date(2024,0,12),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    }
                ]
            },
        ]
    },
    {
        id: 3,
        name: 'Double',
        accommodates: 3,
        roomsList: [
            {
                number: 20,
                reservations: [
                    {
                        checkIn: new Date(2023,11,10),
                        checkOut: new Date(2023,11,18),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                    {
                        checkIn: new Date(2023,11,20),
                        checkOut: new Date(2023,11,30),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                ]
            },
            {
                number: 21,
                reservations: [
                    {
                        checkIn: new Date(2023,11,8),
                        checkOut: new Date(2023,11,26),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                    {
                        checkIn: new Date(2024,0,8),
                        checkOut: new Date(2024,0,26),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    }
                ]
            },
            {
                number: 22,
                status: '',
                reservations: [
                    {
                        checkIn: new Date(2023,11,9),
                        checkOut: new Date(2023,11,22),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    },
                    {
                        checkIn: new Date(2024,0,2),
                        checkOut: new Date(2024,0,12),
                        guest: {
                            firstName: 'Charlse',
                            lastName: 'Examples',
                            email: 'example00@gmail.com',
                            phone: '+3450987564',
                        },
                        vehicle: {
                            existanse: true,
                            number: '2'
                        },
                        pets: {
                            existanse: true,
                            number: 1
                        }
                    }
                ]
            },
        ]
    },
]

export default rooms;
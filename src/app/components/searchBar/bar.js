import React from 'react';
import { Form } from 'react-router-dom';

// export async function action({ request, params }) {
//     const formData = await request.formData();
//     const searchData = Object.fromEntries(formData);
//     const checkIn = searchData.searchParams.get("checkIn");
//     const checkOut = searchData.searchParams.get("checkOut");
//     const person = searchData.searchParams.get("person");
//     return redirect('/reservations/' + `?checkIn=${checkIn}&checkOut=${checkOut}&person=${person}`);
// }

// export function action({request}) {
//     const url = new URL(request.url);
//     const checkIn = url.searchParams.get("checkIn");
//     const checkOut = url.searchParams.get("checkOut");
//     const person = url.searchParams.get("person");
//     return redirect('../reservations/' + `?checkIn=${checkIn}&checkOut=${checkOut}&person=${person}`);
// }

function Bar() {
    return (
        <div className='bar'>
            <h2>Book now</h2>
            <Form method='post' id='search-form'>
                <div className='calendarBox'>
                    <label htmlFor='checkInField'>Check in</label>
                    <input
                        type='text'
                        placeholder='YYYY-MM-DD'
                        className='checkIn'
                        id='checkInField'
                        name='checkIn'
                    />
                </div>
                <div className='calendarBox'>
                    <label htmlFor='checkOutField'>Check out</label>
                    <input
                        type='text'
                        placeholder='YYYY-MM-DD'
                        className='checkOut'
                        id='checkOutField'
                        name='checkOut'
                    />
                </div>
                <div className='calendarBox'>
                    <label htmlFor='personField'>Person</label>
                    <input
                        type='number'
                        placeholder='1'
                        className='person'
                        id='personField'
                        name='person'
                    />
                </div>
                <button className='checkBtn' type='submit'>Check availability</button>
            </Form>
        </div>
    )
}

export default Bar

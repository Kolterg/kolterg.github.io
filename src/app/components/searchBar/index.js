import './style.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-router-dom';
import classnames from 'classnames'
import Calendar from '../calendar';
import { useClickOutside } from 'hooks/useClickOutside';

function SearchBar({ checkIn, checkOut, person, method }) {

    const [checkInDate, setCheckInDate] = useState(checkIn);
    const [checkOutDate, setCheckOutDate] = useState(checkOut);

    const [isCheckInOpen, setCheckInOpen] = useState(false);
    const [isCheckOutOpen, setCheckOutOpen] = useState(false);

    const checkInCalendarRef = useRef(null)
    const checkOutCalendarRef = useRef(null)

    useClickOutside(checkInCalendarRef, () => setCheckInOpen(false));
    useClickOutside(checkOutCalendarRef, () => setCheckOutOpen(false));

    useEffect(() => {
        setCheckInDate(checkIn)
        setCheckOutDate(checkOut)
        document.getElementById("personField").value = person;
    }, [checkIn, checkOut, person]);


    return (
        <div id='Search'>
            <Form id="search-form" role="search" {...method}>
                <h2>Book now</h2>
                <div className='inputWrap'>
                    <label htmlFor='checkInField'>Check in</label>
                    <input
                        type='text'
                        placeholder='YYYY-MM-DD'
                        className='checkIn'
                        id='checkInField'
                        name='checkIn'
                        autoComplete='off'
                        value={checkInDate}
                        onChange={e => setCheckInDate(e.target.value)}
                        onClick={() => setCheckInOpen(!isCheckInOpen)}
                    />
                    <div className={classnames('calendarWrap', { 'active': isCheckInOpen })} ref={checkInCalendarRef}>
                        <Calendar
                            onChange={setCheckInDate}
                            selectedDateFromInput={new Date(checkInDate)}
                        />
                    </div>
                </div>
                <div className='inputWrap'>
                    <label htmlFor='checkOutField'>Check out</label>
                    <input
                        type='text'
                        placeholder='YYYY-MM-DD'
                        className='checkOut'
                        id='checkOutField'
                        name='checkOut'
                        autoComplete='off'
                        value={checkOutDate}
                        onChange={e => setCheckOutDate(e.target.value)}
                        onClick={() => setCheckOutOpen(!isCheckOutOpen)}
                    />
                    <div className={classnames('calendarWrap', { 'active': isCheckOutOpen })} ref={checkOutCalendarRef}>
                        <Calendar
                            onChange={setCheckOutDate}
                            selectedDateFromInput={new Date(checkOutDate)}
                        />
                    </div>
                </div>
                <div className='inputWrap'>
                    <label htmlFor='personField'>Person</label>
                    <input
                        type='number'
                        placeholder='1'
                        className='person'
                        id='personField'
                        name='person'
                        defaultValue={person}
                    />
                </div>
                <button className='checkBtn' type='submit'>Check availability</button>
            </Form>
        </div>
    )
}

SearchBar.defaultProps = { checkIn: '', checkOut: '', person: 1 }

export default SearchBar

import './style.scss';
import React, { useState, useEffect } from 'react';

import * as calendar from './calendar';
import classNames from 'classnames';

function Calendar({ monthNames, weekDayNames, onChange, secondOnChange, givenDate, selectedDateFromInput, secondSelectedDateFromInput }) {
    const [date, setDate] = useState(givenDate);
    
    const [firstSelectedDate, setFirstSelectedDate] = useState(selectedDateFromInput);
    const [secondSelectedDate, setSecondSelectedDate] = useState(secondSelectedDateFromInput);

    const [isFirstSelectedDate, setIsFirstSelectedDate] = useState(true);

    const currentDate = new Date();

    const monthDate = calendar.getMonthData(date.getFullYear(), date.getMonth());

    useEffect(() => {
        setFirstSelectedDate(selectedDateFromInput);
        setSecondSelectedDate(secondSelectedDateFromInput)
    }, [selectedDateFromInput, secondSelectedDateFromInput]);


    const handlePrevMonthButtonClick = () => {
        const prevMonthDate = new Date(date.getFullYear(), date.getMonth() - 1);
        setDate(prevMonthDate);
    };

    const handleNextMonthButtonClick = () => {
        const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1);
        setDate(nextMonthDate);
    };

    const handleDayClick = date => {
        if (secondOnChange) {
            // if (!isFirstSelectedDate && (date < firstSelectedDate)) setIsFirstSelectedDate(!isFirstSelectedDate);

            if (isFirstSelectedDate || (date < firstSelectedDate)) {
                setFirstSelectedDate(date);

                onChange(calendar.dateToString(date));

                if (date > secondSelectedDate) setSecondSelectedDate(null);

                if (isFirstSelectedDate) setIsFirstSelectedDate(!isFirstSelectedDate);
            } else {
                setSecondSelectedDate(date);

                secondOnChange(calendar.dateToString(date))

                if (date < firstSelectedDate) setFirstSelectedDate(null)

                setIsFirstSelectedDate(!isFirstSelectedDate);
            }
        } else {
            setFirstSelectedDate(date);

            onChange(calendar.dateToString(date));
        }
    };

    const check = () => {
        console.log(isFirstSelectedDate);
    }

    return (
        <div id='Calendar'>
            <header>
                <button onClick={handlePrevMonthButtonClick}>{'<'}</button>
                <p>{date.getFullYear().toString()} {monthNames[date.getMonth()]}</p>
                <button onClick={handleNextMonthButtonClick}>{'>'}</button>
            </header>
            <table>
                <thead>
                    <tr>
                        {
                            weekDayNames.map(name =>
                                <th key={name}>{name}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        monthDate.map((week, index) =>
                            <tr key={index} className='week'>
                                {week.map((date, index) =>
                                    date ?
                                        <td
                                            key={index}
                                            className={classNames('day', {
                                                'today': calendar.areDateEqual(date, currentDate),
                                                'selected': calendar.areDateEqual(date, firstSelectedDate) || calendar.areDateEqual(date, secondSelectedDate),
                                                'between': calendar.areDateBetween(firstSelectedDate, secondSelectedDate, date)
                                            })}
                                            onClick={() => handleDayClick(date)}
                                        >
                                            {date.getDate()}
                                        </td>
                                        :
                                        <td key={index}
                                            onClick={check}
                                        />
                                )}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

Calendar.defaultProps = {
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    ukrMonthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],

    longWeekDayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    weekDayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],

    givenDate: new Date(),

    selectedDateFromInput: null,
    secondSelectedDateFromInput: null,

    firstOnChange: Function.prototype,

    holidays: [new Date(2023, 11, 24), new Date(2023, 11, 25)]
}

export default Calendar;

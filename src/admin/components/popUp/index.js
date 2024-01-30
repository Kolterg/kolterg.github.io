import './style.scss';

import classNames from 'classnames';
import { useClickOutside } from 'hooks/useClickOutside';
import React, { useRef, useState } from 'react'

function PopUp({active, header, text}) {
    const [isPopUpOpen, setPopUpOpen] = useState(active);

    const popUpRef = useRef(null);

    useClickOutside(popUpRef, () => setPopUpOpen(false));

    return (
        <div id='PopUp' className={classNames({ 'active': isPopUpOpen })} ref={popUpRef}>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    )
}

export default PopUp

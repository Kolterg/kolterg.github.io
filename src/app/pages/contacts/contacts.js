import './contacts.scss';

import MapExample from '../../../assets/img/mapExample.png';

function ContactsPage() {
    return (
        <div className="Contacts">
            <div className="data">
                <h2>Address:</h2>
                <p>Jr. Tarapacá 700-702 Canta 15360 Perú</p>
                <h2>Phone:</h2>
                <p>+51 990 880 019</p>
                <h2>WhatsApp:</h2>
                <p>+51 990 880 019</p>
                <h2>Email:</h2>
                <p>example@gmail.com</p>
            </div>
            <img src={MapExample} alt='Map'/>
        </div>
    )
}

export default ContactsPage;
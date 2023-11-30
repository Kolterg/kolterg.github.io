import './contacts.css';

import MapExample from '../../../assets/img/mapExample.png';

function ContactsPage() {
    return (
        <div className="Contacts">
            <div className="data">
                <h2>Address:</h2>
                <h3>Jr. Tarapacá 700-702 Canta 15360 Perú</h3>
                <h2>Phone:</h2>
                <h3>+51 990 880 019</h3>
                <h2>WhatsApp:</h2>
                <h3>+51 990 880 019</h3>
                <h2>Email:</h2>
                <h3>example@gmail.com</h3>
            </div>
            <img src={MapExample} alt='Map'/>
        </div>
    )
}

export default ContactsPage;
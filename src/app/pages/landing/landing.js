import './landing.css';

function LandingPage() {
    return (
        <div id='LandingPage'>
            <div className='greatings'>
                <h2>Welcome to</h2>
                <h1>H Sol de Canta</h1>
                <p>We are a family accommodation that seeks to provide good experiences through family treatment and quality service.</p>
            </div>
            <div className='bar'>
                <h2>Book now</h2>
                <div className='calendarBox'>
                    <label>Check in</label>
                    <input type='text' placeholder='DD MM YY' className='checkIn'/>
                </div>
                <div className='calendarBox'>
                    <label>Check out</label>
                    <input type='text' placeholder='DD MM YY' className='checkOut'/>
                </div>
                <div className='calendarBox'>
                    <label>Person</label>
                    <input type='number' value={1} className='person'/>
                </div>
                <button className='checkBtn'>Check availability</button>
            </div>
        </div>
    )
}

export default LandingPage;
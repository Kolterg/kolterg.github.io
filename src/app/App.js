import './App.scss';
import {
  Link,
  Outlet
} from "react-router-dom";

import logo from "../assets/img/Logo.mini.png";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className='menu'>
          <Link to={''} className='link main'><div className='mainWrap'><img src={logo} alt='Link to main page' /></div></Link>
          <Link to={'about'} className='link about'>About</Link>
          <Link to={'rooms'} className='link'>Rooms</Link>
          <Link to={'reservations'} className='link'>Reservations</Link>
          <Link to={'contacts'} className='link'>Contacts</Link>
          <Link to={'activity'} className='link'>Activity</Link>
        </div>
        <div className='barAndBtn'>
          <select id='lenguageBar' className='lenguageBar'>
            <option value='value1'>EN</option>
            <option value='value2'>ES</option>
            <option value='value3'>UK</option>
          </select>
          <button className='bookBtn'>Book now</button>
        </div>
      </header>
      
      <div className="app-content">
        <Outlet />
      </div>

      <footer>
        <div className="overlap-group-2">
          <div className="footer-line" />
          <div className="footer-line-2" />
          <div className="footer-line-3" />
          <p className="text-wrapper-40">© 2023 by Sol de Canta</p>
          <div className="text-wrapper-41">Follow us on</div>
          <img
            className="FB-logo"
            alt="Fb logo"
            src="https://cdn.animaapp.com/projects/6503353afb0a69ad0d878f9e/releases/65033718f0a97f6b0e91c4c1/img/fb-logo.png"
          />
          <img
            className="inst-logo"
            alt="Inst logo"
            src="https://cdn.animaapp.com/projects/6503353afb0a69ad0d878f9e/releases/65033718f0a97f6b0e91c4c1/img/inst-logo.png"
          />
          <p className="contact-us-on">
            Contact us on WhatsApp for <br />
            any query
          </p>
          <div className="text-wrapper-42">(+51) 990 880 019</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import './App.scss';
import {
  NavLink,
  Outlet,
  Link
} from "react-router-dom";

import logo from "../assets/img/Logo.mini.png";

function App() {
  return (
    <div id="App">
      <header>
        <nav>
          <NavLink to={''} id='logo'><div id='logoWrap'><img src={logo} alt='Link to main page' /></div></NavLink>
          <NavLink to={'about'} >About</NavLink>
          <NavLink to={'rooms'} >Rooms</NavLink>
          <NavLink to={'reservations'} >Reservations</NavLink>
          <NavLink to={'contacts'} >Contacts</NavLink>
          <NavLink to={'activity'} >Activity</NavLink>
        </nav>
        <div className='barAndBtn'>
          <select id='lenguageBar' className='lenguageBar'>
            <option value='value1'>EN</option>
            <option value='value2'>ES</option>
            <option value='value3'>UK</option>
          </select>
          <button className='bookBtn'><Link to={'reservations'}>Book now</Link></button>
        </div>
      </header>
      
      <div id="app-content">
        <Outlet />
      </div>

      <footer>
        <div className="overlap-group-2">
          <div className="footer-line" />
          <div className="footer-line-2" />
          <div className="footer-line-3" />
          <p className="text-wrapper-40">© {new Date().getFullYear()} by Sol de Canta</p>
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

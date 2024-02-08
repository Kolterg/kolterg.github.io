import './App.scss';
import {
  NavLink,
  Outlet,
  Link
} from "react-router-dom";

import logo from "assets/img/Logo.mini.png";
import { useState } from 'react';
import classNames from 'classnames';

function App() {

  const [isMenuIconOpen, setMenuIconOpen] = useState(false);

  function openMenu() {
    // console.log(isMenuIconOpen);
    setMenuIconOpen(!isMenuIconOpen)
    // console.log(isMenuIconOpen);
    // if (isMenuIconOpen) {
    //   document.body.classList.toggle('_lock');
    // }
  }

  return (
    <div id="App" className={classNames('wrapper', { '_lock': isMenuIconOpen })}>
      <header>
        <div className='header'>
          <NavLink to={''} className='header__logo'><div id='logoWrap'><img src={logo} alt='Link to main page' /></div></NavLink>
          <div className={classNames('menu__icon', { '_active': isMenuIconOpen })} onClick={openMenu}>
            <span></span>
          </div>
          <nav className={classNames('menu__body', { '_active': isMenuIconOpen })}>
            <ul className='menu__list'>
              {/* <li className='menu__item'>
                <NavLink to={''} className={'menu__link'}>Main</NavLink>
              </li> */}
              <li className='menu__item'>
                <NavLink to={'about'} className={'menu__link'}>About</NavLink>
              </li>
              <li className='menu__item'>
                <NavLink to={'rooms'} className={'menu__link'}>Rooms</NavLink>
              </li>
              <li className='menu__item'>
                <NavLink to={'reservations'} className={'menu__link'}>Reservations</NavLink>
              </li>
              <li className='menu__item'>
                <NavLink to={'contacts'} className={'menu__link'}>Contacts</NavLink>
              </li>
              <li className='menu__item'>
                <NavLink to={'activity'} className={'menu__link'}>Activity</NavLink>
              </li>
            </ul>
            <div className='barAndBtn'>
              <select id='lenguageBar' className='lenguageBar'>
                <option value='value1'>EN</option>
                <option value='value2'>ES</option>
                <option value='value3'>UK</option>
              </select>
              <button className='bookBtn'><Link to={'reservations'}>Book now</Link></button>
            </div>
          </nav>
        </div>
      </header>

      <main id="app-content" className='page'>
        <Outlet />
      </main>

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

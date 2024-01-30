import './Admin.scss';

import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";

import logo from 'assets/img/Logo.mini.png';

function Admin() {
    return (
        <div id='Admin'>
            <header>
                <nav>
                    <NavLink to={''} id='logo'><div id='logoWrap'><img src={logo} alt='Link to main page' /></div></NavLink>
                    <NavLink to={'rooms'}>Rooms List</NavLink>
                </nav>
                <Link to={-1}>User</Link>
            </header>
            <div id='admin-content'>
                <Outlet />
            </div>
        </div>
    )
}

export default Admin

import React from 'react';
import logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="" href="#" />
            <div>
                <a href="Home">Order</a>
                <a href="Order Review">Order Review</a>
                <a href="Manage Inventory">Manage Inventory</a>
                <a href="Login">Login</a>
            </div>
        </header>
    );
};

export default Header;
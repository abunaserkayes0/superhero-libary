import React from 'react';
import logo from '../../icon/banner.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="" />
            <h1>Create Secret Book Writers Team</h1>
            <p>You can make anything by writing. A word after a word after a word is power.Except a living man there is nothing more wonderful than a book! A message to us from the dead.</p>
            <h2>Total Earning : 1 Million</h2>
        </div>
    );
};

export default Header;
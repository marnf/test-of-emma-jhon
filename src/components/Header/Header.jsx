import React from 'react';
import "./Header.css";
import logo from '../../assets/anupama.jpg'

const Header = () => {
    return (
        <div className='header'>
          <div>
            <h3>KNOWLEDGE TEST HOUSE</h3>
          </div>
          <div className='second-header'>
            <a href="#">HOME </a>
            <a href="#">SETTINGS</a>
            <a href="#">CONTACT</a>

            <img src={logo} alt="" />
          </div>
        </div>
    );
};

export default Header;
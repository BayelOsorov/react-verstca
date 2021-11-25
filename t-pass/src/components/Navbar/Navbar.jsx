import React, { useState } from 'react';
import navLogo from '../../images/Grouplogo.png'
const Navbar = () => {
    const [bool, setBool] = useState(false)

    return (
        <div className='navbar' >
            {
                bool ? (
                    <div className='burger'>
                        <button onClick={() => setBool(false)} className='close-btn' >X</button>
                        <ul>
                            <li>Stores</li>
                            <li>Help & Support</li>
                            <li>Dowload</li>
                        </ul>
                    </div>
                ) : ''
            }
            <div className="container">
                <div className="nav">
                    <div className="nav-left">
                        <img src={navLogo} alt="nav-logo" />
                    </div>
                    <div className="nav-right">
                        <button onClick={() => setBool(true)} className='burger-menu' ><img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" /></button>
                        <ul className="nav-list">
                            <li className="nav-item">Stores</li>
                            <li className="nav-item">Help& Support</li>
                            <li className="nav-item">
                                <button>Dowload</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
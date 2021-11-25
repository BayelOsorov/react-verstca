import React, { useState } from 'react';
import navLogo from '../../images/navlogo.svg'
const Navbar = () => {
    const [bool, setBool] = useState(false)
    return (
        <>
            <div className='navbar'>
                <div className="container h-100">
                    <div className="nav h-100">
                        <div className="nav-left">
                            <img src={navLogo} alt="logo" />
                            <span>Documentation</span>
                        </div>

                        <div className="nav-right">
                            <ul className='nav-list'>
                                <li className="nav-item">Главная</li>
                                <li className="nav-item">Документация</li>
                                <li className="nav-item">Добавить</li>
                                <li className="nav-item">
                                    <input type="text" placeholder='Поиск' />
                                </li>
                                <li className="nav-item">GitHub</li>
                            </ul>
                            <div className="nav-btn">
                                <button onClick={() => setBool(!bool)} ><img width='50' src="https://cdn-icons.flaticon.com/png/512/706/premium/706944.png?token=exp=1637822110~hmac=6dcca58c45031cde769ba6ff2a33113d" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                bool ? (
                    <div className="navbar-mobile">
                        <div className="container">
                            <ul className='nav-list-mobile'>
                                <li className="nav-item-mobile">Главная</li>
                                <li className="nav-item-mobile">Документация</li>
                                <li className="nav-item-mobile">Добавить</li>
                                <li className="nav-item-mobile">
                                    <input type="text" placeholder='Поиск' />
                                </li>
                                <li className="nav-item-mobile">GitHub</li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    null
                )
            }
        </>
    );
};

export default Navbar;
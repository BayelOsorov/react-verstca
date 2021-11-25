import React from 'react';
import yellowLogo from '../../images/navlogo.svg'
const Footer = () => {
    return (
        <div className='footer' >
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={yellowLogo} alt="footer-logo" />
                        <span>Community</span>
                    </div>
                    <div className="footer-lists">
                        <div> Lorem ipsum
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                        <div> Lorem ipsum
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                        <div> Lorem ipsum
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='year' >2021</div>

        </div>
    );
};

export default Footer;
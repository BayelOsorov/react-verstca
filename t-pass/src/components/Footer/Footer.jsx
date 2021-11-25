import React from 'react';
import logo from '../../images/Group---logo-white.svg'
import leftI from '../../images/Group--end1.svg'
import rightI from '../../images/Group---end3.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={leftI} alt="" />
            <div className="container">
                <div className="footer-body">
                    <div className="footer-left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer-right">
                        <ul> Company
                            <li>Merchant Portal</li>
                        </ul>
                        <ul>Support
                            <li>FAQ</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <ul>Follow Us
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={rightI} alt="" />
        </div>
    );
};

export default Footer;
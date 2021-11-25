import React from 'react';
import houseLogo from '../../images/Group--domik.svg'
import googleP from '../../images/Group--googleplay.svg'
import appStore from '../../images/Group--appstore.svg'

const ContactUs = () => {
    return (
        <div className='container' >
            <div className="contuct-us">
                <img src={houseLogo} alt="" />
                <h1>Enjoy your afternoon <br /> tea with a snack</h1>
                <input placeholder='Enter mobile number' type="text" />
                <button>Send Link</button>

            </div>
            <div className='stores' >
                <img src={googleP} alt="" />
                <img src={appStore} alt="" />
            </div>
        </div>
    );
};

export default ContactUs;
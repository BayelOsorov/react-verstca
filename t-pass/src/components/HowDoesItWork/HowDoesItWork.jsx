import React from 'react';
import iphone from '../../images/Group 1iphon1.png'
import loading from '../../images/Group 2prokrutka.svg'
const HowDoesItWork = () => {
    return (
        <div className="container">
            <div className='how-does-section' >
                <div className="how-does-left">
                    <img src={iphone} alt="phone" />
                </div>
                <div className="how-does-right">
                    <p>Your daily pick-me-up</p>
                    <h1>How does <br />
                        it work.
                    </h1>
                    <p>Start choosing your favorite teas and snacks in your nearby stores and place your orders, accumulate points, share gifts and teas with your friends and co-workers, and finally use our T-Pass to get your free drinks.</p>
                    <img src={loading} alt="load" />
                </div>

            </div>
        </div>
    );
};

export default HowDoesItWork;
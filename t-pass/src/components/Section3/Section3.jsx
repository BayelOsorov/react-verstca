import React from 'react';
import iphone from '../../images/Group 6---iphon2.svg'
import loading from '../../images/Group 2prokrutka.svg'
const Section3 = () => {
    return (
        <div className="container">
            <div className='section-3' >
                <div className="section-3-right">
                    <p>Please your friends</p>
                    <h1>Send gifts and<br />
                        order for groups
                    </h1>
                    <p>Send Gifts with a value for your friends and family and use it on their favorite stores. Be the rock star make Group Orders and pick up for your coworkers when they can't get away.</p>
                    <img src={loading} alt="load" />
                </div>
                <div className="section-3-left">
                    <img src={iphone} alt="phone" />
                </div>
            </div>
        </div>
    );
};

export default Section3;
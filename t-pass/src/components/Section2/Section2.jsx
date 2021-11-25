import React from 'react';
import logo1 from '../../images/Group 3-logo11.svg'
import logo2 from '../../images/Group 4-logo12.svg'
import logo3 from '../../images/Group 5-logo13.svg'
import img from '../../images/Rectangle -1112.svg'
const Section2 = () => {
    return (
        <div className="section-parent">
            <div className="container">
                <div className='section-2' >
                    <div className="section-left">
                        <div className="section-list">
                            <div className="section-item">
                                <div className='section-item-left'>
                                    <img src={logo1} alt="" />
                                    <h3>Loyalty Points</h3>
                                </div>
                                <p>Collect points on each store and redeem<br />them to change for Teas.</p>
                            </div>

                            <div className="section-item">
                                <div className='section-item-left'>
                                    <img src={logo2} alt="" />
                                    <h3>Exclusive Store Discounts</h3>
                                </div>
                                <p>You can enjoy lots of discounts from the<br /> selected stores near you.</p>
                            </div>

                            <div className="section-item">
                                <div className='section-item-left'>
                                    <img src={logo3} alt="" />
                                    <h3>T.Pass Free Drinks</h3>
                                </div>
                                <p>2 Teas for $5.99 each month. and you can<br /> carry them over to the next month.</p>
                            </div>
                        </div>
                    </div>

                    <div className="section-right">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
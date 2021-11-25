import React from 'react';
import manPic from '../../images/boyGirl.svg'
import vectorBtn from '../../images/Vectornext-icon.png'
import item1 from '../../images/Frameicon1.svg'
import item2 from '../../images/Frameicon2.png'
import item3 from '../../images/Frameicon3.png'

const MainPageBody = () => {
    return (
        <div className='main-page' >
            <div className="container">
                <div className="content">
                    <div className="content-left">
                        <h1>
                            <span>Order ahead</span>  <br />
                            and earn rewards for<br />
                            every purchase <span>.</span>
                        </h1>
                        <button>Discover now <img src={vectorBtn} alt="next" /></button>
                    </div>
                    <div className="content-right">
                        <img src={manPic} alt="main-pic" />
                    </div>
                </div>

                <div className="section1">
                    <div className="item-list">
                        <div className="item">
                            <img src={item1} alt="" />
                            <h3>Order ahead, skip the line</h3>
                            <p>Feel like a rock star when you bypass the <br /> line and save a bunch of time.</p>
                        </div>
                        <div className="item">
                            <img src={item2} alt="" />
                            <h3>Bonus and discounts</h3>
                            <p>You can enjoy lots of discounts from the<br /> selected stores, or accumulate points.</p>
                        </div>
                        <div className="item">
                            <img src={item3} alt="" />
                            <h3>Share with your friends</h3>
                            <p>Send gifts to your friends and family, and<br /> pick up for your coworkers when they can't get away .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageBody;
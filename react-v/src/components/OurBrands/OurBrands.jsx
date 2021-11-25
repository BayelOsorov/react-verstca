import React from 'react';
import './OurBrands.css'
import brand from '../../images/brands.svg'
import ourBrands from '../../images/наши бренды.svg'
import line3 from '../../images/Line.svg'


const OurBrands = () => {
    return (
        <div>
            <div className='brandBlock'>
                <img style={{padding:'50px 0'}} src={ourBrands} alt="" />
                <img className='line3' src={line3} alt="" />
                <div className="brandsPics">
                    <img src={brand} alt="" />
                    <img src={brand} alt="" />
                    <img src={brand} alt="" />
                    <img src={brand} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurBrands;
import React from 'react';
import './BlockOfWatches.css'
import newPostupleniya from '../../images/новые поступления.svg'
import watch from '../../images/watches.svg'
import line2 from '../../images/Line.svg'

const BlockOfWatches = () => {
    return (
        <div className='blockOfWathes'>
            <div>
                <img style={{margin:'80px 80px'}} src={newPostupleniya} alt="" />
                <img className='line2' src={line2} alt="" />
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', paddingLeft:'200px'}} className="watchesBlock">
                <img src={watch} alt="" />
                <img src={watch} alt="" />
                <img src={watch} alt="" />
                <img src={watch} alt="" />
                <img src={watch} alt="" />
                <img src={watch} alt="" />
                <img src={watch} alt="" />
                <img src={watch} alt="" />
            </div>
        </div>
    );
};

export default BlockOfWatches;
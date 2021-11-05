import React, { useState } from 'react';

const Baloon = () => {
    const [font, setFont] = useState(40)
    const [ball, setBall] = useState('🎈')
    const changeFont = () => {
        if (font >= 150) {
            setBall('💥')
            return
        }
        setFont((prev) => prev + 20)
    }
    return (
        <>
            <div style={{ fontSize: font }}>{ball}</div>
            <button onClick={changeFont}>+</button>
        </>
    );
};

export default Baloon;
import React from 'react';

const Props = ({ name = 'Ben', color }) => {
    return (
        <div>
            <h2 style={{ color: color }}>Hello {name}</h2>
            <h2>How are you {name}</h2>
        </div>
    );
};

export default Props;
import { useState } from 'react';

const Input = ({ getInp }) => {
    const [inp, setInp] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        let obj = {
            name: inp,
            id: Date.now()
        }
        getInp(obj)
        setInp('')
    }
    return (
        <div>
            <form action="">
                <input onChange={(e) => setInp(e.target.value)} type="text" value={inp} />
                <button onClick={handleClick} >Add</button>
            </form>
        </div>
    );
};

export default Input;
import React, { useState } from 'react';
import './Condition.css'
const Conditions = () => {
    // let users = [
    //     { name: 'Jhon', age: 33, id: 1 },
    //     { name: 'Sam', age: 23, id: 2 },
    //     { name: 'Snow', age: 11, id: 3 },

    // ]
    const [users, setUsers] = useState([
        { name: 'Jhon', age: 33, id: 1 },
        { name: 'Sam', age: 23, id: 2 },
        { name: 'Snow', age: 11, id: 3 },])

    function deleteUser(id) {
        // let arr = [...users]
        // arr = arr.filter((item) => item.id !== id)
        // setUsers(arr)
        // setUsers((prev) => [...prev])
    }
    return (
        <>
            {users.map((user) => (
                <div key={user.id} className={`${user.age < 100 ? 'isNoAdult' : null}`}>
                    Name: {user.name}
                    Age: {user.age}
                    <button onClick={() => deleteUser(user.id)}
                        disabled={user.age > 100 ? true : null}>Delete</button>
                </div>
            ))
            }
        </>
    );
};

export default Conditions;
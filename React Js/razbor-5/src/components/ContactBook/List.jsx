import React from 'react';

const List = ({ usersList, setUsersList }) => {
    const deleteUser = (id) => {
        let arr = [...usersList]
        arr = arr.filter((item) => item.id !== id)
        setUsersList(arr)
    }
    return (
        <div >
            {
                usersList.map((item) => (
                    <div key={item.id}>{item.name}
                        <button onClick={() => deleteUser(item.id)} >Delete</button>
                    </div>

                ))
            }
        </div>
    );
};

export default List;

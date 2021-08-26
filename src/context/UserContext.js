import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [name, setName] = useState('');
    const nameValue = {
        name,
        setName,
    };

    const [id, setId] = useState('');
    const idValue = {
        id,
        setId,
    };

    return (
        <UserContext.Provider value={{nameValue, idValue}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
import React, { useState, createContext } from 'react';

export const PostContext = createContext();

const PostContextProvider = (props) => {
    const [post, setPost] = useState([]);
    const postValue = {
        post,
        setPost,
    };

    const [userPost, setUserPost] = useState([]);
    const userPostValue = {
        userPost,
        setUserPost,
    };

    const [number, setNumber] = useState(0);
    const numberValue = {
        number,
        setNumber,
    };

    return (
        <PostContext.Provider value={{postValue, numberValue, userPostValue}}>
            {props.children}
        </PostContext.Provider>
    );
};

export default PostContextProvider;
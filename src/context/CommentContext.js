import React, { useState, createContext } from 'react';

export const CommentContext = createContext();

const CommentContextProvider = (props) => {
    const [comment, setComment ] = useState([]);
    const commentValue = {
        comment,
        setComment,
    };

    console.log('comment', comment)

    return (
        <CommentContext.Provider value={commentValue}>
            {props.children}
        </CommentContext.Provider>
    );
};

export default CommentContextProvider; 
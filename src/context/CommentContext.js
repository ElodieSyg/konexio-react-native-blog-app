import React, { useState, CreateContext } from 'react';

export const CommentContext = CreateContext();

const CommentContextProvider = (props) => {
    const [comment, setComment ] = useState([]);
    const commentValue = {
        comment,
        setComment,
    };

    return (
        <CommentContext.Provider value={commentValue}>
            {props.children}
        </CommentContext.Provider>
    );
};

export default CommentContextProvider;
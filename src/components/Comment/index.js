import React from 'react';

import './style.css';

function Comment({ comment }) {
    return (
        <div className="comment">
            <img className="avatar" src={comment.author.avatar} alt="Avatar" />
            <p className="text">
                <strong>{comment.author.name} </strong> 
                {comment.content}
            </p>
        </div>
    )
}

export default Comment;
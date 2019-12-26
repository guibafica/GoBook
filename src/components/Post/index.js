import React from 'react';

import './style.css';
import Comment from '../Comment';

function Post({ post }) {
    return (
        <div className="post">
            <div className="top">
                <img className="avatar" src={post.author.avatar} alt=""/>
                <div className="info">
                    <span className="user-name">{post.author.name}</span>
                    <span className="post-date">{post.date}</span>
                </div>
            </div>
            <p className="content">{post.content}</p>
            {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    )
}

export default Post;
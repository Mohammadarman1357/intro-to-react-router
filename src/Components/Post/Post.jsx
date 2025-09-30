import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div style={{ border: '2px solid red' }}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show Detalis</button>
            </Link>
            <button onClick={handleNavigate}>Details of : {id}</button>
        </div>
    );
};

export default Post;
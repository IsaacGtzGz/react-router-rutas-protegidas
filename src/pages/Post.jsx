import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) return <div className="alert alert-info">Loading...</div>;
    if (!post) return <div className="alert alert-danger">Post not found</div>;

    return (
        <>
            <h1>
                {post.id} - {post.title}
            </h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post
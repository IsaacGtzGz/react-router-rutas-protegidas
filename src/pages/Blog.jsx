import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (loading) return <div className="alert alert-info">Loading...</div>;

    console.log(blogs);

    return (
        <ul>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <li key={blog.id}>
                        { }
                        <Link to={`/blog/${blog.id}`}> {blog.title} </Link>
                    </li>
                ))
            ) : (
                <li>No blog found</li>
            )}
            { }
        </ul>
    );
};

export default Blog;

export const loaderBlogs = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await data.json();
    return { blogs };
};
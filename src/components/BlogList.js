import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom';
import Blog from './Blog';

const UsersList = () => {
    const { index } = useParams()
    const blogs = useSelector(state => state.blogs.blogs)
    const [listedBlogs, setListedBlogs] = useState()
    useEffect(() => {
        setListedBlogs(blogs.slice(0 + 6 * index, 6 + 6 * index))
    }, [index, blogs])

    return (
        <>
            {listedBlogs !== undefined ?
                <div >
                    <h1>Blog list</h1>
                    <div className='blogs-grid'>
                        {listedBlogs.map(blog => <Blog key={blog.id} id={blog.id} name={blog.name} title={blog.title} body={blog.body} date={blog.date} reactions={blog.reactions} reactionsButton={blog.reactionsButton} />)}
                    </div>
                    <div className='pagination'>
                        <Link to={`/${parseInt(index) - 1}`}><button disabled={parseInt(index) === 0}>&#60;</button></Link>
                        <Link to={`/${parseInt(index) + 1}`}><button disabled={parseInt(index) === Math.ceil(blogs.length / 6) - 1}>&#62;</button></Link>
                    </div>
                </div>
                : <p>Error</p>}
        </>
    )
}

export default UsersList
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { removeBlog, editText, editTitle } from '../store/blogs-slice';
import { Reactions } from './Reactions';

const SingleBlog = () => {
    const { id } = useParams()
    const blogs = useSelector(state => state.blogs.blogs)
    const dispatch = useDispatch()
    const titleRef = useRef();
    const textRef = useRef();
    const [blog, setBlog] = useState(null)
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        setBlog(blogs.find(b => b.id === parseInt(id)))
    }, [id, blogs])

    const sbmtHandler = (event) => {
        event.preventDefault();
        if (titleRef.current.value !== blog.title && titleRef.current.value !== "" ){
            dispatch(editTitle({ id: blog.id, title: titleRef.current.value}))}
        if (textRef.current.value !== blog.body && textRef.current.value !== "")
            dispatch(editText({id: blog.id, body: textRef.current.value}))
        setBlog({ ...blog, date: new Date().toLocaleDateString("uk-Uk") })
        setEdit(false)
    }

    return (
        <>
            {blog != null ?
                <div>
                    {edit ?
                        <>
                            <h1>Edit blog</h1>
                            <div className='add-blog-container'>
                                <form onSubmit={sbmtHandler}>
                                    <div className='input-flex'>
                                        <label>Title</label>
                                        <input ref={titleRef} defaultValue={blog.title} />
                                    </div>
                                    <div className='input-flex'>
                                        <label>Body </label>
                                        <input ref={textRef} defaultValue={blog.body} />
                                    </div>
                                    <div className='button-flex'>
                                        <button type="submit">Confirm</button>
                                        <button onClick={() => setEdit(false)}>Quit</button>
                                        {<Link to="/0"><button onClick={() => dispatch(removeBlog(blog.id))}>Remove Blog</button></Link>}
                                    </div>
                                </form>
                            </div>
                        </>
                        :
                        <div>
                            <h1> {blog.title}</h1>
                            <div className='single-news-content'>
                                <p className='singleblog-text'> {blog.body}</p>

                                <div className='single-blog-date'>
                                    <p> {blog.name} </p>
                                    <p> {blog.date}</p>
                                </div>
                                <button className='single-blog-edit' onClick={() => setEdit(true)}> Edit text</button>
                            </div>
                        </div>}

                        {<Reactions blog = {blog} />}
                </div>
                : <p>Blog has been deleted return to <Link to={`/`}>home page</Link></p>
            }
        </>
    )
}

export default SingleBlog
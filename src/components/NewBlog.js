import { React, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addBlog } from '../store/blogs-slice';
import { getNames, misingNumInSeq } from '../Utils'; 

const NewBlog = () => {
    const blogs = useSelector(state => state.blogs.blogs)
    const dispatch = useDispatch();
    const names = getNames(blogs)
    const [name, setName] = useState(names[0])
    const [adding, setAdding] = useState(true);
    const titleRef = useRef();
    const textRef = useRef();
    const nameItem = (X) => {
        return <option key={X}>{X}</option>;
    };

    const nameChangeHendler = (event) => {
        setName(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let data = {
            userId: blogs.find(blog => blog.name === name).userId,
            id: misingNumInSeq(blogs.map(blog => blog.id).sort(function (a, b) { return a - b; })),
            body: textRef.current.value,
            title: titleRef.current.value,
            name: name,
            date: new Date().toString(),
            reactions: {
                like: 0,
                love: 0,
                haha: 0,
                sad: 0,
                angry: 0
            },
            reactionsButton: false
        }
        dispatch(addBlog(data))
        setAdding(false)
    }

    return (
        <>
            <h1>Add blog</h1>
            {adding ?
                <div className='add-blog-container'>
                    <form onSubmit={submitHandler}>
                        <div className='input-flex'>
                            <label>Title </label>
                            <input ref={titleRef} />
                        </div>
                        <div className='input-flex'>
                            <label>Body </label>
                            <input ref={textRef} />
                        </div>
                        <div className='input-flex'>
                            <label>Select name:</label>
                            <select onChange={nameChangeHendler} value={name}>{names.map(nameItem)}</select>
                        </div>

                        <button type='submit'>Confirm</button>
                    </form>
                </div> :
                <p className='succes'>Adding blog completed</p>
            }
        </>
    )
}

export default NewBlog
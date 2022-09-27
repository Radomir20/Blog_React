import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import BlogList from './components/BlogList';
import SingleBlog from './components/SingleBlog';
import { addBlogs } from './store/blogs-slice';
import { getPosts, getUsers } from "./api/axios.js"
import { useDispatch } from "react-redux"
import NewBlog from './components/NewBlog';
import "./App.css"


function randomDate() {
  let start = new Date("January 1, 2022 00:00:00")
  let end = new Date()
  let rand = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return rand.toLocaleDateString("uk-Uk")
}
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const posts = await getPosts();
        const users = await getUsers();
        const data = posts.map(post => {
          return {
            userId: post.userId,
            id: post.id,
            body: post.body + post.body + post.body + post.body + post.body + post.body,
            title: post.title,
            name: users.filter(user => user.id === post.userId)[0].name,
            date: randomDate(),
            reactions: {
              like: Math.floor(Math.random() * 100) + 1,
              love: Math.floor(Math.random() * 100) + 1,
              haha: Math.floor(Math.random() * 100) + 1,
              sad: Math.floor(Math.random() * 100) + 1,
              angry: Math.floor(Math.random() * 100) + 1
            },
            reactionsButton: false
          }
        })
        dispatch(addBlogs(data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [dispatch])

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/0">All blogs</Link>
          <Link to="/new_blog"> New blog</Link>
        </nav>
        <Routes>
          <Route path="/:index" element={<BlogList />} />
          <Route path="/single_blog/:id" element={<SingleBlog />} />
          <Route path="/new_blog" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { blogs: [] }

export const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        addBlogs(state, { payload }) {
            state.blogs = payload
        },
        addBlog(state, { payload }){
            state.blogs.unshift(payload)
        },
        removeBlog(state, { payload }) {
            state.blogs = state.blogs.filter(blog => blog.id !== payload)
        },
        increaseReaction(state, { payload }) {
            const temp = state.blogs.find(blog => blog.id === payload[0])
            let index = state.blogs.indexOf(temp)
            switch (payload[1]) {
                case "like":
                    temp.reactions.like += 1
                    break
                case "love":
                    temp.reactions.love += 1
                    break
                case "haha":
                    temp.reactions.haha += 1
                    break
                case "sad":
                    temp.reactions.sad += 1
                    break
                case "angry":
                    temp.reactions.angry += 1
                    break
                default:
                    return
            }
            temp.reactionsButton = true
            state.blogs[index] = temp
        },
        editText(state, {payload}){
            const temp = state.blogs.find(blog => blog.id === payload[0])
            let index = state.blogs.indexOf(temp)
            temp.body = payload[1];
            temp.date = new Date().toLocaleDateString("uk-Uk") 
            state.blogs[index] = temp;

        },
        editTitle(state, {payload}){
            const temp = state.blogs.find(blog => blog.id === payload[0])
            let index = state.blogs.indexOf(temp)
            temp.title = payload[1];
            temp.date = new Date()
            state.blogs[index] = temp;

        }
    }
}
)

export const { addBlogs, addBlog, removeBlog, increaseReaction, editText, editTitle } = blogsSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = { blogs: [] }

export const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        addBlogs(state, { payload }) {
            state.blogs = payload
        },
        addBlog(state, { payload }) {
            state.blogs.unshift(payload)
        },
        removeBlog(state, { payload }) {
            state.blogs = state.blogs.filter(blog => blog.id !== payload)
        },
        increaseReaction(state, { payload }) {
            const temp = state.blogs.find(blog => blog.id === payload.id)
            if (temp !== undefined) {
                switch (payload.reaction) {
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
            }
            temp.reactionsButton = true
            state.blogs[payload.id] = temp
        },
        editText(state, { payload }) {
            const temp = state.blogs.find(blog => blog.id === payload.id)
            if (temp !== undefined) {
                temp.body = payload.body;
                temp.date = new Date().toString()
                state.blogs[payload.id] = temp;
            }

        },
        editTitle(state, { payload }) {
            const temp = state.blogs.find(blog => blog.id === payload.id)
            if (temp !== undefined) {
                temp.title = payload.title;
                temp.date = new Date().toString()
                state.blogs[payload.id] = temp;
            }
        }
    }
}
)

export const { addBlogs, addBlog, removeBlog, increaseReaction, editText, editTitle } = blogsSlice.actions
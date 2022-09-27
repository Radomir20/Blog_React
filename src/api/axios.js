import axios from "axios"

export const axiosInstance = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" })

export const getUsers = async () =>{
    const response = await axiosInstance.get("/users")
    return response.data
}
export const getPosts = async () =>{
    const response = await axiosInstance.get("/posts")
    return response.data
}
import axios, {AxiosResponse} from "axios";
import {IPosts} from "../model/posts/IPosts";

const axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{"Content-Type": "application/json"}
});

const getPosts = (): Promise<AxiosResponse<IPosts[]>> => {
    return axiosInstance.get('/posts');
}

const getPostsOfUser = (userId:number): Promise<AxiosResponse<IPosts[]>> => {
    return axiosInstance.get('/posts?userId=' + userId);
}

const getPost = async (id:number): Promise<AxiosResponse<IPosts>> => {
    return await axiosInstance.get('/post');
}

export {
    getPost,
    getPosts,
    getPostsOfUser
}
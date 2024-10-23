import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IResopnseUsersModel} from "../models/IResopnseUsersModel";
import {IResopnsePostsModel} from "../models/IResopnsePostsModel";

// todo users service
let axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
});
export const userService = {
    getUsers:async():Promise<IUser[]>=>{
        return (await axiosInstance.get<IResopnseUsersModel>('/users')).data.users
    }
}

// todo post service
export const postService = {
    getPostOfUser:async (id:number):Promise<IPost[]> => {
       let axiosResponse = await axiosInstance.get<IResopnsePostsModel>('/posts/user/'+ id);
       return axiosResponse.data.posts
    }
}

// export const postService = {
//     getPostsOfUser: async (id: number): Promise<IPost[]> => {
//         let axiosResponse = await axiosInstance.get<IResponsePostsModel>('/posts/user/' + id);
//         return axiosResponse.data.posts
//
//     }
// }
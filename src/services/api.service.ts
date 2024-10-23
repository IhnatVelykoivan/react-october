import axios from "axios";
import {IUser} from "../models/IUser";
import {ITodo} from "../models/ITodo";

// export const getUsers = async ():Promise<IUser[]> => {
//     let response:IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
//
//     return response;
// }
// export const getTodosOfUser = async (user:IUser) => {
//     let response:ITodo[]  = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
//         .then(value => value.json());
//
//     return response;
// }


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {"Content-Type":"application/json"} // charset=utf-8
});

axiosInstance.interceptors.request.use((request)=>{
    console.log(request.method)
    if (request.method === 'get'){
        request.headers.set('Content-Type', 'application/json')
    }

    return request;
})
export const getUsers = async ():Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUser[]>('/users');
    console.log(axiosResponse.data)
    return axiosResponse.data;
}
export const getTodosOfUser = async (user:IUser) => {
    let response = await axiosInstance.get<ITodo[]>('/todos',{
        params:{userId:user.id}
    })
    return response.data;
}


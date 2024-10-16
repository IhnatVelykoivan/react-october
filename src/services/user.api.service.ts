import IUser from "../model/user/IUser";
import axios, {AxiosResponse} from "axios";



//vanilla
// const baseUrl = 'https://jsonplaceholder.typicode.com/users';
//
// const getUsers = (): Promise<IUser[]> => {
//     return fetch(baseUrl)
//         .then(value => value.json())
// }
// const getUser = async (id:number): Promise<IUser> => {
//     return await fetch(baseUrl + '/' + id)
//         .then(value => value.json());
// }
// export {
//     getUsers,
//     getUser
// }

//modify with axios package
const axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{"Content-Type": "application/json"}
});

const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return axiosInstance.get('/users');
}

const getUser = async (id:number): Promise<AxiosResponse<IUser>> => {
    return await axiosInstance.get('/users/' + id)
}

export {
    getUsers,
    getUser
}
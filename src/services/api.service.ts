import axios from "axios";
import {IProduct} from "../models/IProduct";
import {BaseResponseType} from "../models/BaseResponseType";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});
export const getProduct = async (id:string):Promise<IProduct>=>{

    // let {data} = await  axiosInstance.get('/product/' + id);  //destructuring asnyc func for variable assignment and getting info
    // return data;

    return (await axiosInstance.get<IProduct>('/product/' + id)).data //analogy func but another syntax*
}
export const getProducts = async ():Promise<IProduct[]>=>{
    let {data:{products}} = await axiosInstance.get<BaseResponseType & {products:IProduct[]}>('/products');
    return products;
}

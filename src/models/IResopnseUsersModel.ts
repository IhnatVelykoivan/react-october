import {IUser} from "./IUser";

export interface IResopnseUsersModel {
    users: IUser[],
    total: number,
    skip: number,
    limit: number
}
import {IPost} from "./IPost";

export interface IResopnsePostsModel {
    posts: IPost[],
    total: number,
    skip: number,
    limit: number
}
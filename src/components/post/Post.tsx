import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
type PostProp = {
    item:IPost;
}
const Post:FC<PostProp> = ({item}) => {
    return (
        <div>
            {item.title}
        </div>
    );
};

export default Post;
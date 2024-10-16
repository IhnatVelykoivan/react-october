import React, {FC} from 'react';
import {IPosts} from "../../model/posts/IPosts";

const PostComponent:FC<IPosts> = ({userId,id,title,body}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostComponent;
import React, {FC, ReactNode} from 'react';
import {IPosts} from "../../model/posts/IPosts";
import PostComponent from "../postComponent/PostComponent";

type IProps = {posts: IPosts[]} & {children?: ReactNode}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post =>
                    (<PostComponent
                        key={post.id}
                        id={post.id}
                        body={post.body}
                        title={post.title}
                        userId={post.userId}
                    />)
                )
            }
        </div>
    );
};

export default PostsComponent;
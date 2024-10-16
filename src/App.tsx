import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/user/IUser";
import UserComponent from "./components/userComponent/UserComponent";
import {getUsers} from "./services/user.api.service";
import PostsComponent from "./components/postsComponent/PostsComponent";
import {IPosts} from "./model/posts/IPosts";
import {getPosts, getPostsOfUser} from "./services/posts.api.service";


const App:FC = () => {

    const [users,setUsers] = useState<IUser[]>([]);
    const [posts,setPosts] = useState<IPosts[]>([])
    const [userId,setUserId] = useState<number>(0);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value.data);
            })
        return () => {
            console.log('end');
        }
    },[]);

    useEffect(() => {
        // console.log('got it')
        if (userId !== 0) {
            getPostsOfUser(userId)
                .then(value => setPosts(value.data));
        }
    }, [userId]);

    const clickHandler = (id:number) => {
        setUserId(id);
    }

    return(
        <>
            {
                users.map(
                    ({username,id,email}) => <UserComponent
                        email={email}
                        id={id}
                        username={username}
                        clickHandler={clickHandler}
                    />
                )
            }
            <div><PostsComponent posts={posts}/></div>
        </>
  );
}

export default App;

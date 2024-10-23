import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type UserProps={
    item:IUser;
    lift:(id:number)=>void
}
const User:FC<UserProps>= ({item,lift}) => {
    return (
        <div key={item.id}>
            {item.email}
            <button onClick={()=>{
                lift(item.id);
            }}>fetch post</button>
        </div>
    );
};

export default User;
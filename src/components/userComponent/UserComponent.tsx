import React, {FC, ReactNode} from 'react';
import IUser from "../../model/user/IUser";

type UserComponentWithChildren<T> = T
    & {children?: ReactNode}
    & {clickHandler:(id:number) => void};
const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id,email,username,clickHandler}) => {
    return (
        <div>
            {id}-{email}-{username}
            <button onClick={() =>{
                clickHandler(id);
            }}>chose</button>
        </div>
    );
};

export default UserComponent;
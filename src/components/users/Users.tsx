import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {userService} from "../../services/dummyjson.api.services";
import User from "../user/User";

type UserProps = {
    lift:(id:number) => void
}
const Users:FC<UserProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const getUsers = async() =>{
            // let userResponse = await userService.getUsers();
            setUsers(await userService.getUsers());
        }
        getUsers()


    }, []);
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} lift={lift}/>)
            }
        </div>
    );
};

export default Users;
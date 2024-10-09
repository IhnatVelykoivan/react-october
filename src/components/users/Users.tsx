import './Users.css'

import React from 'react';
import {users} from "../data";
import {UserModel} from "../../models/UserModel";
import User from "../user/User";

const Users = () => {
    return (
        <div>
            {
                users.map(({name,age,status}:UserModel) => <li><User name={name} age={age} status={status}/></li>)
            }
        </div>
    );
};

export default Users;
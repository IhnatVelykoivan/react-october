import React, {FC} from 'react';
import {UserModel} from "../../models/UserModels";

const User:FC<UserModel> = ({name,age,status}) => {
    return (
        <>
            {name} {age} {status.toString()}
        </>
    );
};

export default User;

// fragment
import React from 'react';
import {useParams} from "react-router-dom";

const SingleContactPage = () => {

    let {id} = useParams();
    return (
        <div>
            SingleContactPage {id}
        </div>
    );
};

export default SingleContactPage;
import React, {FC} from 'react';
import './Character.css'
interface IProps{
    name:string;
    img: string;
    gender: string;
    status: string;
    species: string;

    children?: React.ReactNode;
}

const Character:FC<IProps> = (props) => {
    let {children,status,img,species,gender,name} = props;
    return (
        <div>
            <h2 className={'title'}>{name}</h2>
            <img src={img} alt={name}/>
            <ul>
                <li>gender:{gender}</li>
                <li>status:{status}</li>
                <li>species:{species}</li>
            </ul>
            {
                children
            }

        </div>
    );
};

export default Character;
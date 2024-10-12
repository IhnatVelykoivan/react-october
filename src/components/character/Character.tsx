import React, {FC, ReactNode} from 'react';
import styles from './Character.module.css'

interface IProps {
    nameCharacter : string;
    imageCharacter: string;
    // description: string;
    // children ?: ReactNode
}
// interface IProps2 {***
//     nameCharacter : string;
//     imageCharacter: string;
//     // description: string;
//     // children ?: ReactNode
// }
// example for components with generic**
type PropsWithChildren<T> = T & {children ?: ReactNode};

                                   //   |
                          //1,23,465... V    place*
const Character:FC<PropsWithChildren<IProps>> = ({nameCharacter,imageCharacter,children}) => {
    return (
        <div>
            <h2>{nameCharacter}</h2>
            <img className={styles.target} src={imageCharacter} alt={nameCharacter}/>
            <p>{children}</p>
        </div>
    );
};

export default Character;
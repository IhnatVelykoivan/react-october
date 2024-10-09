import React, {FC} from 'react';
interface IProps {
    place:string;
}

const Xxx:FC<IProps> = ({place}) => {
    return (
        <div>
           thug components in da {place}
        </div>
    );
};

export default Xxx;
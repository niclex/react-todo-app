import React from 'react';
import './no-task-block.css';
import sad_dog from '../../../images/sad_dog.png';


const NoTaskBlock = () => {
    return (
        <div className="no-task-block">
            <img
                src={sad_dog}
                draggable={false}
                alt="Sad doggy"
            />
            <div>
                You haven't got any tasks right now.<br />
                Let's create one?
            </div>
        </div>
    );
};

export default NoTaskBlock;

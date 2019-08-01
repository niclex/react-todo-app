import React from 'react';
import './task-list.css';
import Task from './task/task';
import NoTaskBlock from './no-task/no-task-block';


const TaskList = ({ list, removeTask, editTask }) => {
    return (
        <ul className="task-list">
            {
                list.map((text, idx) => (
                    <Task
                        key={idx}
                        text={text}
                        removeTask={removeTask}
                        editTask={editTask}
                    />
                ))
            }
            { list.length === 0 && <NoTaskBlock /> }
        </ul>
    );
};

export default TaskList;

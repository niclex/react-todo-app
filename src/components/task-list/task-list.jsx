import React from 'react';
import './task-list.css';
import Task from './task/task';
import NoTaskBlock from './no-task/no-task-block';


const TaskList = ({ list, removeTask, editTask, markAsDone }) => {
    return (
        <>
            <ul className="task-list">
                {
                    list.map((task, idx) => (
                        <Task
                            key={idx}
                            task={task}
                            removeTask={removeTask}
                            editTask={editTask}
                            markAsDone={markAsDone}
                        />
                    ))
                }
            </ul>
            { list.length === 0 && <NoTaskBlock /> }
        </>
    );
};

export default TaskList;

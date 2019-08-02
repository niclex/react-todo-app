import React from 'react';
import './task.css';
import delete_icon from '../../../images/delete_icon.png';
import edit_icon from '../../../images/edit_icon.png';


const Task = ({ task, removeTask, editTask, markAsDone }) => (
    <li
        className="task-list__task"
        onDoubleClick={markAsDone}
        title="Double click to mark as done"
    >
        <div
            className="task-text"
            style={{
                textDecoration: task.isDone === 'yes' ? 'line-through' : 'none'
            }}
        >{task.text}</div>

        <img
            src={edit_icon}
            alt="edit"
            onClick={editTask}
            title="Edit task"
            draggable={false}
        />
        <img
            src={delete_icon}
            alt="delete"
            onClick={removeTask}
            title="Remove task"
            draggable={false}
        />
    </li>
);

export default Task;

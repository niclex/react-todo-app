import React from 'react';
import './input-field.css';


const InputField = ({ submitTask }) => {
    return (
        <div className="input-wrapper">
            <input
                onKeyDown={submitTask}
                id="task-input"
            />
            <br />
            <label htmlFor="task-input">
                <small>Click Enter to submit a task.</small>
            </label>
        </div>
    );
};


export default InputField;

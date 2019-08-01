import React from 'react';
import './input-field.css';


const InputField = ({ submitTask }) => {
    return (
        <div className="input-wrapper">
            <input onKeyDown={submitTask} />
            <br />
            <small>Click Enter to submit a task.</small>
        </div>
    );
};


export default InputField;

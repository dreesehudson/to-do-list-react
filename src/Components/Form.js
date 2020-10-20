import React from 'react';

function Form(props) {

    return (
        <div className="row justify-content-center">
            <input 
                value={props.input}
                onChange={props.changeHandler}
                placeholder="Task Name">

            </input>
            <button
                className="btn btn-primary btn-sm"
                onClick={props.addItem}
            >
                +
            </button>
        </div>
    );

}

export default Form;

/* Notepad


Task Name    |  Add


*/
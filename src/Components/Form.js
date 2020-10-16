import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

    }

    updateInput(key, value) {
        //update react status
        this.setState({
            [key]: value
        });
    }

    //applies as onClick to the Submit Button
    addItem() {
        //object to be added to array of tasks
        const newTask = {
            id: 1,//timeStamp
            value: this.props.newTask.value
        };

        //proxy of current list of items
        const tasks = [...this.props.tasks];

        //add new object to 
        tasks.unshift(newTask);

        //take form input {name} and pass it to the [tasks] within the App Component
        this.setState({
            tasks,        //updates [tasks] from proxy that we have made above
            newTask: ""    //clear textInput for next entry
        });
    }

    inputTextHandler() {
        //update this.state.textInput with each keystroke
        this.setState()
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={this.props.newItem}
                    onChange={e => this.updateInput("newTask", e.target.value)}
                >
                </input>
                <button
                    onClick={this.addItem}
                >+
                </button>
            </>
        );

    }

}



export default Form;



/* Notepad


Task Name    |  Add


HTML for Created Items
<div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Checkbox for following text input">
    </div>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with checkbox">
</div>



*/
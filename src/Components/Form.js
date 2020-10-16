import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.addItem = this.addItem.bind(this);
        this.updateInput = this.updateInput.bind(this);
    

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
            value: this.state.newTask
        };
                
        //add new object to 
        let proxy = this.props.tasks;
        proxy.unshift(newTask.value);
        this.setState({ tasks: proxy});
        
        // this.setState({newTask});

    }

    inputTextHandler() {
        //update this.state.textInput with each keystroke
        this.setState()
    }

    render() {
        return (
            <>
                <input
                    id="form-input"
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
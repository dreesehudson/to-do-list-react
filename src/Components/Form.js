import React, { Component } from 'react';



class Form extends Component {
    constructor() {
        super();
        this.priorityButtons = [
            {
                color: "🔴",
                level: 'High'
            },
            {
                color: "🟡",
                level: 'Mid'
            },
            {
                color: "🟢",
                level: 'Low'
            }];
        this.state = {
            taskID: null,
            textInput: "",
            priorityInput: "",
            completed: false,
            visible: true
        };
    }

    render() {
        return (
            <>
                <form className="container-fluid">
                    <div class="form-row align-items-center">
                        <div class="col px-0">
                            <input
                                className="form-control"
                                placeholder="Task Name"

                            >
                            </input>
                        </div>
                        <div class="col px-0">
                            <input
                                className="form-control"
                                placeholder="red"

                            >
                            </input>
                        </div>

                        {/* loop to generate priority buttons */}
                            {/* for (let i = 0; i < 3; i++ ){
                            <div>
                                <input
                                    className="form-control"
                                    placeholder={this.priorityButtons.color}

                                />

                            </div>
                        } */}
                        <button
                            className="btn btn-primary col"
                            //onClick=addItem()
                        >
                            Add
                        </button>
                    </div>
                </form>
            </>
        );

    }
    addItem() {
        //applies to the Submit Button
        //take form input {name, priority} and pass it to the [tasks] within the List object
    }


}

export default Form;



/* Notepad
Priority Types:
    High: 🔴
    Mid: 🟡
    Low: 🟢

Task Name  |  PriorityPicker  |  Add


HTML for Created Items
<div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="checkbox" aria-label="Checkbox for following text input">
    </div>
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>



*/
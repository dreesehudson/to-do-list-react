import React, { Component } from 'react';



class Form extends Component {
    constructor() {
        super();
        this.priorityButtons = [
            {
                color: "🔴",
                level: 'high-priority'
            },
            {
                color: "🟡",
                level: 'mid-priority'
            },
            {
                color: "🟢",
                level: 'low-priority'
            }];
        this.state = {
            textInput: "",
        };
    }

    render() {
        return (
            <>
                <form>
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
                                placeholder="High"

                            >
                            </input>
                        </div>
                        <div class="col px-0">
                            <input
                                className="form-control"
                                placeholder="Med"

                            >
                            </input>
                        </div>
                        <div class="col px-0">
                            <input
                                className="form-control"
                                placeholder="Low"

                            >
                            </input>
                        </div>
                        <button
                            className="btn btn-primary col"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </>
        );

    }
    addItem() {
        //take form input {name, dueDate, priority} and create Item
    }
}

export default Form;



/*
Priority Types:
    Past Due: ❗️
    High: 🔴
    Mid: 🟡
    Low: 🟢

Task Name  |  Due Date  |  Priority  |  Add


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
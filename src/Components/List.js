import React, { Component } from 'react';



class List extends Component {
    constructor() {
        super()
        this.state = {
            taskID: null,
            textInput: "",
            priorityInput: "",
            completed: false,
            visible: true
        }

        //array is populated from Form Object
        this.tasks = [
            //          
            //           {
            //            taskID: #,
            //            textInput: "",
            //            priorityInput: "",
            //            completed: false
            //            visible: true

            //           }
            //             
        ];
    }



    render() {
        return (
            <>
            <div className="container-fluid">
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                // onChange=completeItem() 
                                />
                            </div>
                        </div>
                        <div className="list-group-text">
                            Item Number 1
                        </div>
                        <button
                            className="btn btn-light"
                        // onClick=deleteItem()
                        >
                            &times;
                        </button>
                    </li>
                </ul>
            </div>
            </>
        )
    }

    removeItem() {
        //delete item from list of available items
    }
    completeItem() {
        //change state.completed false to true
        //remove completeItem() from checkbox onClick
        //add activateItem() to checkbox onClick

    }
    activateItem() {
        //change state.completed true to false
        //remove activateItem() from checkbox onClick
        //add completeItem() to checkbox onClick
    }
}

export default List;



/*
Priority Types:
    High: 🔴
    Mid: 🟡
    Low: 🟢

Checkbox  |  Task Name Label  |  Priority Label  |  Delete






*/
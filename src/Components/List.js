import React, {Component} from 'react';



class List extends Component {
    constructor() {
       super();

    }    
    
    state = {
        textInput: "",
    }

    render() {
        return (
            <>

            </>
        );

    }

    removeItem() {
        //delete item from list of available items
    }
    completeItem() {
        //change state of Item from active to completed
    }
    activateItem() {
        //change state of Item from completed to active
    }
}

export default List;



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
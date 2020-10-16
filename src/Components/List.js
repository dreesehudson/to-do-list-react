import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)
    }

    deleteItem(id) {
        //copy of tasksList
        const tasks = [...this.props.tasks];

        const updatedList = tasks.filter(item => item.id !== id);

        this.setState({ tasks: updatedList });
    }


    render() {
        return (
            <ul>
                {this.props.tasks.map(item => {
                    return (
                        <li key={item.id}>
                            {item.value}
                            <button
                                onClick={() => this.deleteItem(item.id)}
                            >&times;</button>
                        </li>

                    )
                }
                )

                }
            </ul >
        )
    }
}



// completeItem() {
//     //change state.completed false to true
//     //this.tasks[event.target].completed = true;
//     //remove completeItem() from checkbox onClick
//     //add activateItem() to checkbox onClick
// }
// activateItem() {
//     //change state.completed true to false
//     //this.tasks[event.target].completed = false;
//     //remove activateItem() from checkbox onClick
//     //add completeItem() to checkbox onClick
// }


export default List;









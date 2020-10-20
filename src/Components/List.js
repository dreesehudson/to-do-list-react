import React from 'react';

function List(props) {
    let itemsToRender;
    switch (this.props.currentFilter) {
        case 'active':
            itemsToRender = this.props.tasks.filter(item => (item.completed === false));
            break;
        case 'completed':
            itemsToRender = this.props.tasks.filter(item => (item.completed === true));
            break;
        default:
            itemsToRender = this.props.tasks;
            break;
    }

    return (
        <>
            <ul className="list-group mt-2 mx-auto row">
                {this.itemsToRender.map((item) =>
                    <li key={this.item.id}>
                        <div className="list-group-item mb-3">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={this.item.id}
                                />
                                <label
                                    //if item.completed is true, strike-through the item
                                    style={{ textDecoration: ((item.completed) ? 'line-through' : '') }}
                                    className="form-check-label"
                                >
                                    {item.name}
                                </label>
                                <button
                                    data-id={item.id}
                                    className="btn btn-sm btn-danger my-auto float-right"
                                    onClick={() => this.deleteItem(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>


        </>

    );
}


export default List;









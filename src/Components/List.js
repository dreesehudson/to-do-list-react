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



        </>

    );
}


export default List;









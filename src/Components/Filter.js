import React from 'react';

function Footer(props) {


    return (
        <div className="container-fluid text-center mt-2">
            <div className="btn-group btn-group-sm" role="group" aria-label="...">
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => props.setFilter('all')}
                >
                    All
                </button>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => props.setFilter('active')}

                >
                    Open
                </button>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => props.setFilter('completed')}

                >
                    Completed
                </button>
            </div>
            <div className="btn-group btn-group-sm mt-2" role="group" aria-label="...">
                <button
                    className="btn btn-success btn-sm"
                    onClick={props.markAllComplete}
                >
                    Mark All Completed
                </button>
                <button
                    className="btn btn-warning btn-sm"
                    onClick={props.markAllActive}

                >
                    Mark All Active
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={props.deleteAllTasks}

                >
                    Delete All Tasks
                </button>
            </div>
            <div className="row mt-1">
                {/* <p className="col-6 float-left ml-0">Active Tasks: {props.countActive}</p>
                <p className="col-6 float-right mr-0">Completed Tasks: {props.countCompleted}</p> */}
            </div>
        </div>
    )
}



export default Footer;


// Notepad
// Remaining Active Task Count || Filter: All | Active | Completed || Completed Task Count: 
// 
// 
// 
// 
// - Filter Options
// - All
// - Show Active and Completed Tasks
// - Active Only
// - Show Active Tasks
// - Hide Completed Tasks
// - Completed Only
// - Hide Active Tasks
// - Show Completed Tasks
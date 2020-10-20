import React from 'react';

function Footer(props) {


    return (
        <div className="container-fluid text-center mt-2">
            <div className="btn-group btn-group-sm" role="group" aria-label="...">
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => props.showItems('all')}
                >
                    All
                </button>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => props.showItems('active')}

                >
                    Open
                </button>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => props.showItems('completed')}

                >
                    Completed
                </button>
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
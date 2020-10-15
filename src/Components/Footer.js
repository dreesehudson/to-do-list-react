import React, { Component } from 'react';

class Footer extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return(
        <div className="container-fluid">This is a footer</div>
        )
    }
    showAll(){
        //set visibility of all list items to true
    }

    showActive(){
        //ternary to set visibility of active list items to true, else false

    }

    showCompleted(){
        //ternary to set visibility of completed list items to true, else false

    }

    countActive(){
        //count list items in [tasks] with completed: false
    }

    countCompleted(){
        //count list items in [tasks] with completed: true
    }



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
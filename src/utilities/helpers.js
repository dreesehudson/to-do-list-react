import React, { useContext } from 'react';
import { useTasks } from './TasksContext'

const helpers = React.createContext({});

export const AppProvider = (props) => {
    const initialContext = helpers()
    return (
        <helpers.Provider value={initialContext}>
            {props.children}
        </helpers.Provider>
    )
}

export default helpers;
export const useHelpers = () => useContext(helpers);

function TasksHelper() {
    const { tasks, setTasks } = useTasks();

    //applies as onClick to the X Button on each task
    function deleteItem(id) {
        //remove item
        const filteredTasks = [...tasks].filter(item => (item.id !== id));
        //reset state to filtered list
        setTasks(filteredTasks)
    }

    function check(itemId) {
        //copy of current state
        let taskList = tasks;
        //index of object passed in
        let itemIndex = tasks.findIndex(item => item.id === itemId);
        //toggle completed value true/false
        taskList[itemIndex].completed = !taskList[itemIndex].completed;
        //set state with new completed state
        setTasks(taskList)
    }

    //applies as onClick to the checkbox on each task
    function markComplete(id) {
        //change data-* attribute to data-complete
        const filteredTasks = [...tasks].filter(item => (item.id === id));
        //reset state to filtered list
        setTasks(filteredTasks)
    }

    function markAllActive() {
        //proxy of state for current list of tasks.
        let taskList = [...tasks];
        taskList.map((item) => item.completed = false)
        //reset state to empty list
        setTasks(taskList)
    }

    function markAllComplete() {
        //proxy of state for current list of tasks.
        let taskList = [...tasks];
        taskList.map((item) => item.completed = true)
        //reset state to empty list
        setTasks(taskList)
    }

    function deleteAllTasks() {
        //reset state to empty list
        setTasks([]);
    }
    function countActive() {
        //count list items in [tasks] with completed: false
        const count = tasks.filter((item) => !item.completed);
        return count.length;
    }

    function countCompleted() {
        //count list items in [tasks] with completed: true
        const count = tasks.filter((item) => item.completed);
        return count.length;
    }

    return { deleteItem, check, markComplete, markAllActive, markAllComplete, deleteAllTasks, countActive, countCompleted };

}



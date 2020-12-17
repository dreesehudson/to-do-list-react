import React, { useState, useEffect, useContext } from 'react';

const TasksContext = React.createContext({});

export const AppProvider = (props) => {
    const initialContext = TasksHelper()
    return (
        <TasksContext.Provider value={initialContext}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksContext;
export const useTasks = () => useContext(TasksContext);

function TasksHelper() {
    const [tasks, setTasks] = useState([]);
    
    function saveTasks(newTasks){
        setTasks(newTasks)
        window.localStorage.setItem('tasks', newTasks)
    }

    useEffect(() => {
        const lsTasks = window.localStorage.getItem('tasks')
        if(lsTasks){
            setTasks(lsTasks)
        }
    }, [])
    
    return {
        tasks, saveTasks
    };

}
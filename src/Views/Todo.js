import React, {useEffect, useState} from 'react'
import TaskList from '../Components/Tasks'
import NewTask from '../Components/NewTask'


const Todo = () => {
    const [tasks, setTasks] = useState([]); 

    const markComplete = () => {
        setTasks(tasks.map(task => {
            if (task.checked && task.status === 'incomplete'){
                task.status = 'complete'
                task.checked = false
            }
            return task
        }))
    }

    const removeTasks = () => {
        setTasks(tasks.filter(task => !task.checked || task.status === 'incomplete'))
    }

    useEffect(() => {
        console.log('check state change of task list')
        console.log(tasks); 
    }, [tasks])

    return (
        <div className = 'container'>
            <div className = 'row'> 
                <div className = 'col d-flex justify-content-center mt-5'> 
                    <NewTask  tasks = {tasks} setTasks = {setTasks}/> 
                </div> 
            </div> 

            <div className = 'row'> 
                <div className = 'col m-5'> 
                    <TaskList status = 'incomplete' tasks = {tasks} /> 
                    <button onClick = {markComplete} className = 'btn btn-outline-dark mt-4'> Mark Complete </button> 
                </div> 
                <div className = 'col-md m-5'> 
                    <TaskList status = 'complete' tasks = {tasks} /> 
                    <button onClick = {removeTasks} className = 'btn btn-outline-dark mt-4'> Remove Tasks </button> 
                </div> 
            </div> 

        </div> 
    ); 
}


export default Todo; 



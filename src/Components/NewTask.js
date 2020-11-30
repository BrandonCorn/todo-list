import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'

const NewTask = (props) => {
    const [taskName, setTaskName] = useState('')

    const addTask = e => {
        e.preventDefault(); 
        props.setTasks([
            ...props.tasks, 
            {
                id: uuid(),
                name: taskName, 
                status: 'incomplete', 
                checked: false
            }
        ]) 
        setTaskName('') 
    }

    return (
        <div className="card" style = {{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">New Task</h5>
            <form onSubmit = {addTask}> 
                <input 
                    name = 'task' 
                    value = {taskName} 
                    placeholder = 'New Task'
                    type = 'text' 
                    onChange = {e => setTaskName(e.target.value)}> 
                </input>    
            </form> 
        </div>
    </div>
    )
}

export default NewTask; 
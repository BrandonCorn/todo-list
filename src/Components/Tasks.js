import React from 'react'

const TaskList = (props) => {
    const toggleChecked = task => task.checked = !task.checked

    return (
        <div> 
            <h3 className = 'text-center'> {props.status} </h3> 
            <ul className = 'list-group'> 
                {props.tasks.map(task => 
                    task.status === `${props.status}` ? 
                    (
                    <div className = 'list-group-item' key = {task.id}> 
                        <input type = 'checkbox' onChange = {() => toggleChecked(task)}/> <label> {task.name} </label> 
                    </div> 
                    ) 
                    : ('')
                )}
            </ul>
        </div> 
    )
}


export default TaskList; 
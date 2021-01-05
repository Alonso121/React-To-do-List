import React, {useState, useReducer} from 'react'
import "./App.css"
import Task from "./Task"

export const ACTIONS = {
    ADD_TASK: "add-task",
    COMPLETED: "completed-task",
    REMOVE_TASK: "remove-task"
}

function reducer(tasks, actions) {
    switch(actions.type) {
        case ACTIONS.ADD_TASK:
            return [...tasks, newTask(actions.payload.name)]
        case ACTIONS.COMPLETED:
            return tasks.map(task => {
                if(task.id === actions.payload.id) {
                   return { ...task, complete: !task.complete}
                }
                return task
            })
        case ACTIONS.REMOVE_TASK:
            return tasks.filter(task => task.id !== actions.payload.id)

        default:
            return tasks
        
    }
}

function newTask(name) {
    return {id: Date.now(), name: name, complete: false}
}

function App2() {

    const [name, setName] = useState('')
    const [tasks, dispatch] = useReducer(reducer, [])
    
    function nameHandler(e) {
        setName(e.target.value)
    }

    function createTask (e) {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TASK, payload: {name: name}});
        setName('')
    }

    return (
        <div>
            <form onSubmit={createTask}>
                <input type="text" value={name} onChange={nameHandler}/>
                <button type="submit">Create ToDo</button>
            </form>
            
                {tasks.map(task => {
                 return <Task key={task.id} task={task} dispatch={dispatch}/>
                })}
            
        </div>
    )
}

export default App2

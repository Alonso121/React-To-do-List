import React from 'react';
import {ACTIONS} from "./App"

const styles = {
    complete: {
        color: "red",
        textDecoration: "line-through",
        fontSize: "1rem"
    },
    incomplete: {
        color: "black",
        fontSize: "2rem"
    }
}

function Task({task, dispatch}) {
    return (
        <div>
            <span style={task.complete ? styles.complete : styles.incomplete}>{task.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.COMPLETED, payload: {id: task.id}})}>Mark As Complete</button>
            <button onClick={() => dispatch({type: ACTIONS.REMOVE_TASK, payload: {id: task.id}})}>Remove Task</button>
        </div>
    )
}

export default Task

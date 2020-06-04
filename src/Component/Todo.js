import React from 'react'
const Todo = (props) => {
    return (
        <li >
            <span className="material-icons">
                edit
        </span>
            {props.todo.title}
            <span className="material-icons">
                delete_outline
        </span>
        </li>
    )
}

export default Todo

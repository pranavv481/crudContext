import React, { useState, useContext } from 'react'
import shortid from 'shortid';
import { TodoContext } from "../Context/TodoProvider";

const TodoInput = () => {
    const todoContext = useContext(TodoContext)
    const [title, setTitle] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        const newTodo = {
            id: shortid.generate(),
            title,
            completed: false
        }
        todoContext.createTodo(newTodo)
        setTitle("")
    }
    return (


        <form onSubmit={(e) => onSubmit(e)}>
            <input
                className="todo-input"
                type="text"
                placeholder="Enter Your Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}

            />
        </form>
    )
}

export default TodoInput

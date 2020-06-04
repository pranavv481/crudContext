import React, { useState, useContext, useEffect, useRef } from 'react'
import shortid from 'shortid';
import { TodoContext } from "../Context/TodoProvider";

const TodoInput = () => {
    const inputRef = useRef()
    const todoContext = useContext(TodoContext)
    const [title, setTitle] = useState("")
    const { currentTodo, updatedTodo, createTodo } = todoContext

    useEffect(() => {
        if (todoContext.currentTodo != null) {
            setTitle(todoContext.currentTodo.title)
            inputRef.current.focus()
        }
    }, [todoContext.currentTodo])
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        if (todoContext.currentTodo != null) {
            //update todo
            const updatedTodo = {
                id: currentTodo.id,
                title,
                completed: todoContext.currentTodo.completed
            }
            todoContext.updateTodo(updatedTodo)
        }
        else {
            const newTodo = {
                id: shortid.generate(),
                title,
                completed: false
            }
            todoContext.createTodo(newTodo)
        }

        setTitle("")
        inputRef.current.blur()

    }
    return (


        <form onSubmit={(e) => onSubmit(e)}>
            <input
                className={`todo-input ${todoContext.currentTodo != null ? `update` : null} `}
                type="text"
                placeholder="Enter Your Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={inputRef}
            />
        </form>
    )
}

export default TodoInput

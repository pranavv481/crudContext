import React, { createContext, useReducer } from 'react';
import { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO, SET_TODO, COMPLETE_TODO } from "./Constant";
export const TodoContext = createContext()

const TodoReducer = (state, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id != action.payload)
            }

        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id == action.payload.id ? action.payload : todo)
            }

        case SET_TODO:
            return {
                ...state,
                currentTodo: action.payload
            }

        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id == action.payload ? Object.assign(todo, { completed: true }) : todo)
            }
        default:
            return state
    }
}

const TodoProvider = (props) => {
    const initialState = {
        todos: [{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        }],
        currentTodo: null
    }
    const [state, dispatch] = useReducer(TodoReducer, initialState)

    //action

    const createTodo = (todo) => {
        dispatch({
            type: CREATE_TODO,
            payload: todo
        })
    }

    const deleteTodo = (id) => {
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
    }

    const setTodo = (todo) => {
        dispatch({
            type: SET_TODO,
            payload: todo
        })
    }

    const completeTodo = (id) => {
        dispatch({
            type: COMPLETE_TODO,
            payload: id
        })
    }

    const updateTodo = (todo) => {
        dispatch({
            type: UPDATE_TODO,
            payload: todo
        })
    }

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            currentTodo: state.currentTodo,
            createTodo,
            deleteTodo,
            updateTodo,
            setTodo,
            completeTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider



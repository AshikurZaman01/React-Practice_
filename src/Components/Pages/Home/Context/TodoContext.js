import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            msg: "Learn React",
            check: false
        }
    ],

    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});


export const useTodo = () => {
    return useContext(TodoContext);
}

export const todoProvider = TodoContext.Provider
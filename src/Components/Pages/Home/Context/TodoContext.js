import { useContext } from "react";
import { createContext } from "react";


export const TodoContext = createContext({
    todos: [{
        id: 1,
        msg: 'TOdo msg',
        completed: false
    }],

    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleCompleted: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}


export const TodoProvider = TodoContext.Provider;
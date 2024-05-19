import React, { useState } from 'react';
import { TodoProvider } from './Context';

const Home = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {

    }

    const deleteTodo = (id) => {

    }

    const updateTodo = (id, todo) => {

    }
    return (
        <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
            <div>

            </div>
        </TodoProvider>
    );
};

export default Home;
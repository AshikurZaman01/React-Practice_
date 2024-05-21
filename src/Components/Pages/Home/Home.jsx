import { useEffect, useState } from "react";
import { TodoProvider } from "./Context/TodoContext";
import TodoForm from "./Context/TodoForm";
import TodoItem from "./Context/TodoItem";

const Home = () => {

    const [todos, setTodos] = useState([]);

    console.log(todos);

    const addTodo = (todo) => {

        const newTodo = ((prev) => {
            return [...prev, { id: Date.now().toString(), ...todo }]
        })
        setTodos(newTodo)
    }


    const updateTodo = (id, newTodo) => {
        const update = (prev) => prev.map((prevTodo) => prevTodo.id === id ? newTodo : prevTodo);
        setTodos(update);
    }

    const deleteTodo = (id) => {
        const delTodo = ((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
        setTodos(delTodo);
    }

    const toggleCompleted = (id) => {
        const toggle = (prev) => prev.map((prevTodo) => prevTodo === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
        setTodos(toggle)
    }

    useEffect(() => {
        const todosData = JSON.parse(localStorage.getItem('todos'));

        if (todosData && todosData.length > 0) {
            setTodos(todosData);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm></TodoForm>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        <TodoItem></TodoItem>

                    </div>
                </div>
            </div>
        </TodoProvider>
    );
};

export default Home;
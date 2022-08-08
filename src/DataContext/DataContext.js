import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [todoName, setTodoName] = useState('');
    const [todos,setTodos] = useState([]);

    console.log("todo",todoName)
    
    const AddTodo = (e)=>{
        e.preventDefault();
        setTodos([...todos, {name:todoName, complete: false}])
        setTodoName('')
    }

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos]);
    
    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    }, []);

    return <DataContext.Provider value={{ todoName, setTodoName, todos, setTodos, AddTodo }}>{children}</DataContext.Provider>
    
}

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [todoName, setTodoName] = useState('');
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    }, []);

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos]);


    const AddTodo = (e)=>{
        e.preventDefault();
        setTodos([...todos, {name:todoName, complete: false}])
        setTodoName('')
    }

    return <DataContext.Provider value={{ todoName, setTodoName, todos, setTodos, AddTodo }}>{children}</DataContext.Provider>
    
}

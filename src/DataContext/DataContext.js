import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [todos, setTodos] = useState([])
    const [todoName, setTodoName] = useState('');

    const AddTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name:todoName, complete: false}])
        setTodoName('');
    }


    return <DataContext.Provider value={{ todos, todoName, setTodoName, AddTodo }}>{children}</DataContext.Provider>
}

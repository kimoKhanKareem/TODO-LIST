import React, {useContext} from 'react'
import { DataContext } from '../DataContext/DataContext';

const FormInput = () => {
    const { setTodoName, todoName, AddTodo }= useContext(DataContext);


    return (
        <form autoComplete="off" onSubmit={AddTodo}>
            <input type="text" name="todos" id="todos" required placeholder='What need to be done?' value={todoName}
             onChange={e=> setTodoName(e.target.value.toLowerCase())} />
            <button type="submit">Create</button>
        </form>
        )
}

export default FormInput
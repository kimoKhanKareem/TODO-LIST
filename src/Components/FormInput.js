import React, {useContext} from 'react'
import styled from 'styled-components';
import { DataContext } from '../DataContext/DataContext';

const FormInput = () => {
    const { setTodoName, todoName, AddTodo }= useContext(DataContext);
    
    return (
        <Form autoComplete="off" onSubmit={AddTodo}>
            <input type="text" name="todos" id="todos"  required  placeholder='What need to be done?' value={todoName}
             onChange={e=> setTodoName(e.target.value.toLowerCase())} />
            <button type="submit">Create</button>
        </Form>
        )
}
//styled components
const Form = styled.form`
    input{
        width: 50%;
        height: 40px;
        border: 0;
        border-bottom: 1px solid black;
        outline: 0;
        ::placeholder{
            font-size: 20px;
        }
    }
    button{
        width: 10rem;
        height: 2.9rem;
        cursor: pointer;
        font-size: 20px;
    }

`
export default FormInput
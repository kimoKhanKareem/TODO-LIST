import styled from 'styled-components';
import { useContext } from 'react';
import { DataContext } from '../DataContext/DataContext';

const FormInput = () => {
    const {setTodoName, todoName, AddTodo} = useContext(DataContext)
    
    return (
        <Form autoComplete="off" onSubmit={AddTodo}>
            <input type="text" name="todos" id="todos" required
             placeholder='What need to be done?' value={todoName}
                onChange={e=> setTodoName(e.target.value.toLowerCase())}
            />
            <button type="submit">Create</button>
        </Form>
        )
}
//styled components
const Form = styled.form`
width: 100%;
    input{
        width: 50%;
        height: 40px;
        border: 0;
        border-bottom: 1px solid black;
        outline: 0;
        margin-right: 10px;
    }
    button{
        width: 5rem;
        height: 2.9rem;
        cursor: pointer;
        font-weight: 800;
        border: 0;
        background-color: gray;
        color: white;
    }
`
export default FormInput

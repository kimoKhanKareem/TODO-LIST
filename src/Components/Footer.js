import React, { useContext, useState } from 'react'
import { DataContext } from '../DataContext/DataContext';
import styled from 'styled-components'


const Footer = () => {
    const { todos, setTodos } = useContext(DataContext);
    const [checkAll, setcheckAll] = useState(false);
    const handleCheckAll = () =>{
        const newTodos = [...todos]
        newTodos.forEach(todo =>{
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setcheckAll(!checkAll)
    }

    const deleteTodo = () =>{
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos)
        setcheckAll(false)
    }

    return (
        <FooterStyled className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all" onClick={handleCheckAll} checked={checkAll}/>
                All
                <p>You have <span className='counterNam'>{todos.length}</span> to do</p>
            </label>
            <button id="delete" onClick={deleteTodo}>Delete</button>
        </FooterStyled>)
}
//styled components
const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    label{
        display: flex;
        align-items: center;
        margin: 0 20px;
        p{
            margin-left: 5px;
            .counterNam{
                color: red;
            }
        }
    }
    button{
        border: 0;
        background-color: orange;
        color: white;
        cursor: pointer;
        padding: 5px;
    }
`

export default Footer
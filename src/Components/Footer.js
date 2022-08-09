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

    return (
        <FooterStyled className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all" onClick={handleCheckAll} checked={checkAll}/>
                All
                <p>You have 0 to do</p>
            </label>
            <button id="delete">Delete</button>
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
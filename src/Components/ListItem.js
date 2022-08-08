import React from 'react'
import styled from 'styled-components'

const ListItem = ({todo, id, checkComplete}) => {
    return (
        <ListItemStyled>
            <label htmlFor={id} >
                <input type="checkbox" id={id} checked={todo.complete}
                    onChange={() =>checkComplete(id)} 
                />
                <div className={todo.complete ? "active": ''}>{todo.name}</div>
            </label>
                <button disabled={todo.complete}>Edit</button>
        </ListItemStyled>
    )
}
// styled components
const ListItemStyled = styled.li`
label{
    display: flex;
    align-items: center;
}
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .active{
        opacity: 0.5;
        text-decoration: line-through;
    }
    button{
        border: 0;
        background-color: orange;
        color: white;
        cursor: pointer;
        padding: 5px;
    }
    button:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export default ListItem
import React, {useState} from 'react'
import styled from 'styled-components'

const ListItem = ({todo, id, checkComplete, handleEditTodos}) => {
    const [onEdit, setOneEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.name);

    const handleOnEdite = () =>{
        setOneEdit(true)
    }
    const handleSave = id =>{
        setOneEdit(false)
        if(editValue){
            handleEditTodos(editValue, id)
        }else{
            setEditValue(todo.name)
        }
    }

    if(onEdit){
        return (
            <ListItemStyled>
                    <input type="text" id={editValue} value={editValue} onChange={e => setEditValue(e.target.value.toLowerCase())}/>
                    <button onClick={()=> handleSave(id)}>save</button>
            </ListItemStyled>
        )
    }else{
        return (
            <ListItemStyled>
                <label htmlFor={id} >
                    <input type="checkbox" id={id} checked={todo.complete}
                        onChange={() =>checkComplete(id)} 
                    />
                    <div className={todo.complete ? "active": ''}>{todo.name}</div>
                </label>
                    <button disabled={todo.complete} onClick={handleOnEdite}>Edit</button>
            </ListItemStyled>
        )
    }
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
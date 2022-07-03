import React, { useContext } from 'react'
import styled from 'styled-components';
import { DataContext } from '../DataContext/DataContext';
import ListItem from './ListItem'

const List = () => {
    const {todos} = useContext(DataContext);
    // console.log("todos",todos)
    return (
        <ListStyled>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} />
                ))
            }
        </ListStyled>
    )
}
//styled components
const ListStyled = styled.ul`
list-style: none;
`
export default List
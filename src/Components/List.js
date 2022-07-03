import React, { useContext } from 'react'
import { DataContext } from '../DataContext/DataContext';
import ListItem from './ListItem'

const List = () => {
    const {todos} = useContext(DataContext);
    // console.log("todos",todos)
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} />
                ))
            }
        </ul>
    )
}

export default List
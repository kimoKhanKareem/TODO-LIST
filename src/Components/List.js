import styled from 'styled-components';
import ListItem from './ListItem'
import { useContext } from 'react';
import { DataContext } from '../DataContext/DataContext';

const List = () => {
    const { todos, setTodos } = useContext(DataContext)

    const switchComplete = id =>{
         const newTodos = [...todos] 
          newTodos.forEach((todo, index) => {
            if(index === id){
                todo.complete = !todo.complete
            }
         });
         setTodos(newTodos)
    }

    return (
        <ListStyled>
            {!todos.length ? <p>Please add something in the input</p> :
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                        checkComplete={switchComplete} 
                    />
                ))
            }
        </ListStyled>

    )
}
//styled components
const ListStyled = styled.ul`
p{
    color: red;
}
list-style: none;
padding: 0 40px;
`
export default List

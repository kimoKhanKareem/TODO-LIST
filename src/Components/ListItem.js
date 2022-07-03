import React from 'react'

const ListItem = ({ todo }) => {
    return (
        <li>
            <label htmlFor=''>
                <input type="checkbox" id=""/>
                {todo.name}
                <button>Save</button>
            </label>
        </li>
    )
}

export default ListItem
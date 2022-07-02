import React from 'react'

const Footer = () => {
    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all"/>
                ALL
            </label>
            <p>You have to do</p>
            <button id="delete">Delete</button>
        </div>)
}

export default Footer
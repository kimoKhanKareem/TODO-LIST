import React from 'react'

const FormInput = () => {
    return (
        <form autoComplete="off" onSubmit={""}>
            <input type="text" name="todos" id="todos" value={""}/>
            <button type="submit">Create</button>
        </form>)
}

export default FormInput
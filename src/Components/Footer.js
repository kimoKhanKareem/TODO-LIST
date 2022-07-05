import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterStyled className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all" />
                All
                <p>You have to do</p>
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
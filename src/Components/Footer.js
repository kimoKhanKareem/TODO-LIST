import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterStyled className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all"/>
                ALL
            </label>
            <p>You have to do</p>
            <button id="delete">Delete</button>
        </FooterStyled>)
}
//styled components
const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Footer
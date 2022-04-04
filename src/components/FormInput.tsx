import styled from "styled-components";

export const FormInput = styled.input<{type: 'text'}>`
    display: block;
    width: 100%;
    height: 64px;
    padding: 5px 20px;
    margin-bottom: 5px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    transition: all .1s ease-in-out;
`
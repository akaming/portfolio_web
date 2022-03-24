import styled from "styled-components";
import theme from "../../styles/theme.js"

export const Container = styled.section`
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 200px 24px 0;

    @media ${({theme}) => theme.device.tablet} {
        padding-top: 100px;
    }
`
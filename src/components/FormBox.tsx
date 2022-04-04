import styled from "styled-components";
import theme from "../../styles/theme";

export const FormBox = styled.div`
    width: 100%;
    padding: 72px 84px 40px;
    border-top: 2px solid #21A6AE;
    background-color: #fff;
    box-shadow: 0 3px 6px 0 #dadce1;

    @media ${({theme}) => theme.device.tablet} {
        padding: 30px 20px;
    }
`
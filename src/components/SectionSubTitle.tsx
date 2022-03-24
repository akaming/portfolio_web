import styled,{css} from "styled-components";
import theme from "../../styles/theme.js"

export const SectionSubTitle = styled.h3`
    font-size: ${theme.fontSizes.xxl};

    @media ${theme.device.tablet} {
        font-size: ${theme.fontSizes.xl};
    }
`
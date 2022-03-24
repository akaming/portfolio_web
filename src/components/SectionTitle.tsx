import styled,{css} from "styled-components";
import theme from "../../styles/theme.js"

export const SectionTitle = styled.h2`
    letter-spacing: -1px;
    font-weight: 700;
    line-height: 48px;
    font-size: ${theme.fontSizes.xxxl};

    @media ${theme.device.tablet} {
        font-size: ${theme.fontSizes.xxl};
    }
`
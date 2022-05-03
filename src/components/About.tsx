import styled, {ThemeProvider} from "styled-components"
import { Container } from "./Container"
import {SectionTitle} from "./SectionTitle"
import theme from "../../styles/theme.js"

const About = (props: any) => {
    return (
        <ThemeProvider theme={theme}>
            <AboutWrap id={props.id}>
                <AboutTitle>ABOUT</AboutTitle>
                <AboutInfo>
                    <ProfileImg />
                    <ProfileInfo>
                        <dt>Name</dt>
                        <dd>이명민</dd>

                        <dt>Birth</dt>
                        <dd>95.04.03</dd>

                        <dt>Skill</dt>
                        <dd>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>SCSS</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>TypeScript</li>
                                <li>Adonis.js</li>
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>Zeplin</li>
                            </ul>
                        </dd>
            
                        <dt>Company</dt>
                        <dd>
                            <ul>
                                <li>2020.10 ~ freelancer</li>
                                <li>2019.08 ~ 2020.08 SYSOFT</li>
                                <li>2016.11 ~ 2018.04 GroupIDD</li>
                            </ul>
                        </dd>
                    </ProfileInfo>
                </AboutInfo>
            </AboutWrap>
        </ThemeProvider>
    )
}

const AboutWrap = styled(Container)`
    padding-top: 200px;

    @media ${({theme}) => theme.device.tablet} {
        padding-top: 100px;
    }

    @media ${({theme}) => theme.device.mobileL} {
        padding-top: 50px;
    }
`

const AboutTitle = styled(SectionTitle)`
    text-align: center;
    margin-bottom: 30px;
`

const AboutInfo = styled.div`
    display: flex;
    justify-content: space-around;

    @media ${({theme}) => theme.device.tablet} {
        flex-direction: column;
        align-items: center;
    }
`

const ProfileImg = styled.div`
    width: 283px;
    height: 400px;
    background: url("/images/me.jpg") no-repeat;
    transition: background .5s;

    &:hover {
        background: url("/images/me_hover.jpg") no-repeat;
    }

    @media ${({theme}) => theme.device.tablet} {
        width: 100%;
        height: auto;
        padding-top: calc(400/283 * 100%);
        background-size: contain;

        &:hover {
            width: 100%;
            height: auto;
            padding-top: calc(400/283 * 100%);
            background-size: contain;
        }
    }
`

const ProfileInfo = styled.dl`
    display: grid;
    grid-template-columns: 100px 1fr;
    row-gap: 10px;
    
    dt {
        font-weight: bold;
    }

    dt, dd, li {
        font-size: 18px;
    }

    li {
        padding-bottom: 5px;
    }

    @media ${({theme}) => theme.device.tablet} {
        padding-top: 50px;
    }
`

export default About
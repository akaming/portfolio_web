import styled from "styled-components"
import { Container } from "./Container"

const About = (props: any) => {
    return (
        <AboutWrap id={props.id}>
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
                    </ul>
                </dd>
     
                <dt>Company</dt>
                <dd>
                    <ul>
                        <li>2020.10 ~ </li>
                        <li>2019.08 ~ 2020.08 에스와이소프트</li>
                        <li>2016.11 ~ 2018.04 그룹아이디디</li>
                    </ul>
                </dd>
            </ProfileInfo>
        </AboutWrap>
    )
}

const AboutWrap = styled(Container)`
    display: flex;
    justify-content: space-around;
    padding-top: 0;
`

const ProfileImg = styled.div`
    width: 283px;
    height: 400px;
    background: url("/images/me.jpg") no-repeat;
    transition: background .5s;

    &:hover {
        background: url("/images/me_hover.jpg") no-repeat;
    }
`

const ProfileInfo = styled.dl`
    display: grid;
    grid-template-columns: 100px 1fr;
    row-gap: 10px;

    dt {
        font-weight: bold;
    }
`

export default About
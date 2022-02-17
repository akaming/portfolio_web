import styled from "styled-components"

const About = (props: any) => {
    return (
        <Container id={props.id}>
            <Img src="/images/me.jpg"/>
            <InfoTable>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>이명민</td>
                    </tr>
                    <tr>
                        <th>Birth</th>
                        <td>95.04.03</td>
                    </tr>
                    <tr>
                        <th>Skill</th>
                        <td>
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
                        </td>
                    </tr>
                    <tr>
                        <th>Company</th>
                        <td>
                            <ul>
                                <li>2020.10 ~ </li>
                                <li>2019.08 ~ 2020.08 에스와이소프트</li>
                                <li>2016.11 ~ 2018.04 그룹아이디디</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </InfoTable>
        </Container>
    )
}

const Container = styled.div`
    min-height: 500px;
`
const Img = styled.img``
const InfoTable = styled.table``

export default About
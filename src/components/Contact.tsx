import styled from "styled-components"
import { Container } from "./Container"
import { Title } from "./Title"

const Contact = (props: any) => {
    return (
        <ContactWrap id={props.id}>
            <Title>Contact</Title>
            <SubTitle>Let's create your next experience together</SubTitle>
            <ContactCard>
                <Info>
                    <dt>Address</dt>
                    <dd>경기도 수원시 권선구</dd>
                    <dt>Email</dt>
                    <dd>
                        <Linkitem href="mailto:myungmin.works@gmail.com">myungmin.works@gmail.com</Linkitem>
                    </dd>
                    <dt>Git</dt>
                    <dd>
                        <Linkitem href="https://github.com/akaming" target="_blank">https://github.com/akaming</Linkitem>
                    </dd>
                    <dt>Blog</dt>
                    <dd>
                        <Linkitem href="https://myungmin.tistory.com/" target="_blank">공부 블로그</Linkitem>
                    </dd>
                </Info>
            </ContactCard>
        </ContactWrap>
    )
}

const ContactWrap = styled(Container)`
    min-height: 500px;
    margin-bottom: 200px;
    padding-top: 200px;
`

const SubTitle = styled.h3`
    font-size: 24px;
`

const ContactCard = styled.div`
    display: flex;
    width: 500px;
    aspect-ratio: 5/3;
    margin: 60px auto;
    border-radius: 20px;
    box-shadow: 0 10px 40px 2px rgb(0 0 0 / 40%);
    background: #000;
    transform-origin: center center 0;
    transition: all .5s ease-out;
    transform: perspective(1000px) rotateX(35deg) rotateY(4deg) rotate(-30deg);
    color: #fff;

    &:hover {
        margin-top: 60px;
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotate(0deg);
    }
`

const Info = styled.dl`
    display: grid;
    grid-template-columns: 100px 1fr;
    row-gap: 10px;
    margin: auto;
` 

const Linkitem = styled.a`
    color: #fff;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
`

export default Contact
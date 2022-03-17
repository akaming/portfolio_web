import Link from "next/link"
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
                        <Link href="mailto:myungmin.works@gmail.com">
                            <Linkitem>myungmin.works@gmail.com</Linkitem>
                        </Link>
                    </dd>
                    <dt>Blog</dt>
                    <dd>
                        <Link href="https://myungmin.tistory.com/">
                            <Linkitem>공부 블로그</Linkitem>
                        </Link>
                    </dd>
                </Info>
            </ContactCard>
        </ContactWrap>
    )
}

const ContactWrap = styled(Container)`
    min-height: 500px;
    padding-bottom: 150px;
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
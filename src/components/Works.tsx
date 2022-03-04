import { NextPageContext } from "next"
import styled from "styled-components"

export default function Works(props: any) {
    return (
        <Container id={props.id}>
            Works
        </Container>
    )
}

Works.getInitialProps = async ({req, res}:NextPageContext) => {
    
}

const Container = styled.div`
    min-height: 500px;
`

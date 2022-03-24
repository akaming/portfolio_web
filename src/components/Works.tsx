import axios from "axios"
import { NextPage, NextPageContext } from "next"
import { useEffect, useState } from "react"
import styled, {ThemeProvider} from "styled-components"
import { Container } from "./Container"
import { SectionTitle } from "./SectionTitle"
import theme from "../../styles/theme.js"
interface List {
    id: number,
    title: string,
    img: string
} 

const Works = (props: any) => {
    const [list, setList] = useState<List[]>()

    useEffect(() => {
      getList();
    }, []);
    
    const getList = async() => {
        try {
            const result = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/v1/portfolios/')
            const temp:List[] = []
    
            result.data.data.map((data:any) => {
                temp.push({
                    id: data.id,
                    title: data.title,
                    img: data.img,
                })
            })
    
            setList(temp);

        } catch(error) {
            console.error(error);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <WorksWrap id={props.id}>
                <SectionTitle>WORKS</SectionTitle>
                <CardGroup>
                    {
                        list?.map((data:List) => {
                            return (
                                <CardWrap key={data.id}>
                                    <Card>
                                        <CardImg src="https://dummyimage.com/600x400/000/fff" alt={data.title}></CardImg>
                                        <CardTitle>{data.title}</CardTitle>
                                    </Card>
                                </CardWrap>
                            )
                        })
                    }
                </CardGroup>
            </WorksWrap>
        </ThemeProvider>
    )
}

export default Works;

const WorksWrap = styled(Container)`
    text-align: center;
    overflow: hidden;
`

const CardGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -30px;
    @media ${({theme}) => theme.device.tablet} {
        flex-direction: column;    
        flex-wrap: nowrap;
    }
`

const CardWrap = styled.a`
    cursor: pointer;
    flex-basis: 50%;
    margin: 30px 0;

    @media ${({theme}) => theme.device.tablet} {
        flex-basis: 100%;
        margin: 15px 0;
    }
`

const Card = styled.div`
    margin: 0 30px;
    font-size: 0;

    @media ${({theme}) => theme.device.tablet} {
        margin: 0 15px;
    }
`

const CardImg = styled.img`
    width: 100%;
`

const CardTitle = styled.h3`
    padding-top: 30px;

    @media ${({theme}) => theme.device.tablet} {
        padding-top: 10px;
    }
`

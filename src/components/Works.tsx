import axios from "axios"
import { NextPage, NextPageContext } from "next"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Container } from "./Container"
import { Title } from "./Title"

interface List {
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
                    title: data.title,
                    img: data.img
                })
            })
    
            setList(temp);

        } catch(error) {
            console.error(error);
        }
    }

    return (
        <WorksWrap id={props.id}>
            <Title>Works</Title>
            <CardGroup>
                {
                    list?.map((data:List) => {
                        return (
                            <Card>
                                <CardImg src="https://dummyimage.com/600x400/000/fff" alt={data.title}></CardImg>
                                <CardTitle>{data.title}</CardTitle>
                            </Card>
                        )
                    })
                }
            </CardGroup>
        </WorksWrap>
    )
}

export default Works;

const WorksWrap = styled(Container)`
    text-align: center; 
    padding-top: 200px;
`

const CardGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 -30px;
`

const Card = styled.a`
    margin: 30px;
    cursor: pointer;
`

const CardImg = styled.img``

const CardTitle = styled.h3`
    margin-top: 30px;
`

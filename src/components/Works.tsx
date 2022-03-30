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
    const [page, setPage] = useState<number>(1)
    const [nextpage, setNextpage] = useState<boolean>(true)

    useEffect(() => {
      getList();
    }, [page]);
    
    const getList = async() => {
        try {
            const result = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/v1/portfolios?page=${page}`)
            const temp:List[] = []
            
            result.data.data.map((data:any) => {
                temp.push({
                    id: data.id,
                    title: data.title,
                    img: process.env.NEXT_PUBLIC_API_URL + `/v1/portfolios/image/${data.id}`,
                })
            })
            
            // 더보기 버튼 클릭시 data 추가
            if(page > 1) {
                setList([...list!, ...temp]);
                
            } else {
                setList(temp);   
            }

            // 마지막 페이지 일시 더보기 버튼 삭제
            if(result.data.meta.next_page_url === null) {
                setNextpage(false);
            }

        } catch(error) {
            console.error(error);
        }
    }

    const moreButtonHandler = () => {
        setPage(page + 1 );
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
                                        <CardImg style={{backgroundImage:`url(${data.img})`}} />
                                        <CardTitle>{data.title}</CardTitle>
                                    </Card>
                                </CardWrap>
                            )
                        })
                    }
                </CardGroup>
                {
                    nextpage &&
                    <MoreButton onClick={moreButtonHandler}>더보기</MoreButton>
                }
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
    transition: all 0.4s ease;

    &:hover {
        -webkit-filter: brightness(.6);
    }

    @media ${({theme}) => theme.device.tablet} {
        margin: 0 15px;
    }
`

const CardImg = styled.div`
    padding-top: calc(947/1421 * 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const CardTitle = styled.h3`
    padding-top: 30px;
    font-size: 18px;
    @media ${({theme}) => theme.device.tablet} {
        padding-top: 10px;
    }
`

const MoreButton = styled.button`
    padding: 15px 25px;
    background-color: #121212;
    font-size: 17px;
    font-weight: 400;
    color: #fff;
    text-transform: none;
    cursor: pointer;
    letter-spacing: unset;
    border-radius: 4px;
    transition: all 0.5s ease-in-out;
    border: 1px solid transparent;

    &:hover {
        border-color: #121212;
        background-color: #fff;
        color: #121212;
        border-radius: 40px;
    }
`
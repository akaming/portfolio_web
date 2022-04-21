import styled, { ThemeProvider } from "styled-components";
import { NextPageContext } from "next"
import { Container } from "../../src/components/Container";
import { parseCookies } from "../../src/helpers"
import { useEffect, useState } from "react";
import theme from "../../styles/theme.js"
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

interface PortfolioProps {
    id: number,
    title: string,
    img: string,
    content: string,
} 

export default function Page({data}:any){
    const router = useRouter();
    const [list, setList] = useState<PortfolioProps[]>();
    const [page, setPage] = useState<number>(1);
    const [nextpage, setNextpage] = useState<boolean>(true);

    useEffect(() => {
        getList();
      }, [page]);

    const getList = async() => {
        try {
            const result = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/v1/portfolios?page=${page}`)
            const temp:PortfolioProps[] = []
            
            result.data.data.map((data:any) => {
                temp.push({
                    id: data.id,
                    title: data.title,
                    img: process.env.NEXT_PUBLIC_API_URL + `/v1/portfolios/image/${data.id}`,
                    content: data.content,
                })
            })
            
            if(page > 1) {
                setList([...list!, ...temp]);
                
            } else {
                setList(temp);   
            }

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

    const deleteData = async(id:Number) => {
        try {
            const result = await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/v1/admin/portfolios/${id}`,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${data.token}`
                }
            })
            Swal.fire({
                title: '삭제',
                text: '삭제 되었습니다.',
                icon: 'info',
                confirmButtonText: '확인',
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <ListGrop>
                    {
                        list?.map((data:PortfolioProps) => {
                            return (
                                <ListWrap key={data.id}>
                                    <List>
                                        <ListImg style={{backgroundImage:`url(${data.img})`}} />
                                        <ListTitle>{data.title}</ListTitle>
                                        <DeleteButton onClick={() => deleteData(data.id)}>삭제</DeleteButton>
                                    </List>
                                </ListWrap>
                            )
                        })
                    }   
                </ListGrop>
                {
                    nextpage &&
                    <MoreButton onClick={moreButtonHandler}>더보기</MoreButton>
                }
            </Container>
        </ThemeProvider>
    )
}

Page.getInitialProps = async({req, res}:NextPageContext) => {
    const data = parseCookies(req)
  
    if(res) {
        if(Object.keys(data).length === 0 && data.constructor === Object) {
            if (!data.token) {
                res.writeHead(301, { Location: "/login" })
                res.end()
            }
        }
    }
    return {
        data: data && data
    }
}


const ListGrop = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media ${({theme}) => theme.device.tablet} {
        flex-direction: column;    
        flex-wrap: nowrap;
    }
`

const ListWrap = styled.div`
    flex-basis: 50%;
    margin: 30px 0;
`

const List = styled.div`
    margin: 0 30px;
    font-size: 0;
    transition: all 0.4s ease;

    @media ${({theme}) => theme.device.tablet} {
        margin: 0 15px;
    }
`

const ListImg = styled.div`
    padding-top: calc(947/1421 * 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const ListTitle = styled.h3`
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

const DeleteButton = styled.button`
    display: block;
    min-width: 100px;
    border: none;
    font-size: 16px;
    color: #fff;
    line-height: 35px;
    text-align: center;
    transition: background 0.3s ease;
    background-color: #d65a57;
    cursor: pointer;

    &:hover {
        background-color: #db6e6b
    }
`
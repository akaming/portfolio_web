import axios from "axios"
import { NextPage, NextPageContext } from "next"
import { useEffect, useState } from "react"
import styled, {ThemeProvider} from "styled-components"
import { Container } from "./Container"
import { SectionTitle } from "./SectionTitle"
import theme from "../../styles/theme.js"
import { parseCookies } from "../../src/helpers"
import Link from "next/link"
import { useAtom } from 'jotai'
import Profile from "../store/profile"
import Swal from "sweetalert2"
interface PortfolioProps {
    id: number,
    title: string,
    img: string,
    content: string,
} 

const Works = (props: any) => {
    const [list, setList] = useState<PortfolioProps[]>();
    const [popupData, setPopupData] = useState<PortfolioProps>();
    const [page, setPage] = useState<number>(1);
    const [nextpage, setNextpage] = useState<boolean>(true);
    const [showPopup, setShowPopup] = useState(false);
    const [isAdmin, setIsAdmin] = useAtom(Profile)
    
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

    const deleteData = () => {
        try {
            Swal.fire({
                title: '삭제',
                text: '삭제 하시겠습니까?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '예',
                cancelButtonText: '아니오'
            }).then(async(result: any) => {
                if (result.isConfirmed) {
                await axios.delete(process.env.NEXT_PUBLIC_API_URL + `/v1/admin/portfolios/${popupData?.id}`,{
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${isAdmin.token}`
                    }
                });
                  Swal.fire({
                    title: '삭제 완료',
                    text: '게시글이 삭제되었습니다.',
                    icon: 'info',
                    confirmButtonText: '확인',
                    allowOutsideClick: false,
                  }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                })
                }
              })
        } catch (error) {
            console.error(error)
        }
    }

    const moreButtonHandler = () => {
        setPage(page + 1 );
    }

    const popUp = (data: PortfolioProps) => {
        setPopupData(data);
        setShowPopup(true)
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    const htmlContent = () => {
        return {
            __html: (popupData?.content?.replaceAll('\n', '<br />')) || ''
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <WorksWrap id={props.id}>
                <SectionTitle>WORKS</SectionTitle>
                {
                    isAdmin.adimin &&
                    <CreateButtonBox>
                        <Link href="/portfolios/create">
                            <CreateButton>글작성</CreateButton>
                        </Link>
                    </CreateButtonBox>
                }
                <CardGroup>
                    {
                        list?.map((data:PortfolioProps) => {
                            return (
                                <CardWrap key={data.id} onClick={() => popUp(data)}>
                                    <Card>
                                        <CardImg style={{backgroundImage:`url(${data.img})`}} />
                                        <CardTitleBox>
                                            <CardTitle>{data.title}</CardTitle>
                                        </CardTitleBox>
                                    </Card>
                                </CardWrap>
                            )
                        })
                    }
                </CardGroup>
                {
                    showPopup &&
                    <PopupWrap>
                        <PopupBox>
                            {
                                isAdmin.adimin &&
                                <EditBox>
                                    <DeleteButton onClick={deleteData}>삭제</DeleteButton>
                                    <Link href={`/portfolios/${popupData?.id}/edit`}>
                                        <EditButton>수정</EditButton>
                                    </Link>
                                </EditBox>
                                
                            }
                            <CloseButton onClick={closePopup}>닫기</CloseButton>
                            {
                                popupData &&
                                <PopupInfo>
                                    <PopupImg style={{backgroundImage:`url(${popupData.img})`}}/>
                                    <PopupContentBox>
                                        <PopupTitle>{popupData.title}</PopupTitle>
                                        <PopupText dangerouslySetInnerHTML={htmlContent()} />
                                    </PopupContentBox>
                                </PopupInfo>

                            }
                        </PopupBox>
                        <PopupDim onClick={closePopup}/>
                    </PopupWrap>
                }
                {
                    nextpage &&
                    <MoreButton onClick={moreButtonHandler}>더보기</MoreButton>
                }
            </WorksWrap>
        </ThemeProvider>
    )
}

Works.getInitialProps = async({req, res}:NextPageContext) => {
    const data = parseCookies(req)
    return {
        data: data && data
    }
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
    position: relative;
    margin: 0 30px;
    font-size: 0;
    transition: all 0.4s ease;
    box-shadow: 0px -1px 10px 4px rgb(0 0 0 / 20%);

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

const CardTitleBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: 0.3s all;

    &:hover {
        opacity: 1;
    }
`

const CardTitle = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 30px;
    font-size: 18px;
    color: #fff;
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

const PopupWrap = styled.div`
    display: grid;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    grid-template-rows: minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);
    height: 100%;
    padding: 0.625em;
    overflow-x: hidden;
    grid-template-columns: auto minmax(0,1fr) auto;
`

const PopupBox = styled.div`
    position: relative;
    box-sizing: border-box;
    grid-template-columns: minmax(0,100%);
    z-index: 102;
    width: 70em;
    max-width: 100%;
    padding: 50px 0px 20px;
    border: none;
    border-radius: 5px;
    background: #fff;
    color: #545454;
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
    -webkit-tap-highlight-color: transparent;

    @media ${({theme}) => theme.device.mobileL} {
        grid-row: auto;
    }
`

const PopupDim = styled.div`
    position: fixed;
    z-index: 101;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color .1s;
    background: rgba(0,0,0,.4);
`

const CloseButton = styled.button`
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 0;
    background-color: transparent;

    &::before, 
    &::after {
        content: "";
        height: 1px;
        width: 100%;
        background-color: #999;
        position: absolute;
        transform: rotate(45deg) translateY(-50%);
        top: 50%;
        left: 0;
    }

    &::after {
        transform: rotate(-45deg);
    }
`

const PopupInfo = styled.div`
    height: 80vh;
    overflow-y: auto;
    font-size: 0;
`

const PopupImg = styled.img`
  width: 100%;
  padding-top: calc(947/1421 * 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const PopupTitle = styled.h3`
    font-weight: bold;
    font-size: 18px;
    font-family: ${({theme}) => theme.fontName.NotoSans}, sans-serif;
`

const PopupContentBox = styled.div`
    padding: 20px 5vw;
    border-top: 20px solid #eee;
    text-align: left;
`

const PopupText = styled.p`
    font-family: ${({theme}) => theme.fontName.NotoSans}, sans-serif;
`

const EditBox = styled.div`
    position: absolute;
    right: 45px;
    top: 11px;
`

const EditButton = styled.a`
    display: inline-block;
    background-color: #6767ff;
    padding: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
`

const DeleteButton = styled.button`
    display: inline-block;
    margin-right: 5px;
    background-color: #ff4b4b;
    padding: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
`

const CreateButtonBox = styled.div`
    display: flex;
    justify-content: end;
`

const CreateButton = styled.a`
    background-color: #3b70b4;
    padding: 5px;
    color: #fff;
    display: inline-block;
`
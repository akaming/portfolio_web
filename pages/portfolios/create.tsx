import axios from "axios";
import { NextPageContext } from "next"
import { useRouter } from "next/router";
import React, { useState } from "react"
import styled from "styled-components";
import Swal from "sweetalert2";
import { Container } from "../../src/components/Container";
import Header from "../../src/components/Header";
import { parseCookies } from "../../src/helpers"

interface Board {
    title: string,
    content: string,
    img: File | null,
}
export default function Create({data}:any) {
    const router = useRouter();
    const [board, setBoard] = useState<Board>({
        title: "",
        content: "",
        img: null
    })
    
    const handleFile = function(e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
    
        if (!fileList) return;

        setBoard({...board, img: fileList[0]})
    }

    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', board.title);
            formData.append('content', board.content);
            
            if (board.img) {
                formData.append('img', board?.img!, 'test' );
            }
            
            await axios.post(process.env.NEXT_PUBLIC_API_URL + '/v1/admin/portfolios/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${data.token}`
                }
            });
            Swal.fire({
                title: '글쓰기 완료',
                text: '글쓰기 등록이 완료되었습니다.',
                icon: 'info',
                confirmButtonText: '확인',
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push({
                        pathname: '/',
                    })
                }
            })
        } catch(error:any) {
            console.error(error);

            if(error.response.status === 401) {
                alert("로그인 해주세요.")
            }
        }
    }

    return (
        <Container>
            <Header/>
            <CreateWrap>
                <CreateBox>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" placeholder="제목" onChange={(e) => {setBoard({...board, title: e.target.value})}}/>
                        <ContentArea placeholder="내용" onChange={(e) => {setBoard({...board, content: e.target.value})}}/>
                        <input type="file" accept="image/png, image/jpeg, image/jpg, image/gif" onChange={handleFile} />
                        <Button type="submit">등록</Button>
                    </form>
                </CreateBox>
            </CreateWrap>
        </Container>
    )
}

Create.getInitialProps = async({req, res}:NextPageContext) => {
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

const CreateWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin-top: 76px;
`

const CreateBox = styled.div`
    width: 100%;
    padding: 72px 84px 40px;
    border-top: 2px solid #21A6AE;
    background-color: #fff;
    box-shadow: 0 3px 6px 0 #dadce1;
`

const Input = styled.input<{type: 'text'}>`
    display: block;
    width: 100%;
    height: 64px;
    padding: 5px 20px;
    margin-bottom: 5px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    transition: all .1s ease-in-out;
`

const ContentArea = styled.textarea`
    display: block;
    width: 100%;
    height: 500px;
    padding: 5px 20px;
    margin-bottom: 5px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    transition: all .1s ease-in-out;
`

const Button = styled.button`
    width: 100%;
    height: 62px;
    line-height: 62px;
    margin-top: 20px;
    background-color: #21A6AE;
    border-radius: 12px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
`
import axios from "axios";
import { NextPageContext } from "next"
import { useRouter } from "next/router";
import React, { useState } from "react"
import styled, {ThemeProvider} from "styled-components";
import Swal from "sweetalert2";
import { Container } from "../../src/components/Container";
import { FormBox } from "../../src/components/FormBox";
import { FormButton } from "../../src/components/FormButton";
import { FormInput } from "../../src/components/FormInput";
import { FormTextarea } from "../../src/components/FormTextarea";
import Header from "../../src/components/Header";
import { parseCookies } from "../../src/helpers"
import theme from "../../styles/theme";

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
        <ThemeProvider theme={theme}>
            <CreateContainer>
                <CreateWrap>
                    <FormBox>
                        <form onSubmit={handleSubmit}>
                            <FormInput type="text" placeholder="제목" onChange={(e) => {setBoard({...board, title: e.target.value})}}/>
                            <FormTextarea placeholder="내용" onChange={(e) => {setBoard({...board, content: e.target.value})}}/>
                            <input type="file" accept="image/png, image/jpeg, image/jpg, image/gif" onChange={handleFile} />
                            <FormButton type="submit">등록</FormButton>
                        </form>
                    </FormBox>
                </CreateWrap>
            </CreateContainer>
        </ThemeProvider>
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

const CreateContainer = styled(Container)`
    padding-top: 0;
`

const CreateWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
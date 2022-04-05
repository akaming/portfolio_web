import axios from 'axios'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Swal from 'sweetalert2'
import { Container } from '../../../src/components/Container'
import { FormBox } from '../../../src/components/FormBox'
import { FormButton } from '../../../src/components/FormButton'
import { FormInput } from '../../../src/components/FormInput'
import { FormTextarea } from '../../../src/components/FormTextarea'
import { parseCookies } from '../../../src/helpers'
import theme from '../../../styles/theme'

interface Board {
    id?: number,
    title?: string,
    content?: string,
    // img: File | null,
}

export default function Edit({data}:any) {
    const router = useRouter();
    const [board, setBoard] = useState<Board>();
    const { id } = router.query;
    
    useEffect(() => {
        if (!id) {
            return
        }
        // console.log('data', data.token);
        if (data.token) {
            axios.defaults.headers.common = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${data.token}`
            }
        }

        getData();
    }, [id])
 
    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        console.log(data.token);
        
        
        try {
            const result = await axios.patch(process.env.NEXT_PUBLIC_API_URL + `/v1/admin/portfolios/${id}`, board);
            setBoard({
                ...board,
                title: result?.data?.title,
                content: result?.data?.content,
            });
            Swal.fire({
                title: '글쓰기 수정 완료',
                text: '글쓰기 수정 완료되었습니다.',
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
            
        } catch (error) {
            console.error(error)
        }
    }

    const getData = async() => {
        try {
            const result = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/v1/admin/portfolios/${id}`) 
            console.log(result);
            
            setBoard({
                id: result?.data?.id,
                title: result?.data?.title,
                content: result?.data?.content,
            })
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <ThemeProvider theme={theme}>
        <EditContainer>
            <CreateWrap>
                <FormBox>
                    <form onSubmit={handleSubmit}>
                        <FormInput type="text" placeholder="제목" value={board?.title} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setBoard({...board,title: e.target.value})}} />
                        <FormTextarea placeholder="내용" value={board?.content} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setBoard({...board, content: e.target.value })}/>
                        <input type="file" accept="image/png, image/jpeg, image/jpg, image/gif" />
                        <FormButton type="submit">등록</FormButton>
                    </form>
                </FormBox>
            </CreateWrap>
        </EditContainer>
    </ThemeProvider>
  )
}

Edit.getInitialProps = async({req, res}:NextPageContext) => {
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

const EditContainer = styled(Container)`
    padding-top: 0;
`

const CreateWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
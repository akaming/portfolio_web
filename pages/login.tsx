import React, { useEffect, useState } from "react"
import styled, {ThemeProvider} from "styled-components"
import axios from "axios"
import Swal from "sweetalert2"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
import Header from "../src/components/Header"
import theme from "../styles/theme.js"

interface User {
    email: string,
    password: string
}

const Login = () => {
    const router = useRouter();
    const [cookie, setCookie] = useCookies(["token"])
    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    })
    
    const validation = () => {
        //정규식 표현
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        //이메일 값이 없을시
        if(!user.email) {
            Swal.fire({
                title: '이메일',
                text: '이메일을 입력 해주세요.',
                icon: 'error',
                confirmButtonText: '확인',
                allowOutsideClick: false,
            })
            return false;
        }
        // 이메일 정규식 어긋나는 경우
        if(!regex.test(user.email)) {
            Swal.fire({
                title: '이메일',
                text: '이메일 형식이 아닙니다.',
                icon: 'error',
                confirmButtonText: '확인',
                allowOutsideClick: false,
            })
            return false;
        }
        // 비밀번호 값이 없을 경우
        if (!user.password) {
            Swal.fire({
                title: '비밀번호',
                text: '비밀번호를 입력해 주세요.',
                icon: 'error',
                confirmButtonText: '확인',
                allowOutsideClick: false,
            })
            return false;
        }
        return true;
    }

    const loginFrom = async(e:React.FormEvent) => {
        e.preventDefault();
        
        const validated = !validation();
        if (validated) {
            return false;
        }

        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/v1/auth/login', user)
            const data = response.data

            setCookie("token", data.token.token, {
                path: "/",
                maxAge: 3600, // 쿠키만료 1시간
                sameSite: true
            })
            
            Swal.fire({
                title: '로그인',
                text: '로그인 되었습니다.',
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
            const errorCode = error?.response?.data?.code

            if (errorCode == "no-user") {
                Swal.fire({
                    title: '회원정보 확인',
                    text: '회원정보가 일치하지 않습니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                    allowOutsideClick: false,
                })
            }
            if (errorCode == "password-error") {
                Swal.fire({
                    title: '비밀번호 확인',
                    text: '비밀번호가 틀렸습니다. 다시 확인해 주세요.',
                    icon: 'error',
                    confirmButtonText: '확인',
                    allowOutsideClick: false,
                })
            }
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <Header />
            <LoginWrap>
                <LoginBox>
                    <form onSubmit={loginFrom}>
                        <InputGroup>
                            <Input type="text" onChange={(e) => (setUser({...user, email: e.target.value}))} placeholder="E-mail"/>
                            <Input type="password" onChange={(e) => (setUser({...user, password: e.target.value}))} placeholder="password"/>
                        </InputGroup>
                        <Button type="submit">로그인</Button>
                    </form>
                </LoginBox>
            </LoginWrap>
        </ThemeProvider>
    )
}

const LoginWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    height: 100vh;
`

const LoginBox = styled.div`
    width: 538px;
    padding: 72px 84px 40px;
    border-top: 2px solid #21A6AE;
    background-color: #fff;
    box-shadow: 0 3px 6px 0 #dadce1;
    margin: auto;

    @media ${({theme}) => theme.device.tablet} {
        padding: 60px 24px;
    }
`

const InputGroup = styled.div`
    position: relative;
`

const Input = styled.input`
    display: block;
    width: 100%;
    height: 64px;
    padding-left: 20px;
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

export default Login;
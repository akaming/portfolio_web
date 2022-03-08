import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Swal from "sweetalert2"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
import { Container } from "../src/components/Container"
import Header from "../src/components/Header"

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

    useEffect(() => {
        
        console.log(cookie)
    }, [])
    
    
    const loginFrom = async(e:React.FormEvent) => {
        e.preventDefault();
        
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
            console.log('성공');
            
        } catch(error) {
            console.error(error);
        }
    }

    return(
        <Container>
            <Header />
            <LoginWrap>
                <LoginBox>
                    <form onSubmit={loginFrom}>
                        <InputGroup>
                            <Input type="email" onChange={(e) => (setUser({...user, email: e.target.value}))} placeholder="E-mail"/>
                            <Input type="password" onChange={(e) => (setUser({...user, password: e.target.value}))} placeholder="password"/>
                        </InputGroup>
                        <Button type="submit">로그인</Button>
                    </form>
                </LoginBox>
            </LoginWrap>
        </Container>
    )
}

const LoginWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const LoginBox = styled.div`
    width: 538px;
    padding: 72px 84px 40px;
    border-top: 2px solid #21A6AE;
    background-color: #fff;
    box-shadow: 0 3px 6px 0 #dadce1;
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
`

export default Login;
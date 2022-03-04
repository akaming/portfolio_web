import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Swal from "sweetalert2"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"

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
        <form onSubmit={loginFrom}>
            <Input type="email" onChange={(e) => (setUser({...user, email: e.target.value}))}/>
            <Input type="password" onChange={(e) => (setUser({...user, password: e.target.value}))}/>
            <button type="submit">로그인</button>
        </form>
    )
}

const Input = styled.input`
    border: 1px solid #000;
`

export default Login;
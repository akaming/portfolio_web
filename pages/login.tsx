import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Swal from "sweetalert2"
import { useRouter } from "next/router"

interface User {
    email: string,
    password: string
}

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    })

    const loginFrom = async(e:React.FormEvent) => {
        e.preventDefault();
        console.log(process.env.NEXT_PUBLIC_API_URL);
        
        try {
            await axios.post(process.env.NEXT_PUBLIC_API_URL + '/v1/auth/login', user)
            
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
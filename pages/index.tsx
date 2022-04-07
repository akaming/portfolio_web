import { NextPageContext } from 'next'
import { useEffect, useState } from 'react'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Header from '../src/components/Header'
import Intro from '../src/components/Intro'
import Works from '../src/components/Works'
import { parseCookies } from '../src/helpers'
import { useAtom } from 'jotai'
import Profile from '../src/store/profile'
export default function Home(props:any ) {
  const [isAdmin, setIsAdmin] = useAtom(Profile)
  
  useEffect(() => {
    if(props.data.token){
      setIsAdmin(true);
    }
  }, []);
  
  return (
    <>
      <Header />
      <Intro id="intro"/>
        <About id="about"/>
        <Works id="works" isAdmin={isAdmin}/>
        <Contact id="contact"/>
      
    </>
  )
}
Home.getInitialProps = async({req, res}:NextPageContext) => {
    const data = parseCookies(req)

    // if(res) {
    //     if(Object.keys(data).length === 0 && data.constructor === Object) {
    //         if (!data.token) {
    //             res.writeHead(301, { Location: "/login" })
    //             res.end()
    //         }
    //     }
    // }
    return {
        data: data && data
    }
}

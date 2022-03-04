import type { NextPage, NextPageContext } from 'next'
import styled from 'styled-components'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Header from '../src/components/Header'
import Works from '../src/components/Works'
import { parseCookies } from "../src/helpers/"

export default function Home({data}:any) {
  
  return (
    <Container>
      <Header />
      <p>{data.token}</p>
      <About id="about"/>
      <Works id="works"/>
      <Contact id="contact"/>
    </Container>
  )
}


Home.getInitialProps = async ({req, res}:NextPageContext) => {
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

const Container = styled.div`
  width: 1100px;
  height: 100%;
  margin: 0 auto;
`


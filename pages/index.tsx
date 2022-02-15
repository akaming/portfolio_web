import type { NextPage } from 'next'
import styled from 'styled-components'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Header from '../src/components/Header'
import Works from '../src/components/Works'

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <About id="about"/>
      <Works id="works"/>
      <Contact id="contact"/>
    </Container>
  )
}

const Container = styled.div`
  width: 1100px;
  height: 100%;
  margin: 0 auto;
`

export default Home

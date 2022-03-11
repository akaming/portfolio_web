import type { NextPage, NextPageContext } from 'next'
import styled from 'styled-components'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import { Container } from '../src/components/Container'
import Header from '../src/components/Header'
import Works from '../src/components/Works'
import { parseCookies } from "../src/helpers/"

export default function Home() {
  return (
    <Container>
      <Header />
      <About id="about"/>
      <Works id="works"/>
      <Contact id="contact"/>
    </Container>
  )
}

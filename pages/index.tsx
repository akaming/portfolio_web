import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Header from '../src/components/Header'
import Intro from '../src/components/Intro'
import Works from '../src/components/Works'

export default function Home() {
  
  return (
    <>
      <Header />
      <Intro id="intro"/>
        <About id="about"/>
        <Works id="works"/>
        <Contact id="contact"/>
      
    </>
  )
}

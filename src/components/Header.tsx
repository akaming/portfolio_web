import Link from "next/link"
import styled from "styled-components"

const Header =() => {
   
    const moveContent = (e:any)=> {
        e.preventDefault();
        
        const targetId = e.target.getAttribute('href').slice(1);
        const target = document.querySelector(targetId);
        const moveY = target.offsetTop;
        
        window.scroll({
            top: moveY,
            behavior: 'smooth'
        });
    }

    return (
        <HeaderContainer>
            <Nav>
                <Link href="#intro" passHref><NavItem onClick={moveContent}>INTRO</NavItem></Link>
                <Link href="#about" passHref><NavItem onClick={moveContent}>ABOUT</NavItem></Link>
                <Link href="#works" passHref><NavItem onClick={moveContent}>WORKS</NavItem></Link>
                <Link href="#contact" passHref><NavItem onClick={moveContent}>CONTACT</NavItem></Link>
            </Nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    padding: 30px 0;
    max-width: 1100px;
    width: 100%;
`
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`

const NavItem = styled.a`
    font-size: 12px;
    cursor: pointer;
    color: #21A6AE;
    font-weight: bold;
`

export default Header
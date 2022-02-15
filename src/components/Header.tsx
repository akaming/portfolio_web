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
                <Link href="#about" passHref><NavItem onClick={moveContent}>ABOUT</NavItem></Link>
                <Link href="#works" passHref><NavItem onClick={moveContent}>WORKS</NavItem></Link>
                <Link href="#contact" passHref><NavItem onClick={moveContent}>CONTACT</NavItem></Link>
            </Nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    padding: 30px 0;
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
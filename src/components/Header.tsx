import Link from "next/link"
import { useEffect, useState } from "react";
import styled, {css} from "styled-components"

const Header =() => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            const scroll = window.pageYOffset
            if(scroll > 10) {
                setIsScroll(true);
            }

            if(scroll < 10) {
                setIsScroll(false);
            }
        }
    }, [])
    
    

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
        <HeaderWrap isScroll={isScroll}>
            <HeaderContainer>
                <Nav>
                    <Link href="#intro" passHref><NavItem onClick={moveContent}>INTRO</NavItem></Link>
                    <Link href="#about" passHref><NavItem onClick={moveContent}>ABOUT</NavItem></Link>
                    <Link href="#works" passHref><NavItem onClick={moveContent}>WORKS</NavItem></Link>
                    <Link href="#contact" passHref><NavItem onClick={moveContent}>CONTACT</NavItem></Link>
                </Nav>
            </HeaderContainer>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.header<{isScroll: boolean}>`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 5;
    transition-property: background-color;
    transition-duration: .5s;
    transition-timing-function: ease-out;
    ${props => props.isScroll && css`
        background-color: #fff;
        box-shadow: rgb(0 0 0 / 30%) 0px -5px 20px 0px;
    `}
`
const HeaderContainer = styled.div`
    padding: 30px 0;
    max-width: 1100px;
    margin: 0 auto; 
`
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`

const NavItem = styled.a`
    font-size: 12px;
    cursor: pointer;
    color: #8ea7ca;
    font-weight: bold;
`

export default Header
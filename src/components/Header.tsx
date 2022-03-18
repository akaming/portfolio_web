import Link from "next/link"
import { useEffect, useState } from "react";
import styled, {css} from "styled-components"

const Header =() => {
    const [isScroll, setIsScroll] = useState(false);
    const [isNavi, setIsNavi] = useState([false,false,false,false]);

    useEffect(() => {
        window.onscroll = () => {
            const scroll = window.pageYOffset
            const about = document.getElementById('about')?.offsetTop || 0 ;
            const works = document.getElementById('works')?.offsetTop || 0;
            const contact = document.getElementById('contact')?.offsetTop || 0;
            const adjustedScroll = scroll + window.innerHeight / 2;

            if(scroll > 10) {
                setIsScroll(true);
            }

            if(scroll < 10) {
                setIsScroll(false);
            }

            if(adjustedScroll >= contact) {
                setIsNavi([false,false,false,true]);
            } else if (adjustedScroll >= works) {
                setIsNavi([false,false,true,false]);
            } else if (adjustedScroll >= about) {
                setIsNavi([false,true,false,false]);
            } else {
                setIsNavi([false,false,false,false]);
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
                    <Link href="#intro" passHref><NavItem isNavi={isNavi[0]} onClick={moveContent}>INTRO</NavItem></Link>
                    <Link href="#about" passHref><NavItem isNavi={isNavi[1]} onClick={moveContent}>ABOUT</NavItem></Link>
                    <Link href="#works" passHref><NavItem isNavi={isNavi[2]} onClick={moveContent}>WORKS</NavItem></Link>
                    <Link href="#contact" passHref><NavItem isNavi={isNavi[3]} onClick={moveContent}>CONTACT</NavItem></Link>
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

const NavItem = styled.a<{isNavi: boolean}>`
    font-size: 12px;
    cursor: pointer;
    color: #8ea7ca;
    font-weight: bold;
    ${props => props.isNavi && css`
        color: #000;
    `}
`

export default Header
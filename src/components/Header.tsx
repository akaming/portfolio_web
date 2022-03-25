import Link from "next/link"
import { useEffect, useState } from "react";
import styled, {css, ThemeProvider} from "styled-components"
import theme from "../../styles/theme.js"

const Header =() => {
    const [isScroll, setIsScroll] = useState(false);
    const [isNavi, setIsNavi] = useState(0);

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
                setIsNavi(3);
            } else if (adjustedScroll >= works) {
                setIsNavi(2);
            } else if (adjustedScroll >= about) {
                setIsNavi(1);
            } else {
                setIsNavi(0);
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
        <ThemeProvider theme={theme}>    
            <HeaderWrap isScroll={isScroll}>
                <HeaderContainer>
                    <Nav>
                        <Link href="#intro" passHref><NavItem isNavi={isNavi} naviNum={0} onClick={moveContent}>INTRO</NavItem></Link>
                        <Link href="#about" passHref><NavItem isNavi={isNavi} naviNum={1} onClick={moveContent}>ABOUT</NavItem></Link>
                        <Link href="#works" passHref><NavItem isNavi={isNavi} naviNum={2} onClick={moveContent}>WORKS</NavItem></Link>
                        <Link href="#contact" passHref><NavItem isNavi={isNavi} naviNum={3} onClick={moveContent}>CONTACT</NavItem></Link>
                    </Nav>
                </HeaderContainer>
            </HeaderWrap>
        </ThemeProvider>
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
    max-width: 1440px;
    margin: 0 auto; 
    padding: 30px 24px;
`
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`

const NavItem = styled.a<{isNavi: number, naviNum: number}>`
    font-size: 16px;
    cursor: pointer;
    color: #8ea7ca;
    font-weight: bold;
    ${props => props.isNavi === props.naviNum && css`
        color: #000;
    `}

    ${props => props.isNavi === 0 && props.naviNum === 0 && css`
        color: #8ea7ca;
    `}

    @media ${({theme}) => theme.device.tablet} {
        font-size: 12px;
    }
`

export default Header
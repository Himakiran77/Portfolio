import React, { useState } from 'react';
import styled from 'styled-components';
import hamMenu from '../assets/ham-menu.svg';
import close from '../assets/close.png';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1000;
  position: fixed;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  color: black;

  @media (max-width: 425px) {
    padding: 15px;
  }

  @media (max-width: 375px) {
    padding: 10px;
  }

  @media (max-width: 325px) {
    padding: 5px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImageContainer = styled.div`
  margin-right: 10px;

  @media (max-width: 425px) {
    margin-right: 8px;
  }

  @media (max-width: 375px) {
    margin-right: 6px;
  }

  @media (max-width: 325px) {
    margin-right: 4px;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 375px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 325px) {
    width: 25px;
    height: 25px;
  }
`;

const LogoSub = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 700;

  &:hover {
    text-decoration: none;
    color: BlueViolet;
  }

  @media (max-width: 425px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media (max-width: 325px) {
    font-size: 12px;
  }
`;

const MainNav = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinkWrapper = styled.li`
  margin: 0 15px;

  @media (max-width: 425px) {
    margin: 0 12px;
  }

  @media (max-width: 375px) {
    margin: 0 10px;
  }

  @media (max-width: 325px) {
    margin: 0 8px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 15px;

  &:hover {
    text-decoration: none;
    color: BlueViolet;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 13px;
  }

  @media (max-width: 325px) {
    font-size: 12px;
  }
`;

const HamMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamMenu = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 425px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 375px) {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 325px) {
    width: 24px;
    height: 24px;
  }
`;

const HamMenuClose = styled(HamMenu)`
  display: none;
`;

const SmallMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? '1' : '0')};
    position: fixed;
    right: 0;
    width: 100%;
    height: 30%;
    background-color: white;
    color: white;
    z-index: 999;
    transition: opacity 0.3s ease-in-out;
  }

   @media (max-width: 375px) {
    display: block;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? '1' : '0')};
    position: fixed;
    right: 0;
    width: 100%;
    height: 20%;
    background-color: white;
    color: white;
    z-index: 999;
    transition: opacity 0.3s ease-in-out;
  }
`;

const SmallMenuContent = styled.div`
  padding: 20px;

  @media (max-width: 425px) {
    padding: 15px;
  }

  @media (max-width: 375px) {
    padding: 10px;
  }

  @media (max-width: 325px) {
    padding: 5px;
  }
`;

const SmallMenuLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const SmallMenuLink = styled.li`
  margin: 10px 0;

  @media (max-width: 425px) {
    margin: 8px 0;
  }

  @media (max-width: 375px) {
    margin: 6px 0;
  }

  @media (max-width: 325px) {
    margin: 4px 0;
  }
`;

const CloseButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: block;
  margin: 0 auto 10px 370px;

  @media (max-width: 425px) {
    width: 18px;
    height: 18px;
    margin: 0 auto 10px 320px;
  }

  @media (max-width: 375px) {
    width: 16px;
    height: 16px;
    margin: 0 auto 10px 170px;
  }

  @media (max-width: 325px) {
    width: 14px;
    height: 14px;
    margin: 0 auto 10px 290px;
  }
`;

const Header = () => {
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);

  const toggleSmallMenu = () => {
    setIsSmallMenuOpen(!isSmallMenuOpen);
  };

  const closeSmallMenu = () => {
    setIsSmallMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <LogoImageContainer>
            <LogoImage src="https://i.postimg.cc/g08P8bkX/Profile.png" alt="Ram Maheshwari Logo Image" />
          </LogoImageContainer>
          <LogoSub>MUDAMBI HIMAKIRAN</LogoSub>
        </LogoContainer>
        <MainNav>
          <NavLinks>
            <NavLinkWrapper>
              <NavLink href="./">HOME</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <NavLink href="./#about">ABOUT</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <NavLink href="./#projects">PROJECTS</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <NavLink href="./#contact">CONTACT</NavLink>
            </NavLinkWrapper>
          </NavLinks>
          <HamMenuContainer>
            <HamMenu src={hamMenu} alt="hamburger menu" onClick={toggleSmallMenu} />
            <HamMenuClose src={hamMenu} alt="hamburger menu close" onClick={toggleSmallMenu} />
          </HamMenuContainer>
        </MainNav>
      </HeaderContent>
      <SmallMenu isOpen={isSmallMenuOpen}>
        <SmallMenuContent>
          <CloseButton src={close} alt="Close menu" onClick={closeSmallMenu} />
          <SmallMenuLinks>
            <SmallMenuLink>
              <NavLink href="./" onClick={closeSmallMenu}>Home</NavLink>
            </SmallMenuLink>
            <SmallMenuLink>
              <NavLink href="./#about" onClick={closeSmallMenu}>About</NavLink>
            </SmallMenuLink>
            <SmallMenuLink>
              <NavLink href="./#projects" onClick={closeSmallMenu}>Projects</NavLink>
            </SmallMenuLink>
            <SmallMenuLink>
              <NavLink href="./#contact" onClick={closeSmallMenu}>Contact</NavLink>
            </SmallMenuLink>
          </SmallMenuLinks>
        </SmallMenuContent>
      </SmallMenu>
    </HeaderContainer>
  );
};

export default Header;

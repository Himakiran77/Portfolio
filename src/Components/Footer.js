import React from 'react';
import styled from 'styled-components';
import linkedinIcon from '../assets/linkedin-dark.svg';
import githubIcon from '../assets/github-dark.svg';

const FooterContainer = styled.footer`
  background: black;
  color: #fff;
  padding: 3rem 0;
  text-align: center;
`;

const MainContainer = styled.div`
  max-width: 80rem;
  margin: auto;
  width: 90%;
`;

const UpperFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 425px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;

    @media (min-width: 425px) {
      margin-bottom: 0;
    }
  }
`;

const FooterHeading = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: table;
  margin-bottom: 1rem;
`;

const FooterHeading2 = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 425px) {
    justify-content: flex-end;
  }
`;

const SocialIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  filter: invert(100%);
  &:last-child {
    margin-right: 0;
  }
`;

const ShortDesc = styled.p`
    margin-top: 1rem;
    color: #eee;
    font-size: 1rem;
    line-height: 1;
`;

const LowerFooter = styled.div`
  font-size: 0.7rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <MainContainer>
        <UpperFooter>
          <FooterRow>
            <FooterHeading>Mudambi Himakiran</FooterHeading>
            <ShortDesc>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </ShortDesc>
          </FooterRow>
          <FooterRow>
            <FooterHeading2>Social</FooterHeading2>
            <SocialContainer>
              <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/mudambi-himakiran">
                <SocialIcon src={linkedinIcon} alt="Mudambi Himakiran LinkedIn Profile" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Himakiran77">
                <SocialIcon src={githubIcon} alt="Mudambi Himakiran GitHub Profile" />
              </a>
            </SocialContainer>
          </FooterRow>
        </UpperFooter>
        <LowerFooter>
          &copy; Copyright {currentYear}. Made by{' '}
          <FooterLink rel="noreferrer" target="_blank" href="./">
            Mudambi Himakiran
          </FooterLink>
        </LowerFooter>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;

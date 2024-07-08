import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background: #fafafa;
  padding: 6rem 0;

  @media (max-width: 425px) {
    padding: 5rem 0;
  }

  @media (max-width: 375px) {
    padding: 4rem 0;
  }

  @media (max-width: 325px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 80rem;
  margin: auto;
  width: 92%;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;
  color: #111;

  .heading-sec__main::after {
    content: '';
    position: absolute;
    top: calc(100% + 1.5rem);
    height: 5px;
    width: 1.8rem;
    background: #7843e9;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
  }

  @media (max-width: 425px) {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 375px) {
    font-size: 1.6rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 325px) {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
`;

const SubHeading = styled.span`
  display: block;
  text-align: center;
  color: #555;
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 50rem;
  margin: auto;
  line-height: 1.6;

  @media (max-width: 425px) {
    font-size: 1rem;
    line-height: 1.4;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }

  @media (max-width: 325px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }

  @media (max-width: 425px) {
    grid-gap: 2.5rem;
    margin-top: 50px;
  }

  @media (max-width: 375px) {
    grid-gap: 2rem;
    margin-top: 40px;
  }

  @media (max-width: 325px) {
    grid-gap: 1.5rem;
    margin-top: 30px;
  }
`;

const MainContent = styled.div`
  flex: 1;
`;

const DetailsWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 425px) {
    margin-bottom: 30px;
  }

  @media (max-width: 375px) {
    margin-bottom: 25px;
  }

  @media (max-width: 325px) {
    margin-bottom: 20px;
  }
`;

const ContentTitle = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 3rem;
  padding: 14px;

  @media (max-width: 425px) {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
    padding: 12px;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    padding: 10px;
  }

  @media (max-width: 325px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    padding: 8px;
  }
`;

const ContentPara = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 60rem;
  line-height: 1.7;
  margin-bottom: 1rem;

  strong {
    font-weight: bold;
  }

  a {
    text-decoration: underline;
    font-weight: 700;
    color: #7843E9;
    margin: 0 3px;

    &:hover {
      color: #5f2eea;
    }
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 325px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }
`;

const SkillsWrapper = styled.div`
  flex: 1;
`;

const SkillsTitle = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 3rem;
  margin-left: 40px;

  @media (max-width: 425px) {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 325px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    margin-left: 30px;
  }
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const SkillItem = styled.li`
  padding: 1rem 0.8rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1rem;
  background: rgba(153, 153, 153, 0.2);
  border-radius: 5px;
  font-weight: 600;
  color: #666;
  list-style: none;

  @media (max-width: 425px) {
    font-size: 0.9rem;
    padding: 0.9rem 0.8rem;
    margin-bottom: 1.2rem;
    margin-right: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 0.8rem;
    padding: 0.8rem 0.6rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 325px) {
    font-size: 0.7rem;
    padding: 0.7rem 0.4rem;
    margin-bottom: 0.8rem;
    margin-right: 0.8rem;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: #7843e9;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5f2eea;
  }

  @media (max-width: 425px) {
    padding: 10px 25px;
    font-size: 0.9rem;
  }

  @media (max-width: 375px) {
    padding: 8px 20px;
    font-size: 0.8rem;
  }

  @media (max-width: 325px) {
    padding: 6px 15px;
    font-size: 0.7rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionHeading>
          <span className="heading-sec__main">ABOUT ME</span>
        </SectionHeading>
        <SubHeading>
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
        </SubHeading>
        <ContentWrapper>
          <MainContent>
            <DetailsWrapper>
              <ContentTitle>Get to know me!</ContentTitle>
              <ContentPara>
                I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
              </ContentPara>
              <ContentPara>
                I also like sharing content related to the stuff that I have learned over a year in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a rel="noreferrer" href="https://www.linkedin.com/in/mudambi-himakiran" target="_blank">LinkedIn</a>.
              </ContentPara>
              <ContentPara>
                I'm open to <strong>Job</strong> opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to <strong>contact</strong> me.
              </ContentPara>
            </DetailsWrapper>
            <ContactButton href="./#contact">Contact</ContactButton>
          </MainContent>
          <SkillsWrapper>
            <SkillsTitle>My Skills</SkillsTitle>
            <SkillsList>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>React</SkillItem>
              <SkillItem>React-Native</SkillItem>
              <SkillItem>Redux</SkillItem>
              <SkillItem>Python</SkillItem>
              <SkillItem>GIT</SkillItem>
              <SkillItem>Github</SkillItem>
              <SkillItem>APIs</SkillItem>
              <SkillItem>MySQL</SkillItem>
            </SkillsList>
          </SkillsWrapper>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;

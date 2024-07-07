import React from 'react';
import styled from 'styled-components';
import Ecommerce from "../assets/E-Commerce.png";
import Farmroots from "../assets/Farmroots.png";
import Legalapp from "../assets/LegalApp.png";
import Sockets from "../assets/Sockets.png";

const ProjectsSection = styled.section`
  padding: 1rem 0;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: auto;
  width: 92%;

  @media (max-width: 425px) {
    width: 95%;
  }

  @media (max-width: 375px) {
    width: 98%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
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
  }

  @media (max-width: 375px) {
    font-size: 1.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1.4rem;
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
    font-size: 1.1rem;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-gap: 3rem;
  }

  @media (max-width: 375px) {
    grid-gap: 2rem;
  }

  @media (max-width: 320px) {
    grid-gap: 1rem;
  }
`;

const ProjectRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 90px;
    gap: inherit;
  }

`;

const ProjectImageContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;

   @media (min-width: 425px) {
   margin-top: 90px;
}
    @media (min-width: 375px) {
   margin-top: 90px;
}
    @media (min-width: 320px) {
   margin-top: 90px;
}
`;

const ProjectImage1 = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const ProjectImage2 = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  position: relative;

  @media (min-width: 768px) {
    max-width: 30%;
    // left: 320px;
  }

  @media (min-width: 425px) {
   max-width: 30%;
}

  @media (min-width: 375px) {
    max-width: 30%;
  }
   
  @media (min-width: 320px) {
    max-width: 30%;
  }
`;

const ProjectImage3 = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  right: 0;
  position: relative;

  @media (min-width: 768px) {
    max-width: 140%;
    right: 100px;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-top: 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 425px) {
    font-size: 1.8rem;
  }

  @media (max-width: 375px) {
    font-size: 1.6rem;
  }

  @media (max-width: 325px) {
    font-size: 1.4rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }

  @media (max-width: 325px) {
    font-size: 0.9rem;
  }
`;

const CaseStudyLink = styled.a`
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
    font-size: 1.1rem;
  }

  @media (max-width: 375px) {
    padding: 8px 20px;
    font-size: 1rem;
  }

  @media (max-width: 325px) {
    padding: 6px 15px;
    font-size: 0.9rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeading>
          <span className="heading-sec__main">Projects</span>
        </SectionHeading>
        <SubHeading>
          Here you will find some of the personal and clients projects that I created with each project containing its own case study
        </SubHeading>
        <ProjectsContent>
          <ProjectRow>
            <ProjectImageContainer>
              <ProjectImage src={Ecommerce} alt="Software Screenshot" loading="lazy" />
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>E-Commerce Filtering and Sorting</ProjectTitle>
              <ProjectDescription>
                Dopefolio is a successful Open-Source project that I created which has been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc. & used by thousands of developers globally
              </ProjectDescription>
              <CaseStudyLink href="https://himakiran77.github.io/E_commerce_website-react" target="_blank">Case Study</CaseStudyLink>
            </ProjectContent>
          </ProjectRow>
          <ProjectRow>
            <ProjectImageContainer>
              <ProjectImage1 src={Farmroots} alt="Software Screenshot" loading="lazy" />
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>Farmroots</ProjectTitle>
              <ProjectDescription>
                Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.
              </ProjectDescription>
              <CaseStudyLink href="https://myfarmroots.vercel.app/" target="_blank">Case Study</CaseStudyLink>
            </ProjectContent>
          </ProjectRow>
          <ProjectRow>
            <ProjectImageContainer>
              <ProjectImage2 src={Legalapp} alt="Software Screenshot" loading="lazy" />
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>Legal App</ProjectTitle>
              <ProjectDescription>
                I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.
              </ProjectDescription>
              <CaseStudyLink href="https://github.com/Himakiran77/legal-frontendreactnative-mobileapp" target="_blank">Case Study</CaseStudyLink>
            </ProjectContent>
          </ProjectRow>
          <ProjectRow>
            <ProjectImageContainer>
              <ProjectImage3 src={Sockets} alt="Software Screenshot" loading="lazy" />
            </ProjectImageContainer>
            <ProjectContent>
              <ProjectTitle>Sockets iO chat</ProjectTitle>
              <ProjectDescription>
                Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.
              </ProjectDescription>
              <CaseStudyLink href="https://dost-1sjj.onrender.com/" target="_blank">Case Study</CaseStudyLink>
            </ProjectContent>
          </ProjectRow>
        </ProjectsContent>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import commonBg from '../assets/common-bg.svg';

const AboutSection = styled.section`
  color: #fff;
  background: linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${commonBg});
  background-position: center;
  height: 100vh;
  max-height: 60rem;
  position: relative;

  @media (max-width: 375px) {
    height: 50vh;
  }
`;

const HomeHeroContent = styled.div`
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 425px) {
    padding: 0 20px;
  }

  @media (max-width: 375px) {
    padding: 0 15px;
  }

  @media (max-width: 325px) {
    padding: 0 10px;
  }
`;

const HeadingPrimary = styled.h1`
  font-size: 2.3rem;
  margin-bottom: 40px;
  margin-top: 250px;
  text-transform: uppercase;
  text-align: center;
  color: #111;
  font-weight: 800;
  display: inline-block;

  @media (max-width: 425px) {
    font-size: 2rem;
    margin-top: 120px;
    margin-bottom: 30px;
  }

  @media (max-width: 375px) {
    font-size: 1.8rem;
    margin-top: 100px;
    margin-bottom: 25px;
  }

  @media (max-width: 325px) {
    font-size: 1.6rem;
    margin-top: 80px;
    margin-bottom: 20px;
  }
`;

const HomeHeroInfo = styled.div`
  position: relative;
  margin-bottom: 60px;

  @media (max-width: 425px) {
    margin-bottom: 50px;
  }

  @media (max-width: 375px) {
    margin-bottom: 40px;
  }

  @media (max-width: 325px) {
    margin-bottom: 30px;
  }
`;

const TextPrimary = styled.p`
  font-size: 1.1rem;
  margin: 0 auto;
  max-width: 80rem;
  color: #333;
  text-align: center;
  width: 100%;
  line-height: 1.6;

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

const HomeHeroCta = styled.div`
  text-align: center;
`;

const Button = styled.a`
  font-size: 1.2rem;
  padding: 15px 70px;
  background: #7843e9;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  text-decoration: none;
  
  &:hover {
    background-color: #5f2eea;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
    padding: 12px 60px;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
    padding: 10px 50px;
  }

  @media (max-width: 325px) {
    font-size: 0.9rem;
    padding: 8px 40px;
  }
`;

const MouseScrollContainer = styled.div`
  @media (min-width: 426px) {
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 426px) and (max-width: 425px) {
    margin-top: 60px;
  }

  @media (min-width: 426px) and (max-width: 375px) {
    margin-top: 40px;
  }

  @media (min-width: 426px) and (max-width: 325px) {
    margin-top: 20px;
  }
`;

const Mouse = styled.div`
  @media (min-width: 426px) {
    width: 24px;
    height: 40px;
    border: 2px solid #282c34;
    border-radius: 12px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 8px;
      background-color: #282c34;
      border-radius: 2px;
      animation: mouse-scroll 2s infinite;
    }

    @keyframes mouse-scroll {
      0% {
        opacity: 1;
        top: 6px;
      }
      100% {
        opacity: 0;
        top: 20px;
      }
    }

    @media (max-width: 425px) {
      width: 22px;
      height: 36px;
    }

    @media (max-width: 375px) {
      width: 20px;
      height: 32px;
    }

    @media (max-width: 325px) {
      width: 18px;
      height: 28px;
    }
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #7843e9;
  color: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  &:hover {
    background-color: #5f2eea;
  }

  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollToTopButton onClick={scrollToTop} className={isVisible ? 'visible' : ''}>
      ↑
    </ScrollToTopButton>
  );
};

const Home = () => {
  return (
    <AboutSection id="./">
      <HomeHeroContent id="./#Home">
        <HeadingPrimary>Hey, I'm Mudambi Himakiran</HeadingPrimary>
        <HomeHeroInfo>
          <TextPrimary>
            A Result-Oriented Web Developer building Websites, Mobile Applications, and Web Applications that leads to the success
            of the overall product.
          </TextPrimary>
        </HomeHeroInfo>
        <HomeHeroCta>
          <Button href="./#projects">Projects</Button>
        </HomeHeroCta>
        <MouseScrollContainer>
          <Mouse />
        </MouseScrollContainer>
      </HomeHeroContent>
      <ScrollToTop />
    </AboutSection>
  );
};

export default Home;































// import React from 'react';
// import styled from 'styled-components';
// // import linkedinIcon from '../assets/linkedin-dark.svg';
// // import githubIcon from '../assets/github-dark.svg';
// import commonBg from '../assets/common-bg.svg';

// const AboutSection = styled.section`
//   color: #fff;
//   background: linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${commonBg});
//   background-position: center;
//   height: 100vh;
//   max-height: 60rem;
//   position: relative;

//    @media (max-width: 375px) {
//     height: 50vh;
//   }
// `;

// const HomeHeroContent = styled.div`
//   margin: 0 auto;
//   max-width: 600px;

//   @media (max-width: 425px) {
//     padding: 0 20px;
//   }

//   @media (max-width: 375px) {
//     padding: 0 15px;
//   }

//   @media (max-width: 325px) {
//     padding: 0 10px;
//   }
// `;

// const HeadingPrimary = styled.h1`
//   font-size: 2.3rem;
//   margin-bottom: 40px;
//   margin-top: 250px;
//   text-transform: uppercase;
//   text-align: center;
//   color: #111;
//   font-weight: 800;
//   display: inline-block;

//   @media (max-width: 425px) {
//     font-size: 2rem;
//     margin-top: 120px;
//     margin-bottom: 30px;
//   }

//   @media (max-width: 375px) {
//     font-size: 1.8rem;
//     margin-top: 100px;
//     margin-bottom: 25px;
//   }

//   @media (max-width: 325px) {
//     font-size: 1.6rem;
//     margin-top: 80px;
//     margin-bottom: 20px;
//   }
// `;

// const HomeHeroInfo = styled.div`
//   position: relative;
//   margin-bottom: 60px;

//   @media (max-width: 425px) {
//     margin-bottom: 50px;
//   }

//   @media (max-width: 375px) {
//     margin-bottom: 40px;
//   }

//   @media (max-width: 325px) {
//     margin-bottom: 30px;
//   }
// `;

// const TextPrimary = styled.p`
//   font-size: 1.1rem;
//   margin: 0 auto;
//   max-width: 80rem;
//   color: #333;
//   text-align: center;
//   width: 100%;
//   line-height: 1.6;

//   @media (max-width: 425px) {
//     font-size: 1rem;
//     line-height: 1.5;
//   }

//   @media (max-width: 375px) {
//     font-size: 0.9rem;
//     line-height: 1.4;
//   }

//   @media (max-width: 325px) {
//     font-size: 0.8rem;
//     line-height: 1.3;
//   }
// `;

// const HomeHeroCta = styled.div`
//   text-align: center;
// `;

// const Button = styled.a`
//   font-size: 1.2rem;
//   padding: 15px 70px;
//   background: #7843e9;
//   color: #fff;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   display: inline-block;
//   font-weight: 700;
//   border-radius: 5px;
//   box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
//   transition: transform 0.3s;
//   text-decoration: none;
  
//   &:hover {
//     background-color: #5f2eea;
//   }

//   @media (max-width: 425px) {
//     font-size: 1.1rem;
//     padding: 12px 60px;
//   }

//   @media (max-width: 375px) {
//     font-size: 1rem;
//     padding: 10px 50px;
//   }

//   @media (max-width: 325px) {
//     font-size: 0.9rem;
//     padding: 8px 40px;
//   }
// `;

// const Sidebar = styled.div`
//   display: none;

//   @media (min-width: 426px) {
//     position: absolute;
//     top: 35%;
//     transform: translateY(-50%);
//     background: #fff;
//     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//     padding: 0.5rem;
//     display: block;
//     width: 30px; /* Adjust sidebar width */
//     height: 80px; /* Adjust sidebar height */
//   }

//   @media (min-width: 426px) and (max-width: 425px) {
//     top: 30%;
//   }

//   @media (min-width: 426px) and (max-width: 375px) {
//     top: 25%;
//   }

//   @media (min-width: 426px) and (max-width: 325px) {
//     top: 20%;
//   }
// `;

// const HomeHeroSocial = styled.div`
//   display: none;

//   @media (min-width: 426px) {
//     margin: 10px 0;
//     display: block;
//   }

//   @media (min-width: 426px) and (max-width: 425px) {
//     margin: 8px 0;
//   }

//   @media (min-width: 426px) and (max-width: 375px) {
//     margin: 6px 0;
//   }

//   @media (min-width: 426px) and (max-width: 325px) {
//     margin: 4px 0;
//   }
// `;

// const MouseScrollContainer = styled.div`

//   @media (min-width: 426px) {
//     margin-top: 100px;
//     display: flex;
//     justify-content: center;
//   }

//   @media (min-width: 426px) and (max-width: 425px) {
//     margin-top: 60px;
//   }

//   @media (min-width: 426px) and (max-width: 375px) {
//     margin-top: 40px;
//   }

//   @media (min-width: 426px) and (max-width: 325px) {
//     margin-top: 20px;
//   }
// `;

// const Mouse = styled.div`

//   @media (min-width: 426px) {
//     width: 24px;
//     height: 40px;
//     border: 2px solid #282c34;
//     border-radius: 12px;
//     position: relative;
//     // margin-top: 100px;

//     &::before {
//       content: '';
//       position: absolute;
//       top: 6px;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 4px;
//       height: 8px;
//       background-color: #282c34;
//       border-radius: 2px;
//       animation: mouse-scroll 2s infinite;
//     }

//     @keyframes mouse-scroll {
//       0% {
//         opacity: 1;
//         top: 6px;
//       }
//       100% {
//         opacity: 0;
//         top: 20px;
//       }
//     }

//     @media (max-width: 425px) {
//       width: 22px;
//       height: 36px;
//     }

//     @media (max-width: 375px) {
//       width: 20px;
//       height: 32px;
//     }

//     @media (max-width: 325px) {
//       width: 18px;
//       height: 28px;
//     }
//   }
// `;

// const Home = () => {
//   return (
//     <AboutSection id="./">
//       {/* <Sidebar>
//         <HomeHeroSocial>
//           <a href="https://linkedin.com/in/mudambi-himakiran" target="_blank" rel="noreferrer">
//             <img src={linkedinIcon} alt="LinkedIn Icon" style={{ width: '30px', height: '30px' }} />
//           </a>
//         </HomeHeroSocial>
//         <HomeHeroSocial>
//           <a href="https://github.com/Himakiran77" target="_blank" rel="noreferrer">
//             <img src={githubIcon} alt="GitHub Icon" style={{ width: '30px', height: '30px' }} />
//           </a>
//         </HomeHeroSocial>
//       </Sidebar> */}
//       <HomeHeroContent id="./#Home">
//         <HeadingPrimary>Hey, I'm Mudambi Himakiran</HeadingPrimary>
//         <HomeHeroInfo>
//           <TextPrimary>
//             A Result-Oriented Web Developer building Websites, Mobile Applications and Web Applications that leads to the success
//             of the overall product.
//           </TextPrimary>
//         </HomeHeroInfo>
//         <HomeHeroCta>
//           <Button href="./#projects">Projects</Button>
//         </HomeHeroCta>
//         <MouseScrollContainer>
//           <Mouse />
//         </MouseScrollContainer>
//       </HomeHeroContent>
//     </AboutSection>
//   );
// };

// export default Home;
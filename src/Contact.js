import React from 'react';
import styled from 'styled-components';
import commonBg from "./assets/common-bg.svg";

const ContactSection = styled.section`
  // background: linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${commonBg});
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

  @media (max-width: 325px) {
    width: 100%;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  // margin-bottom: 3.5rem;
  position: relative;
  color: #111;

  .heading-sec__main--lt::after {
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

  @media (max-width: 325px) {
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

  @media (max-width: 325px) {
    font-size: 0.9rem;
  }
`;

const FormContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background: white;
  padding: 4rem;
  margin-top: 6rem;
  max-width: 80rem;
  text-align: right;
  width: 55%;
  border-radius: 5px;
  margin: 5rem auto 0 auto;

  @media (max-width: 425px) {
    width: 80%;
    padding: 3rem;
  }

  @media (max-width: 375px) {
    width: 85%;
    padding: 2.5rem;
  }

  @media (max-width: 325px) {
    width: 90%;
    padding: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 425px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 375px) {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 325px) {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  color: #666;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;
  text-align: left;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }

  @media (max-width: 375px) {
    font-size: 0.8rem;
  }

  @media (max-width: 325px) {
    font-size: 0.7rem;
  }
`;

const Input = styled.input`
  color: #333;
  padding: 1rem;
  width: 100%;
  border: 1px solid #ebebeb;
  font-size: 0.9rem;
  background: #f0f0f0;
  border-radius: 5px;
  font-weight: 600;

  @media (max-width: 425px) {
    padding: 0.8rem;
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    padding: 0.7rem;
    font-size: 0.7rem;
  }

  @media (max-width: 325px) {
    padding: 0.6rem;
    font-size: 0.6rem;
  }
`;

const TextArea = styled.textarea`
  color: #333;
  padding: 1rem;
  width: 100%;
  border: 1px solid #ebebeb;
  font-size: 0.9rem;
  background: #f0f0f0;
  border-radius: 5px;
  font-weight: 600;

  @media (max-width: 425px) {
    padding: 0.8rem;
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    padding: 0.7rem;
    font-size: 0.7rem;
  }

  @media (max-width: 325px) {
    padding: 0.6rem;
    font-size: 0.6rem;
  }
`;

const SubmitButton = styled.button`
  background-color: #7843e9;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  // width: 30%;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  font-weight: 700;
  align-self: flex-end;

  &:hover {
    background-color: #5f2eea;
  }

  @media (max-width: 425px) {
    width: 40%;
    padding: 0.8rem 1.6rem;
    font-size: 0.7rem;
  }

  @media (max-width: 375px) {
    width: 50%;
    padding: 0.7rem 1.4rem;
    font-size: 0.6rem;
  }

  @media (max-width: 325px) {
    width: 60%;
    padding: 0.6rem 1.2rem;
    font-size: 0.5rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeading>
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
        </SectionHeading>
        {/* <SubHeading>
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
        </SubHeading>
        <FormContainer>
          <Form action="#" method="post">
            <input type="hidden" name="form-name" value="form 1" />
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Input required placeholder="Enter Your Name" type="text" name="name" id="name" />
            </FormField>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input required placeholder="Enter Your Email" type="email" name="email" id="email" />
            </FormField>
            <FormField>
              <Label htmlFor="message">Message</Label>
              <TextArea required cols="30" rows="10" placeholder="Enter Your Message" name="message" id="message"></TextArea>
            </FormField>
            <SubmitButton type="submit">
              Submit
            </SubmitButton>
          </Form>
        </FormContainer> */}
      </Container>
    </ContactSection>
  );
};

export default Contact;

import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

import Input from "./Input";

const Sidebar = () => {
  return (
    <Container xs={4} md={8}>
      <LogoWrapper>
        <img src={logo} alt="" />

        <h3>
          It’s a delight to have you <br /> <span>onboard!</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Company Name</h3>
        <Input placeholder="e.g. Example Inc" />
        <h3 style={{ paddingRight: "15rem" }}>Industry</h3>
        <Input placeholder="e.g. Industry Type" />

        <h3>Company Size</h3>
        <Span>
          <button>1-20</button>
          <button> 21-50 </button>
          <button> 51-200 </button>
          <button> 201-500 </button>
          <button> 500+</button>
        </Span>

        <button>Get Started</button>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #808080;
    font-weight: bold;
    font-size: 100%;
    padding-right: 12rem;
    padding-top: 2%;
    display: flex;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    padding-right: 3%;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #95e1d3;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
      background-color: #66bfbf;
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 30px;
    margin-left: 2rem;
  }

  h3 {
    padding-top: 3%;
    color: #7a86b6;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #a8a4ce;
    font-size: 22px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(234, 246, 246);
  border-radius: 5%;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 5rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

const Span = styled.div`
  margin-left: 5%;
  display: flex;
  button {
    align-item: center;
    height: 2.5rem;
    width: 5rem;
    max-width: 70px;
    min-width: 70px;
    margin-right: 2%;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #95e1d3;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }
`;
export default Sidebar;

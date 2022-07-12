import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <Container>
      <Sidebar />
      <div>
        <h4>Terms of Use | Privacy Policy</h4>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1%;
  margin-bottom: 7%;
  margin-left: 32%;
  margin-right: 33%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  h4 {
    justify-content: center;
    margin-left: 5rem;
    color: #808080;
    font-weight: bold;
    font-size: 100%;
    padding-right: 12.5%;
    padding-top: 2%;
    display: flex;
  }
`;

export default App;

import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const StyledH1 = styled.h1`
  font-weight: 300;
`;

const About = () => {
  return (
    <Main>
      <StyledH1>About Carbon-Lo</StyledH1>
    </Main>
  );
};

export default About;

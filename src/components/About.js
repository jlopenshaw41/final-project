import React from "react";
import styled from "styled-components";
import reactiveEnergyLogo from "../../src/assets/reactiveEnergyLogo.png";
import leafLogo from "../../src/assets/leafLogo.png";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const StyledH1 = styled.h1`
  font-family: "Economica", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  margin-bottom: 0;
  margin-top: 10px;

  @media only screen and (max-width: 750px) {
    font-size: 2.5rem;
  }
`;

const StyledH2 = styled.h2`
  font-family: "Economica", sans-serif;
  font-weight: 400;
  font-size: 2rem;

  @media only screen and (max-width: 750px) {
    font-size: 1.5rem;
  }
`;

const StyledP = styled.p`
  width: 70%;
  line-height: 1.7;

  @media only screen and (max-width: 750px) {
    width: 80%;
  }
`;

const StyledImg = styled.img`
  margin-bottom: 50px;

@media only screen and (max-width: 750px) {
    margin-bottom: 100px;
  }
`;

const About = () => {
  return (
    <Main>
      <img src={leafLogo} alt="Carbon-Lo logo" />
      <StyledH1>CARBON-LO</StyledH1>
      <StyledH2>ENERGY MONITORING MADE SMART</StyledH2>
      <StyledP>
        Our inspiration for Carbon-Lo came from{" "}
        <a href="https://www.reactive.energy/">Reactive Energy</a>. If you pop
        over to their website you can see that a large chunk of domestic
        electricity use in the UK can be attributed to just three appliances
        washing machines, dishwashers and tumble dryers. Reactive Energy track
        the carbon intensity of the grid in real time and runs the appliances
        when it is lowest. Appliances are plugged in via the smart plug and you
        can continue using your appliances as normal; the technology works out
        the best time to switch it on. You can <a href="mailto:info@reactive.energy">contact them</a> to find out more
      </StyledP>
      <StyledP>
        Being part of the first round of testing for the product and keenly
        interested in energy solutions, we were really excited about the
        possibilities of this tech. We use the data from Reactive Energy to
        bring the energy readouts straight to you, in the easiest way. We wanted
        to create an easy access way of reviewing the low carbon energy
        proportion so you could decide when you to use your appliances. You can
        choose to simply look at the energy chart here on the app or you can
        click to subscribe and receive a text alert when the carbon intensity
        hits a particular low threshold.
      </StyledP>
      <StyledImg src={reactiveEnergyLogo} alt="Reactive Energy Logo"/>
    </Main>
  );
};

export default About;

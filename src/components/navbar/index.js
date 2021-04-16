import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive/index";
import { MobileNavLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px #36AB9C;
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    position: fixed;
    top: 0;
    background-color: #F5F7F3;
    z-index: 2;
`;

const LeftSection = styled.div`
    display: flex;
    margin-right: 10px;
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: left;
`;

const RightSection = styled.div`
    display: flex;
`;

export function NavBar(props) {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  
    return (
      <NavbarContainer>
        <LeftSection>
          <Logo />
        </LeftSection>
        <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
        <RightSection>
          {!isMobile && <Accessibility />}
          {isMobile && <MobileNavLinks />}
        </RightSection>
      </NavbarContainer>
    );
  }
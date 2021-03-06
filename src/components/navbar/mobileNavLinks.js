import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { NavLink as Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #F5F7F3;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 300;
  font-size: 25px;
  display: flex;

  margin-bottom: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-family: "Economica", sans-serif;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);
  
    return (
      <NavLinksContainer>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
            <LinksWrapper>
              <LinkItem><NavLink to="/about">About</NavLink></LinkItem>
              <LinkItem><NavLink to="/contact">Contact</NavLink></LinkItem>
              <Marginer />
              <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}

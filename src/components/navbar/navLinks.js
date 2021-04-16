import React from "react";
import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";

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
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.2rem;
  color: #222;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 6px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    border-top: 6px solid #36AB9C;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-weight: 400;
`;

export function NavLinks(props) {
    return (
      <NavLinksContainer>
        <LinksWrapper>
            <LinkItem><NavLink to="/about">About</NavLink></LinkItem>
            <LinkItem><NavLink to="/contact">Contact</NavLink></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
  );
}

//<LinkItem><Link to="/about">About</Link></LinkItem>
//<LinkItem><Link to="/contact">Contact Us</Link></LinkItem>
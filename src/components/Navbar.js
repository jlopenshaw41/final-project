import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: fex-start;
  border-bottom: 1px solid #454545;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;
const NavLink = styled(Link)`
  color: #427314;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;

  &.active {
    color: #454545;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #454545;
}
`;
const Bars = styled(FaBars)`
  display: none;
  color: #427314;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #427314;
    padding: 10px 22px;
    color #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #427314;
    }
`;
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

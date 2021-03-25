import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Button = styled.button`
    border: 0;
    outline: 0;
    padding: 8px 1em;
    color: #222;
    font-size: 13px;
    font-weight: 600;
    border-radius: 20px;
    text-decoration: none;
    background-color: #A6A6A6;
    border: 2px solid #36AB9C;
    transition: all 240ms ease-in-out;
    cursor: pointer;

    &:hover {
    color: #fff;
    background-color: #36AB9C;
    }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function Accessibility(props) {
    return (
      <AccessibilityContainer>
        <Button><NavLink to="/register">Register</NavLink></Button>
        <Button><NavLink to="/login">Login</NavLink></Button>
      </AccessibilityContainer>
    );
  }












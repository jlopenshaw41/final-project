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
    padding: 2px 1em;
    color: #222;
    font-size: 25px;
    font-weight: 700;
    border-radius: 20px;
    font-family: "Amatic SC";
    text-decoration: none;
    background-color: #F5F7F3;
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
  font-family: inherit;
`;

export function Accessibility(props) {
    return (
      <AccessibilityContainer>
        <Button><NavLink to="/register">Energy in my Pocket!</NavLink></Button>
      </AccessibilityContainer>
    );
  }












import React from "react";
import styled from "styled-components";
import leafLogo from "../../assets/leafLogo.png"
import { Link } from "react-router-dom";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
  }
`;

//const LogoText = styled.h2`
//  font-size: 25px;
//  margin: 0;
//  margin-left: 4px;
//  color: #222;
//  font-weight: 700;
//`;

export function Logo(props) {
    return (
      <LogoWrapper>
        <LogoImg><Link to="/">
          <img src={leafLogo} alt="Carbon-Lo logo"/>
          </Link>
        </LogoImg>
      </LogoWrapper>
    );
  }






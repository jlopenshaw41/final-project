import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import register from "../services/register";

const StyledButton = styled(Link)`
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
`;

const StyledInput = styled.input`
display: block;
width: 100%;
padding: 20px 15px;
background-color: #F5F7F3;
border-radius: 8px;
border: 2px solid #36AB9C;
margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
`;

const Register = ({ handleChange, userDetails, setUserDetails }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    register(userDetails);
    setUserDetails({
      email: "",
      phone: "",
    })
  };
  return (
    <Container>
      <h2>Subscribe and say hello to Carbon-Lo washing cycles</h2>
      <StyledForm action="submit" onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChange}
          type="email"
          required="true"
          placeholder="email..."
          name="email"
          value={userDetails.email}
        />
        <StyledInput
          onChange={handleChange}
          type="phone"
          required="true"
          placeholder="phone...."
          name="phone"
          value={userDetails.phone}
        />
        <StyledButton type="submit" onClick={handleSubmit}>Hello Carbon-Lo!</StyledButton>
      </StyledForm>
    </Container>
  );
};

export default Register;
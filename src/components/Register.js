import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import register from "../services/register";

const StyledButton = styled(Link)`
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
padding: 10px 15px;
background-color: #F8F8F8;
border-radius: 8px;
transition: 0.4s;
margin-bottom: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
`;

const Register = ({ handleChange, userDetails }) => {
  const { password, confirmPassword } = userDetails;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      console.log("passwords match");
      register(userDetails);
    }
  };
  return (
    <Container>
      <h2>Register</h2>
      <StyledForm action="submit" onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChange}
          type="email"
          required
          placeholder="email..."
          name="email"
        />
        <StyledInput
          onChange={handleChange}
          type="phone"
          required
          placeholder="phone...."
          name="phone"
        />
        <StyledInput
          onChange={handleChange}
          type="password"
          required
          placeholder="password..."
          name="password"
        />
        <StyledInput
          onChange={handleChange}
          type="password"
          required
          placeholder="confirm password..."
          name="confirmPassword"
        />
        <StyledButton type="submit" onClick={handleSubmit}>Register</StyledButton>
      </StyledForm>
      <Link to="/login">Already a member? Login here.</Link>
    </Container>
  );
};

export default Register;
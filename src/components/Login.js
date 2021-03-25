import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import login from "../services/login";

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
`
;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
`;

const Login = ({
  handleChange,
  setUserAccount,
  userAccount,
  userDetails,
  setRedirect,
  redirect,
}) => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    login(userDetails, setUserAccount, setRedirect);

    if (redirect === true) {
      history.push("/members");
    }
  };

  return (
    <Container>
      <h2>Login</h2>
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
          type="password"
          required
          placeholder="password..."
          name="password"
        />
        <StyledButton type="submit" onClick={handleSubmit}>Login</StyledButton>
      </StyledForm>
      <Link to="/register">Not a member? Register here.</Link>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import styled from "styled-components";
import NavBarLogin from "./navBarLogin";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15%;

  i {
    color: #454851;
    margin: 1%;
  }
`;

const StyledInput = styled.input`
  font-size: 20px;
  line-height: 25px;
  width: 200px;
  margin: 10px auto;
  padding-left: 5px;
  border: 2px solid #454851;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  font-size: 20px;
  width: 120px;
  margin: 10px auto;
  background-color: #4d7c8a;
  border: 2px solid #454851;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: gray;
  }
`;

const Login = props => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const userHandler = e => {
    setUser(e.target.value);
  };

  const passHandler = e => {
    setPass(e.target.value);
  };

  const login = e => {
    e.preventDefault();

    const credentials = {
      username: user,
      password: pass
    };

    AxiosWithAuth()
      .post("/api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("username", res.data.username);
        props.history.push("/tools");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <NavBarLogin />
      <StyledForm onSubmit={login}>
        <i class="fas fa-tools fa-5x"></i>
        <StyledInput
          type="text"
          value={user}
          onChange={userHandler}
          placeholder="Username"
          autoComplete="off"
          required
        />
        <StyledInput
          type="password"
          value={pass}
          onChange={passHandler}
          placeholder="Password"
          autoComplete="off"
          required
        />
        <StyledButton>Log In</StyledButton>
        <StyledButton
          onClick={() => {
            props.history.push("/sign-up");
          }}
        >
          Sign Up
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default Login;

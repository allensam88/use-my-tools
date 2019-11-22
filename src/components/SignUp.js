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

const StyledWarning = styled.p`
  color: red;
  font-weight: bold;
`;

const StyledAccept = styled.p`
  color: green;
  font-weight: bold;
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

const SignUp = props => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [location, setLocation] = useState("");

  const userHandler = e => {
    setUser(e.target.value);
  };

  const passHandler = e => {
    setPass(e.target.value);
  };

  const confirmHandler = e => {
    setConfirmPass(e.target.value);
  };

  const locationHandler = e => {
    setLocation(e.target.value);
  };

  const register = e => {
    const newUser = {
      username: user,
      password: pass,
      location: location
    };

    if (pass === confirmPass) {
      e.preventDefault();
      AxiosWithAuth()
        .post("/api/auth/register", newUser)
        .then(res => {
          console.log(res);
          props.history.push("/");
        })
        .catch(err => console.log(err));
      setUser("");
      setPass("");
      setConfirmPass("");
      setLocation("");
    } else {
      e.preventDefault();
      alert("Error! Passwords do not match!");
    }
  };

  const passConfirm = () => {
    return (pass === "" && confirmPass === "") || confirmPass.length === 0 ? (
      ""
    ) : pass === confirmPass ? (
      <StyledAccept>Passwords match!</StyledAccept>
    ) : (
      <StyledWarning>***Passwords must match***</StyledWarning>
    );
  };

  const passLength = () => {
    return pass.length === 0 || pass.length > 3 ? (
      ""
    ) : (
      <StyledWarning>
        ***Password must be at least 4 characters***
      </StyledWarning>
    );
  };

  return (
    <div>
      <NavBarLogin />
      <StyledForm onSubmit={register}>
        <i class="fas fa-id-card fa-5x"></i>
        <StyledInput
          type="text"
          name="user"
          value={user}
          onChange={userHandler}
          placeholder="Username"
          autoComplete="off"
        />
        <StyledInput
          type="password"
          name="password"
          value={pass}
          onChange={passHandler}
          placeholder="Password"
          autoComplete="off"
        />
        {passLength()}
        <StyledInput
          type="password"
          name="confirm password"
          value={confirmPass}
          onChange={confirmHandler}
          placeholder="Confirm Password"
          autoComplete="off"
        />
        {passConfirm()}
        <StyledInput
          type="text"
          name="location"
          value={location}
          onChange={locationHandler}
          placeholder="location"
          autoComplete="off"
        />
        <StyledButton>Register</StyledButton>
      </StyledForm>
    </div>
  );
};

export default SignUp;

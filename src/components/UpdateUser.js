import React, { useEffect, useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { connect } from "react-redux";
import { updateUser } from "../utils/actions";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NameInput = styled.input`
  height: 3rem;
  width: 18rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  border: 1px solid #4e4e4e;
  color: #696969;
`;
const OtherInput = styled.input`
  height: 3rem;
  width: 18rem;
  margin: 1rem 0;
  font-size: 1.4rem;
  border: 1px solid #4e4e4e;
  color: #696969;
`;

const TopLabel = styled.label`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #454851;
`;

const Label = styled.label`
  font-size: 1.5rem;
  color: #454851;
`;

const Button = styled.button`
  width: 14rem;
  height: 3rem;
  margin: 3rem 0;
  border-radius: 5px;
  background: #454851;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  :hover {
    background: #4d7c8a;
    color: #white;
    border: 1px solid #4d7c8a;
  }
`;

const ReturnButton = styled.button`
  width: 14rem;
  height: 3rem;
  margin-bottom: 3rem;
  border-radius: 5px;
  background: #454851;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  :hover {
    background: #4d7c8a;
    color: #white;
    border: 1px solid #4d7c8a;
  }
`;

const UpdateUser = props => {
  const [userToUpdate, setUserToUpdate] = useState({
    username: "",
    location: ""
  });

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    AxiosWithAuth()
      .get(`/users/${userId}`)
      .then(res => {
        setUserToUpdate(res.data.user);
      });
  }, [userId]);

  const handleChanges = e => {
    setUserToUpdate({ ...userToUpdate, [e.target.name]: e.target.value });
  };

  const submitChanges = e => {
    e.preventDefault();
    const updatedUser = {
      username: userToUpdate.username,
      location: userToUpdate.location
    };
    props.updateUser(updatedUser, userId);
    alert(`Updated information for ${userToUpdate.username}`);
    props.history.push(`/user/${userId}`);
  };

  if (!userToUpdate) {
    return <p>Updating User Information...</p>;
  } else {
    return (
      <div>
        <StyledForm onSubmit={submitChanges}>
          <TopLabel>User Name:</TopLabel>
          <NameInput
            type="text"
            name="username"
            value={userToUpdate.username}
            onChange={handleChanges}
            autoComplete="off"
          />
          <Label>Location:</Label>
          <OtherInput
            type="text"
            name="location"
            value={userToUpdate.location}
            onChange={handleChanges}
            autoComplete="off"
          />
          <Button>Update</Button>
          <ReturnButton onClick={() => props.history.push(`/user/${userId}`)}>
            Return To Profile
          </ReturnButton>
        </StyledForm>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isUpdating: state.isUpdating
  };
};

export default connect(mapStateToProps, { updateUser })(UpdateUser);

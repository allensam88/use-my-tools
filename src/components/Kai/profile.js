import React from "react";
import { dummySingleUser1 as user1 } from "../../utils/dummySingleUser";
import styled from "styled-components";

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .userinfo {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  i {
    width: 10rem;
  }
`;

const Profile = props => {
  return (
    <ProfileInfo>
      <i class="fas fa-user-circle fa-10x" />
      <div className="userinfo">
        <h1>{user1.user.username}</h1>
        <h2>{user1.user.location}</h2>
      </div>
    </ProfileInfo>
  );
};

export default Profile;

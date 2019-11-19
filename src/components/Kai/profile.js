import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUser } from '../../utils/actions';
import { dummySingleUser1 as user1 } from '../../utils/dummySingleUser';
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
    // const id = props.match.params.id
    // console.log('route id', id);
    // useEffect(() => {
    //     fetchUser(id)
    //     console.log('User', props.user);
    // }, [id]);
  
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

// const mapStateToProps = state => {
//     return {
//         user: state.users,
//         isFetching: state.isFetching
//     }
// }

// export default connect(mapStateToProps, { fetchUser })(Profile);
export default Profile;
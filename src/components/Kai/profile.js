import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUserById } from '../../utils/actions';
// import { dummySingleUser1 as user1 } from '../../utils/dummySingleUser';
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
    useEffect(() => {
  
        const id = props.match.params.id
        props.fetchUserById(id);
    }, [props.match.params.id]);

    console.log('User Profile', props.userProfile);

    if (props.isFetching) {
        return (
            <p>Loading User Profile...</p>
        )
    } else {
        return (
            <div>
                <i className="fas fa-user-circle fa-10x" />
                <div className="userinfo">
                    <h1>{props.userProfile.user.username}</h1>
                    <h2>{props.userProfile.user.location}</h2>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        userProfile: state.userProfile,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchUserById })(Profile);
// export default Profile;
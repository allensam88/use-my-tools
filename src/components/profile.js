import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateTool, fetchTools } from "../utils/actions";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import styled from "styled-components";
import "../Components.css";
import NavBar from "./navBar";

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  i {
    color: black;
    width: 10rem;
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;
  background-color: #4d7c8a;
  padding: 0.5rem;
  border-radius: 0 0 1rem 0;
  font-family: "Tomorrow", sans-serif;
  color: white;
  box-shadow: 4px 7px #000000;
`;
const ButtonInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Profile = props => {
  const [userProfile, setUserProfile] = useState(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    AxiosWithAuth()
      .get(`/users/${id}`)
      .then(res => {
        setUserProfile(res.data);
      })
      .catch(err => console.log(err));
  }, [trigger, props.match.params.id]);

  const returnTool = id => {
    const updateBorrowedTool = {
      borrowed: 0,
      borrowed_to: ""
    };
    console.log("updated tool", updateBorrowedTool);
    props.updateTool(updateBorrowedTool, id).then(() => {
      setTrigger(!trigger);
      props.fetchTools();
    });
  };

  if (!userProfile) {
    return <p>Loading User Profile...</p>;
  } else {
    return (
      <div>
        <NavBar />
        <ProfileInfo>
          <i className="fas fa-user-circle fa-10x" />
          <TextInfo>
            <h1>{userProfile.user.username}</h1>
            <h2>{userProfile.user.location}</h2>
          </TextInfo>
        </ProfileInfo>
        <ButtonInfo>
          <button
            className="shadow-btn"
            onClick={() => props.history.push(`/update-user/${userProfile.id}`)}
          >
            <span>Update Profile</span>
          </button>
          <button
            className="shadow-btn"
            onClick={() => props.history.push(`/add-tool`)}
          >
            <span>Add Tool</span>
          </button>
        </ButtonInfo>
        <div className="card-list">
          {userProfile.tools.map(tool => {
            return (
              <div key={tool.id} className="card-container">
                <div className="card-images">
                  <img src={tool.toolImg} alt="tool" />
                </div>
                <div className="product">
                  <h1>{tool.name}</h1>
                  <h2>${tool.price} /hr</h2>

                  {tool.borrowed === 1 && (
                    <div className="btn-slide">
                      <p>Loaned to: {tool.borrowed_to}</p>
                      <button
                        onClick={() => returnTool(tool.id)}
                        className="btn btn-custom"
                        type="submit"
                      >
                        <span>Return Tool</span>
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() =>
                      props.history.push(`/update-tool/${tool.id}`)
                    }
                    className="btn btn-custom"
                  >
                    <span>Update</span>
                  </button>
                  <button
                    onClick={() =>
                      props.history.push(`/delete-tool/${tool.id}`)
                    }
                    className="btn btn-custom"
                  >
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    userProfile: state.userProfile,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { updateTool, fetchTools })(Profile);

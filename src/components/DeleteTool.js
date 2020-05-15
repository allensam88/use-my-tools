import React from "react";
import { deleteTool } from "../utils/actions";
import { connect } from "react-redux";
import styled from "styled-components";
import NavBar from "./navBar";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const YouSure = styled.p`
  font-size: 2.3rem;
`;
const Span = styled.span`
  font-weight: bold;
  font-style: italic;
  color: #4d7c8a;
`;

const YesButton = styled.button`
  width: 12rem;
  height: 3rem;
  margin: 2rem 0;
  border-radius: 5px;
  background: red;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  :hover {
    background: white;
    color: red;
    border: 1px solid red;
    box-shadow: 8px 8px rgba(255, 0, 0, 0.8);
    transition: 0.3s;
  }
  focus: {
    outline: 0;
  }
`;
const NoButton = styled.button`
  width: 12rem;
  height: 3rem;
  margin: 1rem 0;
  border-radius: 5px;
  background: #454851;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  :hover {
    background: #4d7c8a;
    color: white;
    border: 1px solid #4d7c8a;
    box-shadow: 8px 8px #6b878f;
    transition: 0.3s;
  }
  :focus {
    outline: none;
  }
`;

const DeleteTool = props => {
  const id = props.match.params.id;
  const userId = localStorage.getItem("userId");
  const handleSubmit = e => {
    e.preventDefault();
    props.deleteTool(id);
    props.history.push(`/user/${userId}`);
  };

  const goBack = e => {
    e.preventDefault();
    props.history.push(`/user/${userId}`);
  };

  if (props.isDeleting) {
    return <p>Deleting Tool...</p>;
  } else {
    return (
      <div>
        <NavBar />
        <Div>
          <YouSure>
            Are you sure you want to <Span>permanently</Span> delete this tool?
          </YouSure>
          <YesButton onClick={handleSubmit}>{`Delete`}</YesButton>
          <NoButton onClick={goBack}>No, return to profile</NoButton>
        </Div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isDeleting: state.isDeleting
  };
};

export default connect(mapStateToProps, { deleteTool })(DeleteTool);

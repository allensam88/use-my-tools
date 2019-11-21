import React from "react";
import { deleteTool } from "../utils/actions";
import { connect } from "react-redux";
import styled from "styled-components";

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
`;

const YesButton = styled.button`
  width: 14rem;
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
  }
`;
const NoButton = styled.button`
  width: 14rem;
  height: 3rem;
  margin: 1rem 0;
  border-radius: 5px;
  background: #73a85a;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  :hover {
    background: white;
    color: #73a85a;
    border: 1px solid #73a85a;
  }
`;

const DeleteTool = props => {
  const id = props.match.params.id;
  const userId = localStorage.getItem("userId");
  const handleSubmit = e => {
    e.preventDefault();
    props.deleteTool(id);
    // alert(`${} was deleted`);
    props.history.push(`/user/${userId}`);
  };

  const goBack = e => {
    e.preventDefault();
    props.history.push(`/user/${userId}`);
  };

  if (props.isDeleting) {
    return <p>Deleting Client...</p>;
  } else {
    return (
      <Div>
        <YouSure>
          Are you sure you want to <Span>permanently</Span> delete this tool?
        </YouSure>
        <YesButton onClick={handleSubmit}>{`Yes. Delete`}</YesButton>
        <NoButton onClick={goBack}>No. Return to profile.</NoButton>
      </Div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isDeleting: state.isDeleting
  };
};

export default connect(mapStateToProps, { deleteTool })(DeleteTool);

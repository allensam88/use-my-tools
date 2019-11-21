import React, { useState } from "react";
import { connect } from "react-redux";
import { addTool } from "../utils/actions";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 12rem;
  height: 3rem;
  margin: 1.2rem 0;
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

const NameInput = styled.input`
  height: 3rem;
  width: 18rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  border: 1px solid #4e4e4e;
`;

const OtherInput = styled.input`
  height: 3rem;
  width: 18rem;
  margin: 1rem 0;
  font-size: 1.4rem;
  border: 1px solid #4e4e4e;
`;
const Required = styled.h3`
  color: #363636;
  opacity: 0.8;
`;

const AddTool = props => {
  const userId = localStorage.getItem("userId");
  const [tool, setTool] = useState({});

  const handleChanges = event => {
    setTool({ ...tool, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newTool = {
      ownerId: userId,
      name: tool.name,
      price: Number(tool.price),
      toolImage: tool.toolImage
    };
    props.addTool(newTool);
    alert(`Successfully added "${tool.name}"`);
    setTool({
      name: "",
      price: "",
      tool: ""
    });
    props.history.push(`/user/${userId}`);
  };

  if (props.isAdding) {
    return <p>Adding Tool...</p>;
  } else {
    return (
      <div>
        <Required>*All fields are required</Required>
        <StyledForm onSubmit={submitForm}>
          <NameInput
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChanges}
            value={tool.name}
            autoComplete="off"
          />
          <OtherInput
            id="price"
            name="price"
            placeholder="price"
            onChange={handleChanges}
            value={tool.price}
            autoComplete="off"
          />
          <OtherInput
            id="toolImage"
            name="toolImage"
            placeholder="image"
            onChange={handleChanges}
            value={tool.toolImage}
            autoComplete="off"
          />
          <Button type="submit">Add Tool</Button>
        </StyledForm>
        <Button onClick={() => props.history.push(`/user/${userId}`)}>
          Return To Profile
        </Button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAdding: state.isAdding
  };
};

export default connect(mapStateToProps, { addTool })(AddTool);

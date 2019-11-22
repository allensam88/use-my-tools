import React, { useState } from "react";
import { connect } from "react-redux";
import { addTool } from "../utils/actions";
import styled from "styled-components";
import NavBar from "./navBar";

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
  background: #454851;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s;

  :hover {
    background: #4d7c8a;
    color: white;
    border: 1px solid #4d7c8a;
    box-shadow: 8px 8px #6b878f;
    transition: 0.3s;
  }

  :focus {
    outline: 0;
  }
`;

const NameInput = styled.input`
  height: 3rem;
  width: 18rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  border: 1px solid #4e4e4e;
  padding-left: 0.5%;
`;

const OtherInput = styled.input`
  height: 3rem;
  width: 18rem;
  margin: 1rem 0;
  font-size: 1.4rem;
  border: 1px solid #4e4e4e;
  padding-left: 0.5%;
  color: #4d7c8a;
`;
const Required = styled.h3`
  color: #363636;
  opacity: 0.8;
  margin-top: 3%;
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
      toolImg: tool.toolImg
    };
    props.addTool(newTool);
    alert(`Successfully added "${tool.name}"`);
    setTool({
      name: "",
      price: "",
      toolImg: ""
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
            required
          />
          <OtherInput
            id="price"
            type="text"
            name="price"
            placeholder="Price"
            onChange={handleChanges}
            value={tool.price}
            autoComplete="off"
            required
          />
          <OtherInput
            id="toolImage"
            type="text"
            name="toolImg"
            placeholder="Image URL"
            onChange={handleChanges}
            value={tool.toolImg}
            autoComplete="off"
            required
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

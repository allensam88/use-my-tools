import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { updateTool, fetchTools } from "../utils/actions";
const ToolCard = props => {
  const {
    id,
    Image,
    Name,
    Price,
    Owner,
    Location,
    Borrowed,
    BorrowedTo
  } = props.data;
  const borrowTool = event => {
    event.preventDefault();
    const updateBorrowedTool = {
      borrowed: 1,
      borrowed_to: localStorage.getItem("username")
    };
    props.updateTool(updateBorrowedTool, id).then(() => {
      props.fetchTools();
    });
  };
  return (
    <div className="card-container">
      <div className="card-images">
        <img src={Image} />
      </div>
      <div className="product">
        <p>{Owner}'s</p>
        <h1>{Name}</h1>
        <h2>${Price} /hr</h2>
        <h2>{Location}</h2>
        <div className="btn-slide">
          {Borrowed === 0 && (
            <button
              onClick={borrowTool}
              className="btn btn-custom"
              type="submit"
            >
              <span>Borrow</span>
            </button>
          )}
          {Borrowed === 1 && (
            <button className="btn btn-custom" type="submit" disabled>
              Borrowed by: {BorrowedTo}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isUpdating: state.isUpdating
  };
};
export default connect(mapStateToProps, { fetchTools, updateTool })(ToolCard);

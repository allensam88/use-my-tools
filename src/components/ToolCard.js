import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { updateTool, fetchTools } from "../utils/actions";

const ToolCard = props => {
    const { id, Image, Name, Price, Owner, Location, Borrowed, BorrowedTo } = props.data

    const borrowTool = (event) => {
        event.preventDefault();
        const updateBorrowedTool = {
            borrowed: 1,
            borrowed_to: localStorage.getItem("username")
        };
        console.log("updated tool", updateBorrowedTool);
        props.updateTool(updateBorrowedTool, id)
            .then(() => {
                props.fetchTools();
            })
        console.log('Borrowed', Borrowed);
    };

    return (
        <div className="card">
            <div className="card-body">
                <img src={Image} alt="tool-img" className="card-image" />
                <h4 className="card-title">Tool: {Name}</h4>
                <p>Owner: {Owner} </p>
                <p>Price: {Price} </p>
                <p>Location: {Location} </p>
                {Borrowed === 0 && (
                    <button
                        onClick={borrowTool}
                        className="btn btn-custom">
                        Borrow
                    </button>
                )}
                {Borrowed === 1 && (
                    <button
                        className="btn btn-custom"
                        type="submit"
                        disabled>
                        Borrowed by: {BorrowedTo}
                    </button>
                )}
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

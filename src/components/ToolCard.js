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
        props.updateTool(updateBorrowedTool, id)
            .then(() => {
                props.fetchTools();
            })
    };

    const returnTool = () => {
        const updateBorrowedTool = {
            borrowed: 0,
            borrowed_to: ""
        };
        props.updateTool(updateBorrowedTool, id)
            .then(() => {
                props.fetchTools();
            })
    }

    return (
        <div className="card">
            <div className="card-body">
                <img src={Image} alt="tool-img" className="card-image" />
                <h4 className="card-title">Tool: {Name}</h4>
                <p>Owner: {Owner}</p>
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
                    <>
                    <button
                        className="btn btn-custom"
                        disabled>
                        Borrowed by: {BorrowedTo}
                    </button>
                    <button
                        onClick={returnTool}    
                        className="btn btn-custom">
                        Return
                    </button>
                    </>    
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

import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { updateTool } from "../utils/actions";

const ToolCard = props => {
    const { id, Image, Name, Price, Owner, Location, Borrowed, BorrowedTo } = props.data

    const borrowTool = () => {
        const updateBorrowedTool = {
            borrowed: 1,
            borrowed_to: localStorage.getItem("username")
        };
        console.log("updated tool", updateBorrowedTool);
        props.updateTool(updateBorrowedTool, id)
            .then(() => {
                window.location.reload();
            })
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
                        onClick={() => borrowTool(Borrowed)}
                        className="btn btn-custom"
                        type="submit">
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

export default connect(mapStateToProps, { updateTool })(ToolCard);

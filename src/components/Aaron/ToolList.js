import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTools } from "../../utils/actions";
import SearchForm from "./SearchForm";

const ToolList = props => {
  useEffect(() => {
    props.fetchTools();
  }, []);

  if (props.isFetching) {
    return <p>Loading Tool List...</p>;
  } else {
    return (
      <div className="Tools-list">
        <div className="search-div">
          <SearchForm />
        </div>
        <div className="Tools-list">
          {props.tools.map(tool => (
            <div className="card">
              <div className="card-body">
                {/* <img className="card-img-top" src={tool.Image} alt="tool-img" /> */}
                <h4 className="card-title">Tool: {tool.Name}</h4>
                <p>Owner: {tool.Owner} </p>
                <p>Price: {tool.Price} </p>
                <p>Location: {tool.Location} </p>
                <button className="btn btn-custom" type="submit">
                  Borrow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    tools: state.tools,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { fetchTools })(ToolList);

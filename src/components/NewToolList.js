import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ToolCard from "./ToolCard";
import { fetchTools } from "../utils/actions";
import NavBar from "./navBar";

const NewToolList = props => {
  const [tools, setTools] = useState([]);
  const [query, setQuery] = useState("");

  const refresh = () => {
    axios
      .get(`https://use-my-tool.herokuapp.com/tools`)
      .then(res => {
        console.log(res.data);
        const search = res.data.filter(tool =>
          tool.Name.toLowerCase().includes(query.toLowerCase())
        );
        setTools(search);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    refresh();
    // if(tools.length === 0) {
    //     props.fetchTools();
    // }
    // console.log('useEffect');
    // setTools(props.tools)
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="tool-search">
        <div className="search-form">
          <i className="fas fa-search"></i>
          <form className="search">
            <input
              className="search-cont"
              type="text"
              onChange={handleInputChange}
              value={query}
              name="name"
              placeholder="Search For Tools"
              autocomplete="off"
            />
          </form>
        </div>
        <div className="Tools-list">
          {tools.map(data => {
            return <ToolCard key={data.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewToolList;

// const mapStateToProps = state => {
//     return {
//         tools: state.tools
//     };
// };

// export default connect(mapStateToProps, { fetchTools })(NewToolList);

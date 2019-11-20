import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BorrowButton from './BorrowButton';

export default function SearchForm() {
    const [tools, setTools] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`https://use-my-tool.herokuapp.com/tools`)
        .then(res => {
            const search = res.data.filter(tool =>
                tool.Name.toLowerCase().includes(query.toLowerCase())
            );
            console.log(res);
            setTools(search);
        });
    }, [query]);
    
    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    return (
        <div className="tool-search">
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
            <div className="Tools-list">
          {tools.map(tool => (
            <div className="card">
              <div className="card-body">
                {/* <img className="card-img-top" src={tool.Image} alt="tool-img" /> */}
                <h4 className="card-title">Tool: {tool.Name}</h4>
                <p>Owner: {tool.Owner} </p>
                <p>Price: {tool.Price} </p>
                <p>Location: {tool.Location} </p>
                <BorrowButton />
              </div>
            </div>
          ))}
        </div>
      </div>    
    )};    
  
import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        <div className="tool=search">
            <form className="search">
                <input
                type="text"
                onChange={handleInputChange}
                value={query}
                name="name"
                placeholder="Search For Tools"
                autocomplete="off" 
                />
            </form>     
        </div>
    )}    
  
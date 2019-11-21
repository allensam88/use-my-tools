import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ToolCard from './ToolCard';


const NewToolList = (props) => {
    const [tools, setTools] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`https://use-my-tool.herokuapp.com/tools`)
        .then(res => {
            console.log(res.data);
            const search = res.data.filter(tool =>
                tool.Name.toLowerCase().includes(query.toLowerCase())
            );
            setTools(search);
        })
        .catch(err => {
            // console.log(err);
        })
    }, [query])

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    return (
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
            <div className='Tools-list'>
                {tools.map(data => {
                    return (
                        <ToolCard 
                        Image={data.Image}
                        Name={data.Name}
                        Price={data.Price}
                        Owner={data.Owner}
                        Location={data.Location}
                        Borrowed={data.Borrowed}
                        />
                    )
                })}
            </div>
        </div>
    )}

    

export default NewToolList;
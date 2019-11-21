import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ToolCard from './ToolCard';
import { fetchTools } from '../utils/actions';

const NewToolList = (props) => {
    const [searchTools, setSearchTools] = useState([]);
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        if (props.tools.length === 0) {
            props.fetchTools();
        }
        setSearchTools(props.tools)
    }, [props.tools])

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    const submitSearch = (event) => {
        event.preventDefault()
        const search = searchTools.filter(tool =>
            tool.Name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchTools(search);
    }

    if (props.tools.length === 0) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="tool-search">
                <div className="search-form">
                    <i className="fas fa-search"></i>
                    <form className="search" onSubmit={submitSearch}>
                        <input
                            className="search-cont"
                            type="text"
                            onChange={handleInputChange}
                            value={query}
                            name="name"
                            placeholder="Search For Tools"
                            autocomplete="off"
                        />
                        <button>Search</button>
                    </form>
                </div>
                <div className='Tools-list'>
                    {searchTools.map(data => {
                        return (
                            <ToolCard
                                key={data.id}
                                data={data}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tools: state.tools,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, { fetchTools })(NewToolList);
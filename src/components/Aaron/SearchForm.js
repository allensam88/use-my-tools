import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../utils/AxiosWithAuth';
import { connect } from 'react-redux';
import { fetchTools, updateTool } from '../../utils/actions';
import axios from 'axios';

const SearchForm = props => {
    const [tools, setTools] = useState([]);
    const [query, setQuery] = useState("");
    let  [state, setState] = useState();

    useEffect(() => {
        AxiosWithAuth()
            .get(`https://use-my-tool.herokuapp.com/tools`)
            .then(res => {
                const search = res.data.filter(tool =>
                    tool.Name.toLowerCase().includes(query.toLowerCase())
                );
                console.log(res);
                setTools(search);
            })
            .catch(err => console.log(err));
    }, [query, state]);

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    const toggleBorrow = (tool) => {
        setState({});
        const updateBorrowedTool = {
            borrowed: 1,
            borrowed_to: localStorage.getItem('username')
        }
        console.log('updated tool', updateBorrowedTool);
        props.updateTool(updateBorrowedTool, tool.id);
    }

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
            <div className="Tools-list">
                {tools.map(tool => (
                    <div className="card">
                        <div className="card-body">
                            {/* <img className="card-img-top" src={tool.Image} alt="tool-img" /> */}
                            <h4 className="card-title">Tool: {tool.Name}</h4>
                            <p>Owner: {tool.Owner} </p>
                            <p>Price: {tool.Price} </p>
                            <p>Location: {tool.Location} </p>
                            {tool.Borrowed === 0 &&                             
                                <button
                                    onClick={() => toggleBorrow(tool)}
                                    className="btn btn-custom"
                                    type="submit"
                                >Borrow
                                </button>
                            }
                            {tool.Borrowed === 1 &&
                                <button
                                    onClick={() => toggleBorrow(tool)}
                                    className="btn btn-custom"
                                    type="submit"
                                    disabled
                                >Borrowed
                                </button>
                            }

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {

        isUpdating: state.isUpdating
    }
}

export default connect(mapStateToProps, { updateTool })(SearchForm);

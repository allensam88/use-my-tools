import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTools } from '../utils/actions';
import ToolCard from '../components/ToolCard';

const BorrowedTools = props => {
    const username = localStorage.getItem('username');
    useEffect(() => {
        if (props.tools.length === 0) {
            props.fetchTools();
        }
    }, [props, props.tools])

    const borrowedTools = props.tools.filter((tool) => (tool.BorrowedTo === username));

    if (props.tools.length === 0) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div>
                {borrowedTools.length === 0 ? '' : <h2>Borrowed Tools</h2>}
                {borrowedTools.map(data => {
                    return (
                        <ToolCard
                            key={data.id}
                            data={data}
                        />
                    )
                })}
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

export default connect(mapStateToProps, { fetchTools })(BorrowedTools);
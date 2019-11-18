import React from 'react';
//Feasibility check to test dummy data
const PracticeCard = props => {
    return (
        <div className='card'>
            <h3>Practice Card</h3>
            <h4>{props.user.username}</h4>
            <p>City: {props.user.city}</p>
            <p>State: {props.user.state}</p>
            <p>Tools</p>
            {props.user.tools.map(tool => {
            return <p>{tool.name}</p>
        })}
        </div>
    )
}

export default PracticeCard;
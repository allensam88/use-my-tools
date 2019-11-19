import React from 'react';
import dummyToolsList from '../../utils/dummyToolsList';



export default function ToolList() {
 
    return (
        <div className="Tools-list">
          {dummyToolsList.map(tools => (
            <div className="card">
            <div className="card-body">
              <img className="card-img-top" src={tools.Image} alt="tool-img"/>
              <h4 className="card-title">Tool: {tools.Name}</h4>
              <p>Owner: {tools.Owner} </p>
              <p>Price: {tools.Price} </p>
              <p>Location: {tools.Location} </p>
              <button className="btn btn-custom" type="submit">Borrow</button>
            </div>
          </div>
          ))}      
        </div>
    )
}





import React, { Component } from 'react';


const handleClick = (props) =>{
    props.clearDone();

}
export class TodoList extends Component {
    render = () => (
        <button className="btn btn-primary" onClick={handleClick}>
        Clear Complete Tasks
        </button>
    );

};

// can't get this to clear correctly?
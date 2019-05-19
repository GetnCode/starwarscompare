import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Row extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="row m-0">
                {this.props.children}
            </div>
        );
    }
}

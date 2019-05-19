import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CompareSelect extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
           <select className="form-control" name={this.props.name}>
               {this.props.children}
           </select>
        );
    }
}

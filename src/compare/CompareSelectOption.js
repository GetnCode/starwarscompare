import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CompareSelectOption extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
           <option value={this.props.value} selected={this.props.selected}>
               {this.props.children}
           </option>
        );
    }
}

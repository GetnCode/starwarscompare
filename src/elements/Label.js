import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Label extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
           <label>
               {this.props.children}
           </label>
        );
    }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CompareForm extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
           <form className={this.props.className} onSubmit={this.props.onSubmit}>
               {this.props.children}
           </form>
        );
    }
}

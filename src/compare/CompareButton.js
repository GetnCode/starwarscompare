import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CompareButton extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
           <button type="submit" className="btn btn-primary btn-block btn-lg mt-4">
               {this.props.children}
           </button>
        );
    }
}

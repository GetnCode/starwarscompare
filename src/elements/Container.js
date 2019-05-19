import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Container extends Component {

    constructor(props){
        super(props);

        this.className = props.fluid === undefined ? 'container ':'container-fluid';

    }

    render() {
        return (
            <div className={this.className}>
                {this.props.children}
            </div>
        );
    }
}

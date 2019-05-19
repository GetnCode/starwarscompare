import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Col extends Component {

    constructor(props){
        super(props);
        this.className = "col";

        this.className = props.md !== undefined  && props.size !== undefined ? 'col-md' + props.size : 'col';
        this.className = props.sm !== undefined  && props.size !== undefined ? 'col-sm' + props.size : 'col';
        this.className = props.lg !== undefined  && props.size !== undefined ? 'col-lg' + props.size : 'col';
        this.className = props.size !== undefined ? 'col-' + props.size : 'col';
    }

    render() {
        return (
            <div className={this.className}>
                {this.props.children}
            </div>
        );
    }
}

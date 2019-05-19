import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './elements/Container'
import Row from './elements/Row'
import Col from './elements/Col'
import Label from './elements/Label'

import CompareForm from './compare/CompareForm'
import CompareSelect from './compare/CompareSelect'
import CompareSelectOption from './compare/CompareSelectOption'
import CompareButton from './compare/CompareButton'

import 'bootstrap/dist/css/bootstrap.css';


var config = {
    API_URL : 'https://swapi.co/api/starships'
};


export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            starships:[],
            rows:{},
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentWillMount(){
        this.getStarships();
    }

    async getStarships(){
        const response = await fetch(config.API_URL, {
            method: 'GET',
        });

        const json = await response.json();

        this.setState({starships:json.results});
    }

    onSubmit(event){
        event.preventDefault();


        var starship1 = null;
        var starship2 = null;

        for(var index in this.state.starships){
            if(this.state.starships[index].name == event.target[0].value){
                starship1 = this.state.starships[index];
            }

            if(this.state.starships[index].name == event.target[1].value){
                starship2 = this.state.starships[index];
            }
        }



        this.setState({
            rows:{
                name:<tr><td><strong>Name</strong></td><td>{starship1.name}</td><td>{starship2.name}</td></tr>,
                cost: this.isCompareableInfo('Cost', starship1.cost_in_credits, starship2.cost_in_credits),
                speed:this.isCompareableInfo('Speed', starship1.max_atmosphering_speed, starship2.max_atmosphering_speed),
                cargoSize:this.isCompareableInfo('Cargo Size', starship1.cargo_capacity, starship2.cargo_capacity),
                passengers:this.isCompareableInfo('Passengers', starship1.passengers, starship2.passengers),
            }


        })
    }

    isCompareableInfo(title, item1, item2){

        if(item1 !== 'n/a' && item1 !== 'unknown' && item2 !== 'n/a' && item2 !== 'unknown'){
            if(Number(item1) > Number(item2)){
                return(
                    <tr>
                        <td><strong>{title}</strong></td>
                        <td style={{backgroundColor: '#ffb5b2'}}><strong>{item1 }</strong></td>
                        <td>{item2 }</td>
                    </tr>
                );
            }

            else if(Number(item1) < Number(item2)){
                return(
                    <tr>
                        <td><strong>{title}</strong></td>
                        <td >{item1 }</td>
                        <td style={{backgroundColor: '#ffb5b2'}}><strong>{item2 }</strong></td>
                    </tr>
                );
            }

            else{
                return(
                    <tr>
                        <td><strong>{title}</strong></td>
                        <td>{item1}</td>
                        <td>{item2 }</td>
                    </tr>
                );
            }

        }

        else if(item1 === 'n/a' || item1 === 'unknown' && item2 !== 'n/a' && item2 !== 'unknown'){
            return <tr>
                <td><strong>{title}</strong></td>
                <td >{item1 }</td>
                <td style={{backgroundColor: '#ffb5b2'}}><strong>{item2 }</strong></td>
            </tr>
        }

        else if(item1 !== 'n/a' && item1 !== 'unknown' && item2 === 'n/a' || item2 === 'unknown'){
            return <tr>
                <td><strong>{title}</strong></td>
                <td style={{backgroundColor: '#ffb5b2'}}><strong>{item1 }</strong></td>
                <td>{item2 }</td>
            </tr>
        }
    }

    render() {


        return (
            <div className="py-5">
                <Container>
                    <CompareForm className="bg-white shadow p-5 border" onSubmit={this.onSubmit}>
                        <Row>
                            <Col size="6">
                                <Label>Select Starship 1</Label>
                                <CompareSelect name="compare-field-1">
                                    {this.state.starships.map(starship => {
                                        return <CompareSelectOption>{starship.name}</CompareSelectOption>
                                    })}
                                </CompareSelect>
                            </Col>
                            <Col size="6">
                            <Label>Select Starship 2</Label>
                                <CompareSelect name="compare-field-2">
                                    {this.state.starships.map(starship => {
                                        return <CompareSelectOption>{starship.name}</CompareSelectOption>
                                    })}
                                </CompareSelect>
                            </Col>
                        </Row>
                        <CompareButton>Compare</CompareButton>
                    </CompareForm>
                    <div className="p-5 bg-white shadow mt-4">
                        <table className="table table-bordered ">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Starship 1</th>
                                    <th>Starship 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.rows.name}
                                {this.state.rows.cost}
                                {this.state.rows.speed}
                                {this.state.rows.cargoSize}
                                {this.state.rows.passengers}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </div>
        );
    }
}


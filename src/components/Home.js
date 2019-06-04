import React, { Component } from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'jack'
        }
    }

    render(){
        return (
            <h1> Hello {this.props.name}</h1>
        )
    }
}
export default Home;

import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
        console.log('initial state val:', this.state.color)

    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        console.log('state color:', this.state.color)
        return (
           <div className = 'cell' style = {{backgroundColor: this.state.color}} onClick={this.handleClick}></div> 
        )
    }
}

// onClick={this.handleClick}
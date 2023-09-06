import React, { Component } from 'react'

export class Clocks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
        console.log('constructor')
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 100);
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('componentWillUnmount')
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
  
    render() {
        return (
            <div>
                <h1>the time is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
  }
}

export default Clocks
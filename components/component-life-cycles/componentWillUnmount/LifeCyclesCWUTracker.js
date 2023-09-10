import React, { Component } from 'react'

export class LifeCyclesCWUTracker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mouseX: 0,
            mouseY: 0,
        }
    }

    // the 'e' is the event perameter passed in when the mouse moves
    trackMouse = e => {
        console.log('move around')
        this.setState({
            mouseX: e.clientX,
            mouseY: e.clientY,
        })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.trackMouse)
    }

    componentWillUnmount() {
        console.log('unmounting...')
        window.removeEventListener('mousemove', this.trackMouse)
    }
  
    render() {
    return (
      <div>
        <h1>
            TACKING MOUSE...
        </h1>
        <p>
            X: {this.state.mouseX}
            Y: {this.state.mouseY}
        </p>
      </div>
    )
  }
}

export default LifeCyclesCWUTracker
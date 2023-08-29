import React, { Component } from 'react'

export class EventsClass extends Component {

    clickHandler(){
        console.log("pissed me pants")
    }

    render(){
    return (
    <div>
        <button onClick={this.clickHandler}>
            piss
        </button>
    </div>
    )
  }
}

export default EventsClass
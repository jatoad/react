import React, { Component } from 'react'
import LifecyclesCDUChild from './LifecyclesCDUchild'

export class LifecyclesCDU extends Component {

    constructor(props) {
        console.log('constructor called')
        super(props)
        this.state = {
            greeting: 'hi'
      }
    }

    updateGreeting = () => {
        console.log('update greeting called')
        this.setState( prevState => {
            return{
                greeting: prevState.greeting === 'hi'? 'bye': 'hi'
            }
        }
        )
    }

    componentDidUpdate(){
        console.log('component updated')
    }

    render() {
        console.log('component renderd')
        return (
            <div>
                <h3>
                    {this.state.greeting}
                </h3>
                <button onClick={this.updateGreeting}>
                    <h3>
                        change greeting
                    </h3>
                </button>
                <LifecyclesCDUChild parentGreeting={this.state.greeting} />
            </div>
    )
  }
}

export default LifecyclesCDU
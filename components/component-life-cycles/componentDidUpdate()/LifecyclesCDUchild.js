import React, { Component } from 'react'

export class LifecyclesCDUChild extends Component {

    constructor(props) {
        console.log('child constructor called')
        super(props)
        this.state = {
            greeting: 'hi child'
      }
    }

    updateGreeting = () => {
        console.log('child update greeting called')
        this.setState( prevState => {
            return{
                greeting: prevState.greeting === 'hi child'? 'bye child': 'hi child'
            }
        }
        )
    }

    componentDidUpdate(prevState, prevProps){
        console.log('child component updated')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('parentGreeting has changed')
        }
    }
 
    render() {
        console.log('child component renderd')
        return (
            <div>
                <h3>
                    {this.state.greeting}
                </h3>
                <button onClick={this.updateGreeting}>
                    <h3>
                        change child greeting
                    </h3>
                </button>
            </div>
    )
  }
}

export default LifecyclesCDUChild
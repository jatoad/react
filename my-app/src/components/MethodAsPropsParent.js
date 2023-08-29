import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild'

export class MethodAsPropsParent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
      }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        })
        console.log(this)
    }

    render() {
    return (
        <div>
            <MethodAsPropsChild
          isLoggedIn={this.state.isLoggedIn}
          handleSignIn={this.handleSignIn}
          handleSignOut={this.handleSignOut}
        />
        </div>
    )
  }
}

export default MethodAsPropsParent
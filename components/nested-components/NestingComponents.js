import React, { Component } from 'react'
import UserMessage from '../../my-app/src/components/UserMessage'
import UserData from '../../my-app/src/components/UserData'

export class NestingComponents extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      isLoggedIn: true, 
    }
  }

  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded} />
        <UserMessage isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

export default NestingComponents
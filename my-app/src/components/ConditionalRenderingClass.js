import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {

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
        {this.state.isLoaded ? 'data loaded' : 'loading...'}
        {this.state.isLoggedIn ? (
          <div>
            <p>welcome! pls fill out the form and fuck off ;D</p>
            <ul>
              <li>enter email</li> 
              <li>enter details</li>
              <li>fuck off</li>
            </ul>
          </div>
        ):(
          <div>
            <p>sign in ya dawg</p>
          </div>
        )}
      </div>
    )
  }
}

export default ConditionalRenderingClass
import React from 'react'

function MethodAsPropsChild(props) {
    return (
      <div>
          {
          props.isLoggedIn ? (
          <div>
              <p>welcome! pls fill out the form and fuck off ;D</p>
              <ul>
                  <li>enter email</li> 
                  <li>enter details</li>
                  <li>fuck off</li>
              </ul>
              <button onClick={props.handleSignOut}> sign out. fucker.</button>
          </div>
          ):(
          <div>
              <p>sign in ya dawg</p>
              <button onClick={props.handleSignIn}> sign in babycakes</button>
          </div>
          )}
      </div>
    )
  }
  
  export default MethodAsPropsChild
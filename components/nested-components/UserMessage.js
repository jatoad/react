import React from 'react'

function UserMessage(props) {
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
        </div>
        ):(
        <div>
            <p>sign in ya dawg</p>
        </div>
        )}
    </div>
  )
}

export default UserMessage
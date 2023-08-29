import React from 'react'

function UserData(props) {
  return (
    <div>
        {props.isLoaded ? 'data loaded' : 'loading...'}
    </div>
  )
}

export default UserData
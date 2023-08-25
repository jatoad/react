import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
      {props.connected ? 'Connected' : 'Not Connected'}
    </div>
  )
}

export default ConditionalRenderingFunctional
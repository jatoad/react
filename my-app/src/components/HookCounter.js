import React, { useState } from 'react'

function HookCounter(props) {
    const [count, setCount] = useState(0);

    return (
        <div className="greeting">
            <h1>
                hello {props.name}!
                i am a functional component with hooks
            </h1>
            <h2>you clicked {count} times</h2>
            <button
                onClick = {
                    () => setCount(count => count + 1)
                }
            >
                increment counter 
            </button>
        </div>
    )
}

export default HookCounter
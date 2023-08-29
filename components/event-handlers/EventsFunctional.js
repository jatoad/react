import React from 'react'

function EventsFunctional() {

    function clickHandler() {
        console.log("shat me pants")
    }
  
    return ( 
    <div>
        <button onClick={clickHandler}>
            shit
        </button>
    </div>
    )
}

export default EventsFunctional
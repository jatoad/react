import React from "react";
import css from '../css/FunctionalGreetingWithProps.module.css'

const FunctionalGreetingWithProps = (props) =>  {
    return (
        <div className={css.functionalgreetingwithprops} >
            <h1>Hello, {props.name}! I see youre {props.age}. {props.greeeting} </h1>
        </div>
    )
}


export default FunctionalGreetingWithProps;
import React from "react";

const FunctionalGreetingWithProps = (props) =>  {
    return <h1>Hello, {props.name}! I see youre {props.age}. {props.greeeting} </h1>;
}


export default FunctionalGreetingWithProps;
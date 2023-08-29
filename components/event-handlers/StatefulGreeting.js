import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            intro : "green",
            buttonText: "purp",
            count: 0
        };
    }

    handleClick() {
        this.setState ((prevState, prevProps) => {
            console.log('previous state', prevState);
            console.log('previous props', prevProps);
            return{
                intro: prevState.intro === "green" ? "blue" : "green",
                buttonText: prevState.buttonText === "purp" ? "naan" : "purp",
            }
        });
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1,
        });
    }
    
    render(){
        return(
            <div>
                <h1> {this.state.intro} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}> {this.state.buttonText} </button>
                <button onClick={() => this.incrementCount()}> increment </button>
                <p>youve clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default StatefulGreeting
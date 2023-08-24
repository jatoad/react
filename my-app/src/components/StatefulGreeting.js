import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            intro : "pro ",
            buttonText: "spud",
            count: 0
        };
    }

    handleClick() {
        this.setState ({
            intro: this.state.intro === "spoon" ? "pro" : "spoon",
            buttonText: this.state.buttonText === "spud" ? "red" : "spud",
        }, ()=> {
            console.log(this.state.buttonText);
            console.log(this.state.intro);
        });
        
        console.log('new', this.state.buttonText);
        console.log('new', this.state.intro);
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
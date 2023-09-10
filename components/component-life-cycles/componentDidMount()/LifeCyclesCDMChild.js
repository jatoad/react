import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {

constructor(props) {
    console.log('child loading')
    super(props)
    this.state = {
        data: 'child'
    }
}

getData() {
    console.log('child getData() called, gestation started')
    setTimeout(() => {
        console.log('gestation complete')
        this.setState({
            data: 'updated child'
        })
    }, 3000)
}

componentDidMount() {
    console.log('component mounted, conception success')
    this.getData();
}

render() {
console.log('child render method called')
return (
  <div>
    <h2>{this.state.data}</h2>
  </div>
)
}
}

export default LifeCyclesCDMChild
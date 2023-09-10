import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {

constructor(props) {
    console.log('child loading')
    super(props)
    this.state = {
        data: 'gestating child...'
    }
}

getData() {
    console.log('child getData() called, gestation started')
    setTimeout(() => {
        console.log('gestation complete')
        this.setState({
            data: 'gestation complete, childbirth success'
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
    <h3>
      < LifeCyclesCDMChild />
    </h3>
  </div>
)
}
}

export default LifeCyclesCDM
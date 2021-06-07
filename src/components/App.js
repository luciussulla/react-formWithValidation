import './App.css';
import React from 'react';
import '../index.css';
import SwitchButton from './SwitchButton'

class App extends React.Component {
  state = {
    time: 0, 
    active: false,
  }

  addSecond = () => {
    console.log("Add second called")
    this.setState({
      time: this.state.time + 1
    })
  }

  handleClick = ()=> {
    console.log("click is being handled")
    if(this.state.active) {
      clearInterval(this.intervalIndex)
    } else {
      this.intervalIndex = setInterval(()=> {
        this.addSecond()
      },1000)
    }

    this.setState({
      active: !this.state.active
    })
  }

  render () {
    console.log("rendienrg")
    return (
      <> 
        <p>{this.state.time}</p> 
        <SwitchButton handleClick={this.handleClick}/>
      </>
    )
  }
}

export default App;
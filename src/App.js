import './App.css';
import React from 'react';
import './index.css';

class App extends React.Component {
  state = {
    time: this.getTime()
  }

  getTime(){
    const currentTime = new Date()
    console.log(currentTime)
    return({
      hours: currentTime.getHours(), 
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    })
  }

  setTime() {
    const time = this.getTime()
    this.setState({time})
  }
  
  componentDidMount() {
    setInterval(this.setTime.bind(this),1000)
  }

  render () {
    const {hours, minutes, seconds} = this.state.time
    
    return (
      <>  
      <div>
        {minutes}:{hours}:{seconds}
      </div>
      </>
    )
  }
}

export default App;
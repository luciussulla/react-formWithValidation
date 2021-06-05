import './App.css';
import React from 'react';
import './index.css';

class App extends React.Component {
  state = {
    city: "Londyn", 
    text: "my city is nice"
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <>
        <form>
          <label>
            Podaj miasto:
            <input value={this.state.city} onChange={this.handleChange} type="text" name="city"/>
          </label>
          <br/>
          <label> 
            Napisz cos o miescie
            <textarea onChange={this.handleChange} value={this.state.text} name="text" cols="30" rows="10"></textarea>
          </label>
          <br />
          <button> Zapisz się</button>
        </form>
      </>
    )
  }
}

export default App;
import './App.css';
import React from 'react';
import '../index.css';
import Word from './Word'

class App extends React.Component {

  state = {
      isLoaded: false,
      words: []
  }

  fetchData = ()=> {
    fetch('data/words.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        words: data.words, 
        isLoaded: true,
      })
    })
  }

  componentDidMount = ()=> {
    setTimeout(this.fetchData, 1000)
  }

  render () {    
    const words = this.state.words.map(word=>(
      <Word key={word.id} english={word.en} polish={word.pl}/>
    ))
    return (
      <> 
        <ul>
          {this.state.isLoaded ? words : <p>This is only a spinner</p>}
        </ul>
      </>
    )
  }
}

export default App;
import React from 'react'
// import {Component} from React

class ShoppingList extends React.Component {
  state  =  {
    text: 'text'
  }

  handleButton() {
    console.log('button clicked')

    const letter = "a"

    this.state({
      text: this.state.text + letter
    })
  }

  render(){
    return (
      <section>
          <button onClick={this.handleButton}>Klik</button>
          <h1>{this.state.text}</h1>
      </section>
    )
  }
}


export default ShoppingList
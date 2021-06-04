import './App.css';
import React from 'react';
import './index.css';
// import ShoppingList from './ShoppingList';

class App extends React.Component {

  state = {
    availableProducts: 7, 
    shoppingCart: 7,
  }

  handleRemove = () => {
      this.setState({
          shoppingCart: this.state.shoppingCart-1
      })
  }

  handleAdd  = ()=> {
    this.setState({
      shoppingCart: this.state.shoppingCart+1
    })
  }

  handleBuy = ()=> {
      this.setState({
        availableProducts: this.state.availableProducts - this.state.shoppingCart,
        shoppingCart: 0,
      }, console.log(this.state.availableProducts, this.state.shoppingCart))
  }

  render(){
    return (
      <>
        <button disabled={this.state.shoppingCart == 0 ? true : false} onClick={this.handleRemove}>-</button>
          <span style={
              {color: this.state.availableProducts==0 ? "grey" : "black"}
          }>
          {this.state.shoppingCart}</span>
        <button disabled={this.state.shoppingCart >= this.state.availableProducts ? true : false}onClick={this.handleAdd}>+</button>
         {this.state.availableProducts > 0 && 
           <button onClick={this.handleBuy}>Kup</button>
         } 
      </>
    )
  }
}

export default App;
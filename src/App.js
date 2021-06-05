import './App.css';
import React from 'react';
import './index.css';
import Header from './Header.js'
import ListItems from './ListItems.js'

class App extends React.Component {
  state = {
    items: [
      {id: 1, txt: "herbata", price: 20,  active: false},
      {id: 2, txt: "obiad",   price: 50,  active: false},
      {id: 3, txt: "kolacja", price: 100, active: false}, 
      {id: 4, txt: "woda",    price: 10,  active: false}
    ], 
    totalAmount: 0,
  }

  handleStatusChange = (id) => {
      const itemsFiltered = this.state.items.map(item => {
        if(item.id===id) {
          item.active = !item.active
        }
        return item
      })  
      this.setState({
        items: [...itemsFiltered]
      })
      console.log('make active clicked')
      const price = this.state.items.reduce((total, item) => {
        if(item.active) {
          return total + item.price
        } else { 
          return total
        }
     },0)
     console.log(price)
     const items = this.state.items
     this.setState({
       items,
       totalAmount: price
     })
  }   

  doZaplaty = ()=> <p>{this.state.totalAmount}</p>
  

  // countActivePrice = ()=> {
  //   const price = this.state.items.reduce((total, item) => {
  //      if(item.active) {
  //        return total + item.price
  //      } else { 
  //        return total
  //      }
  //   },0)
  //   console.log(price)
  //   const items = this.state.items
  //   this.setState({
  //     items,
  //     totalAmount: price
  //   })
  // }

  render () {
    return (
      <>
        <Header items={this.state.items}/>
        <ListItems allItems={this.state.items} changeStatus={this.handleStatusChange} />
        {this.doZaplaty()}
      </>
    )
  }
}

export default App;
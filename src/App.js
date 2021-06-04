import './App.css';
import React from 'react';
import './index.css';
// import ShoppingList from './ShoppingList';

const Item = ({name, age, sthg})=> (
  <div>
    <h1>{name}</h1>
    <h2>{age}</h2>
  </div>
)

class App extends React.Component {
  state = {
    items: ["jablko", "sliwka", "gruszka"], 
    users: [
      {name: 'jil', age: 26, sex: 'male'},
      {name: 'bo', age: 20, sex: 'female'},
      {name: 'karol', age: 21, sex: 'female'},
      {name: 'mili', age: 19, sex: 'male'},
    ], 
    which: ''
  }
  
  setWhich = (which) => { 
      which === "male" ? this.setState({which: "male"}) : this.setState({which: "female"})
  }

  filteredUsers = (which)=> {
    switch (which) {
      case "male":
        return this.state.users.filter(item=> item.sex=="male")
        break;
      case "female":
        return this.state.users.filter(item=> item.sex=="female")
        break;
      default: 
        console.log("invalid option")
        return []  
    }
  }

  render () {
    return (
      <>
      <ul>
          {
            this.filteredUsers(this.state.which).map(item=> <Item key={item.name} name={item.name} age={item.age}/> )
          }
      </ul>
      <button onClick={()=>this.setWhich('male')}>Men</button>
      <button onClick={()=>this.setWhich('female')}>Fem</button>
      </>
    )
  }
}

export default App;
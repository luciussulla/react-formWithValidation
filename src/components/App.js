import './App.css';
import React from 'react';
import '../index.css';

const API = 'https://randomuser.me/api/?results=1';

const ButtonFetchUsers = ({click})=> (
  <button onClick={click}>pobierz usersow</button>
)
  
const UsersList = ({users})=> {
  const usersDiv = users.map(user=> (
  <div key={user.id.value}>
    <img src={user.picture.large} alt={user.name.last}/>
    <h4>{user.name.title} {user.name.last}</h4>
    <p>{user.email}</p>
  </div>
  ))
  
  return(
    <div>
      { 
        usersDiv
      }
    </div> 
  ) 
}

class App extends React.Component {

  state = {
    users: []
  }

  handleDataFetch = ()=> {
    console.log("click")
    fetch(API)
    .then(res=> {
      if(res.ok === true) {
        return res
      } 
      throw new Error(res.status) 
    })
    .then(res => res.json())
    .then(data => {
      const user = data.results[0]
      const users = this.state.users
      const newUsers = [...users, user]
      this.setState({
        users: newUsers
      })
    })
    .catch(error => console.log(error))
  }
  
  render () {    
    const users = this.state.users
    return (
      <> 
          <ButtonFetchUsers click={this.handleDataFetch}/>
          {users ?  <UsersList users={users}/> : null}
      </> 
    )
  }
}

export default App;
import './App.css';
import React from 'react';
import '../index.css';

class App extends React.Component {

  state = {
    username: "",
    email: "",
    password: "", 
    accept: false, 
    message: "",
    errors: {
      username: false,
      email: false,
      password: false, 
      accept: false, 
    }
  }

  messages = {
    username_incorrect: 'Nazwa musi byc dluzsza nisz 10 znakow i nie moze miec spacji',
    email_incorrect: "Bark @ w emailu",
    password_incorrect: "Haslo musi miec 8 zmakow",
    accept_incorrect: "Nie potwierdzona zgoda",
  }
  
  handleChange = (e)=> {
      const name = e.target.name
      const type = e.target.type

      if(type==="text" || type==="email" || type==="password") {  
        const value = e.target.value 
        this.setState({
          [name]: value
        })
      } else if (type==="checkbox") {
        const checked = e.target.checked
        this.setState({
          [name]: checked
        })
      }
  }

  formValidation = ()=> {
    let username = false
    let password = false 
    let email = false
    let accept = false
    let correct = false

    if(this.state.username.length>10 && this.state.username.indexOf(' ')===-1) {
      username = true
    }
    if(this.state.email.indexOf('@') !==-1) {
      email = true
    }
    if(this.state.password.length===8) {
      password=true
    }
    if(this.state.accept === true) {
      accept = true
    }
    if(username && email && password && accept) {
      correct = true
    }

    return({
      correct, 
      username, 
      password,
      email, 
      accept
    })
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    const validation = this.formValidation()
    console.log(validation)

    if(validation.correct) {
      console.log("wyslany")
      this.setState({
        username: "",
        email: "",
        password: "", 
        accept: false, 
        message: "Formularz wyslany",
        errors: {
          username: false,
          email:    false,
          password: false, 
          accept:   false, 
        }
      })
    } else {
      this.setState({
          username: !validation.username,
          email:    !validation.email,
          password: !validation.password, 
          accept:   !validation.accept, 
      })
    }
  }

  componentDidUpdate() {
    if(this.state.message !== '') {
      setTimeout(()=> this.setState({message: ""}),3000)
    }
  }

  render () {    
    return (
      <>  
        <div className="App">
          <form onSubmit={this.handleSubmit} noValidate>
            
            <label htmlFor="user">Twoje imie
              <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
              {this.state.errors.username && <span>{this.messages.username_incorrect}</span> }
            </label>
            
            <label htmlFor="email">Twoje email
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
              {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
            </label>

            <label htmlFor="user">Twoje haslo
              <input type="text" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
              {this.state.errors.password && <span>{this.messages.password_incorrect}</span>}
            </label>

            <label htmlFor="accept">
              <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}/>Agree
              {this.state.errors.checkbox && <span>{this.messages.accept_incorrect}</span>}
            </label>

            <button>Zapisz się</button>
          </form>

          {this.state.message && <h3>{this.state.message}</h3>}
        </div>
      </> 
    )
  }
}

export default App;
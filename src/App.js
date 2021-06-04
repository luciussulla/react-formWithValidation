import './App.css';
import React from 'react';
import './index.css';
// import ShoppingList from './ShoppingList';

const FormComponent = ({formHandler,checkboxHandler, isConfirmed})=> {
  return(
    <form onSubmit={formHandler}> 
      <input type="checkbox" id="age" onChange={checkboxHandler} checked={isConfirmed}/>
      <label htmlFor="age"/>
      <br />
      <button>Kup bilet</button>
    </form>
  )
}

const ValidationMessage = (props)=> {
  const {txt} = props
  return <p>{txt}</p>
}

class App extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed, 
      isFormSubmitted: false,
    })
  }

  displayMessage = ()=>{
    if(this.state.isFormSubmitted) {
      if(this.state.isConfirmed) {
        return <ValidationMessage txt={"UMożesz obejrzec filmu"}/>
      } else {
        return <ValidationMessage txt={"Nie możesz obejrzec film"}/>
      }
      // console.log(this.state.isConfirmed)
    }  
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      })
    }
  }

  render(){
    console.log(this.state.isConfirmed)
    const {isConfirmed} = this.state
    console.log(isConfirmed)

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <FormComponent formHandler={this.handleFormSubmit} checkboxHandler={this.handleChange} isConfirmed={this.state.isConfirmed}/>
        {this.displayMessage()}
      </>
    )
  }
}

export default App;
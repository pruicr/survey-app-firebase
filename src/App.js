import React, { Component } from 'react'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
      },
      submitted: false
    }
  }

  handleNameSubmit(e) {
    const name = this.refs.name.value
    this.setState({name}, () => {
      console.log(this.state)
    })
    e.preventDefault()
  }

  render() {
    let user
    let questions
    if(this.state.name && this.state.submitted === false) {
      user = (
        <h2>
          Welcome {this.state.name}
        </h2>
      )
    } else if(!this.state.name && this.state.submitted === false) {
      user = (
        <span>
          <h2>Please enter your name to begin the survey</h2>
          <form onSubmit={this.handleNameSubmit.bind(this)}>
            <input type="text" placeholder="Enter name..." ref="name"/>
          </form>
        </span>
      )
      questions = ''
    } else if(this.state.submitted === true) {

    }
    return (
      <div className="App">
        <div className="App-header text-center">
          <h2>Survey App</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
      </div>
    )
  }
}

export default App

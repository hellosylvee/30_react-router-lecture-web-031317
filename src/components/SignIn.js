import React, { Component } from 'react'

class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  
  render(){
    return(
      <form onSubmit="handleSubmit" className="navbar-form navbar-left">
        <span className="form-group">
          <input type="text" className="form-control" placeholder="Enter Username" />
          <input type="text" className="form-control" placeholder="Enter Password" />
        </span>

        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}

export default SignIn

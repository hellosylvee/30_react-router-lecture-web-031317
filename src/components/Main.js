import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import LoginForm from './LoginForm'
import StudentsContainer from '../containers/StudentsContainer'
import { logIn } from '../api'
import isAuthenticated from './hocs/isAuthenticated'

const AuthedStudentsContainer = isAuthenticated(StudentsContainer)

export default class Main extends Component {

  handleLogin(params){
    logIn(params)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        this.props.histroy.push('/students')
        // this.setState({
        //   loggedIn: true
        // })
      })
  }

  render() {
    return (
      <div>
        < NavBar title="Dog and Student Lister" color="black" />
        <Switch>
          < Route path="/login" render={() => <LoginForm handleLogin={this.handleLogin}/>} />
          < Route path="/students" component={AuthedStudentsContainer} />
          < Route exact path="/about"  render={() => <h1>This is an app about dogs and students</h1>}/>
        </Switch>
      </div>
    )
  }
}

//Route path renders correct components on line 12-13

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){
  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  }

  return (
    <nav className={`navbar ${colors[props.color]}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand'>
            { props.title }
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/students/new">Add a Student</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

//Link shows the text in the browser on line 21-24

// DEMO PURPOSES ONLY

import React, { Component } from 'react'

export default class Link extends Component {

  handleClick(e){
    e.preventDefault()
    console.log(e.target)
    window.history.pushState(null, null, this.props.to)
    // alert the browserRouter that things have changed
  }

  render(){
    return (
      <a href={this.props.to} onClick={this.handleClick.bind(this)}>{ this.props.children }</a>
    )
  }
}

import React, { Component } from 'react'
import StudentsPage from '../components/StudentsPage'

import { fetchStudents, createStudent, deleteStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      students: []
    }

    this.handleAddStudent = this.handleAddStudent.bind(this)
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
  }

  //Making GET request to get students
  componentDidMount(){
    fetchStudents()
      .then( students => this.setState({
        students: students
      }) )
  }

  //Making POST request of object, then adding student to list
  handleAddStudent(name){
    createStudent(name)
      .then( student => this.setState( prevState =>  ({ students: [...prevState.students, student] }) ))
      .catch(e => console.log(e))
  }

  //Making a DELETE request of object, then rendering list
  handleDeleteStudent(id){
    deleteStudent(id)
      .then( () => {
        // console.log(this.props)
        this.props.history.push('/students') //redirect to /students first
        this.setState( prevState => ({ students: prevState.students.filter( student => student.id != id) }))
    })
  } //Deletes students on the list

  render(){
    return (
      <StudentsPage
        students={this.state.students}
        onSubmit={this.handleAddStudent}
        onDelete={this.handleDeleteStudent} />
    )
  }
}

export default StudentsContainer

//Passing 3 props to StudentsPage component
// props = {
//   students: {this.state.students},
//   onSubmit: {this.handleAddStudent},
//   onDelete: {this.handleDeleteStudent}
// }

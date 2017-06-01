import React from 'react'

class StudentEdit extends React.Component {

  constructor(props){
    super(props)
    this.state = { student: props.student }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props){
    this.setState({
      student: props.student
    })
  }

  handleInputChange(e){
    const name = e.target.value
    this.setState((state, props) => {
      return {
        student: Object.assign({}, props.student, {name: name})
      }
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit( this.state.student )
  }

  render(){
    if (!this.props.student) {
      return null
    }

    return (
      <div className='col-md-8' >
        <h2>Edit {this.props.student.name}</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Student Name</label>
          <input type='text' value={this.state.student.name} onChange={this.handleInputChange} />
          <input type='submit' value='Edit Student' />
        </form>
      </div>
    )
  }
}

StudentEdit.defaultProps = {
  student: {name: ''}
}

export default StudentEdit

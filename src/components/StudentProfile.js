import React from 'react'

function StudentProfile(props) {
  console.log(props)
  return(
    <div>
      <h1>{props.student.id}</h1>
      <button type="button" className="btn btn-danger" onClick={ () => { props.onDelete(props.student.id) } }>Delete Student</button>
    </div>
  )
}

export default StudentProfile

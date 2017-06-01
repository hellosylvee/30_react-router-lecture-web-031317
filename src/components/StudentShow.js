import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentShow(props){
  if (!props.student) {
    return null
  }
  console.log(props)
  return (
    <div>
      <h1>{props.student.name}</h1>
      <button className='btn btn-danger' onClick={() => props.onDelete(props.student.id)}>Delete This Student</button>
      <Link className='btn btn-primary' to={`/students/${props.student.id}/edit`}>Edit Student</Link>
    </div>
  )
}

{/* <button className="btn btn-primary" onClick={() => props.redirect(`/students/${props.student.id}/edit`)}>Edit Student</button> */}

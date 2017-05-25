import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import StudentForm from './StudentForm'
import StudentProfile from './StudentProfile'

function StudentsPage(props) { //Received 3 props from StudentsContainer
  const nameEls = props.students.map( (student, i) => //Mapping through and displaying in list
    <li key={i}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
  )

  // console.log(props.onDelete)
  return (
      <div>
        <div className='col-md-4'>
          <ul>
            { nameEls }
          </ul>
          <Switch>
            <Route path="/students/new" />
            <Route path="/students" render={() => <Link to="/students/new">Add Student</Link>} />
          </Switch>
        </div>

        <div className='col-md-8'>
          <Switch>
            <Route path="/students/new" render={() => <StudentForm onSubmit={ props.onSubmit } />} />
            <Route path="/students/:id" render={({match}) => {
              const student = props.students.find(student => student.id == match.params.id)
              // return <h1>{student.name}</h1>}
              console.log(props.students)
              return <StudentProfile student={student} onDelete={props.onDelete}/>}
            }/>
          </Switch>
        </div>
      </div>
  )
}

export default StudentsPage

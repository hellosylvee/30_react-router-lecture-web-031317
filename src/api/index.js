export function fetchStudents(){
  return fetch("http://localhost:3000/api/v1/students")
    .then( res => res.json() )
}

export function createStudent(name){
  return fetch("http://localhost:3000/api/v1/students", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify( {student: {name: name}} )
  }).then( res => res.json() )
}

export function deleteStudent(id){
  return fetch(`http://localhost:3000/api/v1/students/${id}`, {
    method: 'DELETE'
  }).then( res => res.json() )
}

export function updateStudent(student){
  return fetch(`http://localhost:3000/api/v1/students/${student.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( {student: student})
  }).then( res => res.json() )
}

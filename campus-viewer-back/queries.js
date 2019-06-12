const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'students-and-campuses',
  password: 'password',
  port: 5432,
})


const getStudents = (request, response) => {
  pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getStudentByName = (request, response) => {
  const name = decodeURI(request.params.name)
  pool.query('SELECT * FROM students WHERE name = $1', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addStudent = (request, response) => {
  const { name, campus, gpa, image } = request.query
  console.log(request.query)
  pool.query('INSERT INTO students (name, campus, gpa, image) VALUES ($1, $2, $3, $4)', [name, campus, gpa, image], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results)
    response.status(201).send(`User added with ID (This doesn't work properly):`)
  })
}
//
// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body
//
//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }
//
// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)
//
//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

module.exports = {
  getStudents,
  getStudentByName,
  addStudent,
  // updateUser,
  // deleteUser,
}

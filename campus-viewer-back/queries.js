const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'students-and-campuses',
  password: 'password',
  port: 5432,
})

const getStudents = (request, response) => {
  console.log("Received request for students from frontend.");
  pool.query('SELECT * FROM students ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getStudentById = (request, response) => {
  const id = parseInt(request.params.id)
  console.log("Received request for student with id " + id + " from backend.");
  pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getCampusById = (request, response) => {
  const id = parseInt(request.params.id)
  console.log("Received request for campus with id " + id + " from backend.");
  pool.query('SELECT * FROM campuses WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addStudent = (request, response) => {
  const { name, campus, gpa, image } = request.body
  console.log("Adding student with name: " + name);
  pool.query('INSERT INTO students (name, campus, gpa, image) VALUES ($1, $2, $3, $4)', [name, campus, gpa, image], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Student added with id: ${id}`)
  })
}

const getCampuses = (request, response) => {
  console.log("Received request for campuses from frontend.");
  pool.query('SELECT * FROM campuses ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addCampus = (request, response) => {
  const {name, location, image, description, population } = request.body
  console.log("Received request to add campus.")
  pool.query('INSERT INTO campuses (name, location, image, description, population) VALUES ($1, $2, $3, $4, $5)', [name, location, image, description, population], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results)
    response.status(201).send(`Campus added with name: ${name}`)
  })
}

const updateCampus = (request, response) => {
  const id = parseInt(request.params.id)
  console.log("Receieved request for update campus with id: " + id)
  const { location, image, description, population, name } = request.body
  pool.query('UPDATE campuses SET location = $1, image = $2, description = $3, population = $4, name = $5 WHERE id = $6', [location, image, description, population, name, id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Campus modified with NAME: ${name}`)
  })
}

const updateStudent = (request, response) => {
  const id = parseInt(request.params.id)
  console.log("Receieved request for update campus with id: " + id)
  const { gpa, image, campus, name } = request.body
  pool.query('UPDATE students SET gpa = $1, image = $2, campus = $3, name = $4 WHERE id = $5', [gpa, image, campus, name, id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Student modified with ID: ${id}`)
  })
}

const deleteStudent = (request, response) => {
  const id = parseInt(request.params.id)
  console.log(`Attempting to delete student with id: ${id}`);
  pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Student deleted with ID: ${id}`)
  })
}

const deleteCampus = (request, response) => {
  const id = parseInt(request.params.id)
  console.log(`Attempting to delete campus with id: ${id}`);
  pool.query('DELETE FROM campuses WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Campus deleted with ID: ${id}`)
  })
}

module.exports = {
  getStudents,
  getStudentById,
  getCampuses,
  getCampusById,
  addStudent,
  addCampus,
  updateCampus,
  updateStudent,
  deleteStudent,
  deleteCampus
}

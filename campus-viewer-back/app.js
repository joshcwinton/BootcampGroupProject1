const express = require('express')
const morgan = require('morgan')
const parser = require('body-parser')
const queries = require('./queries')
const app = express()

app.use(morgan("dev"))
app.use(parser.json())
app.use(
  parser.urlencoded({
    extended: true,
  })
)

// Get campuses and students (all or by name)
app.get('/students', queries.getStudents)
app.get('/students/:name', queries.getStudentByName)
app.get('/campuses', queries.getCampuses)
app.get('/campuses/:name', queries.getCampusByName)

// Add new campuses and students
app.post('/students', queries.addStudent)
app.post('/campuses', queries.addCampus)

// Update campuses and students
app.put('/students/:name', queries.updateStudent)
app.put('/campuses/:name', queries.updateCampus)

// Delete campuses and students
app.delete('/students/:name', queries.deleteStudent)
app.delete('/campuses/:name', queries.deleteCampus)

app.listen(3000, function() {
	  console.log('Campus viewer app listening on port 3000!')
})

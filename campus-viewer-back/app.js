const express = require('express')
const morgan = require('morgan')
const parser = require('body-parser')
const db = require('./queries')
const app = express()

app.use(morgan("dev"))
app.use(parser.json())
app.use(
  parser.urlencoded({
    extended: true,
  })
)
//
// let campusArray=[
//     {
//         name: "Campus 1",
//         image: "campus1.jpg",
//         population: 1,
//         id: 1
//     },
//     {
//         name: "Campus 2",
//         image: "campus2.jpg",
//         population: 2,
//         id: 2
//     },
//     {
//         name: "Campus 3",
//         image: "campus3.jpg",
//         population: 2,
//         id: 3
//     },
// ]
//
// let studentsArray=[
//     {
//         name: "Belinda",
//         id: 1
//     },
//     {
//         name: "Josh",
//         id: 2
//     },
//     {
//         name: "Stephen",
//         id: 3
//     }
// ]
//
// deleteCampus = (campusName, campusArray) => {
//   let index = -1
//   for (let i = 0 i < campusArray.length i++) {
//     if (campusArray[i].name == campusName) {
//       index = i
//     }
//   }
//   if (index > -1) {
//     campusArray.splice(index, 1)
//   }
//   console.log(campusArray)
// }

app.get('/students', db.getStudents)
app.get('/students/:name', db.getStudentByName)
app.post('/students', db.addStudent)
// app.get('/data/campuses', function(request, response){
//     console.log('Request for campus data...')
//     response.json(campusArray)
// })
//
// app.post('/newcampus/submit', function(request, response){
//   console.log('Post request for a new campus...')
//   campusArray.push(request.body)
//   console.log(campusArray)
//   response.send(request.body)
// })
//
// app.delete('/campuses/delete/:campusname', function(request, response){
//   let campus = decodeURI(request.params.campusname)
//   console.log(request)
//   console.log('Post request to delete a campus: ' + campus)
//   deleteCampus(campus, campusArray)
//   response.send(request.body)
// })

app.listen(3000, function() {
	  console.log('Campus viewer app listening on port 3000!')
})

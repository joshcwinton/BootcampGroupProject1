var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');

var app = express();

app.use(morgan("dev"));
app.use(parser.json());

let campusArray=[
    {
        name: "Campus 1",
        image: "campus1.jpg",
        population: 1
    },
    {
        name: "Campus 2",
        image: "campus2.jpg",
        population: 2
    },
    {
        name: "Campus 3",
        image: "campus3.jpg",
        population: 2
    },
]

let studentsArray=[
    {
        name: "Belinda",
        id: 1
    },
    {
        name: "Josh",
        id: 2
    },
    {
        name: "Stephen",
        id: 3
    }
]

app.get('/data/students', function(request, response){
    console.log('Request for student data...');
    response.json(studentsArray);
});

app.get('/data/campuses', function(request, response){
    console.log('Request for campus data...');
    response.json(campusArray);
});

app.listen(3000, function() {
	  console.log('Campus viewer app listening on port 3000!');
});

const Joi = require('joi')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');


// Configura body-parser como middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
]

// PORT
const port = process.env.port || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`))

const validateCourse = Joi.object({
    name: Joi.string().min(3).required()
})

// home page
app.get("/", (req, res) => {
    res.send("hello word!!!")
})

// shows all elements
app.get('/api/courses', (req, res) =>{
    res.send(courses)
})

// shows elements for id
app.get('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('the couse with the given ID was not found!!!')
    res.send(course)
})

// add new alement
app.post('/api/courses', (req, res) => {
    const { error, value } = validateCourse.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

// update element existend
app.put('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('the couse with the given ID was not found!!!')

    const { error, value } = validateCourse.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    course.name = req.body.name
    res.send(course)
})

// delete element existend
app.delete('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('the couse with the given ID was not found!!!')

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course)
})
const express = require('express')
const todoController = require('./controllers/todoController')
const path = require('path')
const ejs = require('ejs')
const morgan = require('morgan')
const session = require('cookie-session');


const app = express()

//Settings
app.set('port', 3000)
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, 'public','views'))

//Using sessions
app.use(session({secret: 'todotopsecret'}))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//Routes/controlllers
todoController(app)
app.use(require('./controllers/todoController'))

//Listening the server
app.listen(app.get('port'), ()  => {
    console.log('Server on port 3000')
})
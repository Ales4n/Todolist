const express = require('express')
const ejs = require('ejs')
const morgan = require('morgan')
const path = require('path')
const session = require('cookie-session');
const todoController = require('./controllers/todoController')
//const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express()

//Settings
app.set('port', 3000)
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Using sessions
app.use(session({secret: 'todotopsecret'}))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//Routes/controlllers
todoController(app)

//Listening the server
app.listen(app.get('port'), ()  => {
    console.log('Server on port 3000')
})
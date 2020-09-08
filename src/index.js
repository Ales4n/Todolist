const express = require('express')
const ejs = require('ejs')
const morgan = require('morgan')
const session = require('cookie-session');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express()

//Settings
app.set('port', 3000)

//Using sessions
app.use(session({secret: 'todotopsecret'}))

//Set up template engine
 app.set('view engine', 'ejs')

//static files
app.use(express.static(path.join(__dirname, 'public')))
//Routes
.get('/todo', (req, res) => {
        
})

.post('/todo/add', (req, res) => {
     
})

.get('/todo/delete/:id', (req, res) => {
     
})

//Listening the server
app.listen(app.get('port'), ()  => {
    console.log('Server on port 3000')
})
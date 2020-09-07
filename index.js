const express = require('express')
const ejs = require('ejs')
const morgan = require('morgan')
const session = require('cookie-session');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express
()
//Using sessions
app.use(session({secret: 'todotopsecret'}))


//Routes
.get('/todo', (req, res) => {
        
})

.post('/todo/add', (req, res) => {
     
})

.get('/todo/delete/:id', (req, res) => {
     
})
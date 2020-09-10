const bodyParser = require('body-parser')

let data = [{item: 'walk dog'}, {item: 'feed the fish'}, {item: 'Go to mercadona'} ]
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('index.html', {todos: data})
    })
    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body)
        res.json(data)
    })

    app.delete('/todo/:item', (req, res) => {

        data = data.filter((todo) =>{
        return todo.item.replace(/ /g, '-') !== req.params.item
    })
    res.json(data)
    })
} 
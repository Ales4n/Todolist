module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo')
    })

    app.post('/todo/add', (req, res) => {

    })

    app.delete('/todo/delete/:id', (req, res) => {

    })
} 
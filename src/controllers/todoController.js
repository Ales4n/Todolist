module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index.html')
    })
    app.get('/todo/add', (req, res) => {
        
    })

    app.delete('/todo/delete/:id', (req, res) => {

    })
} 
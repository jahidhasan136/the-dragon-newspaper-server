const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('dragon in running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectNews = news.find(p => p._id === id)
    res.send(selectNews)
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if (id === 0) {
        res.send(news)
    }
    const selectCategories = news.filter(n => parseInt(n.category_id) === id)
    res.send(selectCategories)
})


app.listen(port, () => {
    console.log(`dragon API is running on port ${port}`)
})


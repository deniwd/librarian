const express = require('express')
const app = express()
const port = 3000

const route = require('./routes')

// app.set('view engine', 'ejs')
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use('/', route)

app.get('/books/edit', (reg, res) => {
    res.json('Ini Home Index')
})

app.post('/books/edit', (reg, res) => {
    res.json('Ini Home Index')
})

app.get('/books/delete', (reg, res) => {
    res.json('Ini Home Index')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


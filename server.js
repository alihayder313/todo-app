 const path = require('path')
 const express = require('express')
 const layout = require('express-layout')

const routes = require('./route')
const app = express()

const bodyparser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
    layout(),
    express.static(path.join(__dirname, 'public')),
    bodyparser.urlencoded({extended:false})
]
app.use(middlewares)
app.use('/', routes)

app.listen(8080, () => {
    console.log('app running at http://localhost:8080')
})
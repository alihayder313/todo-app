const express = require('express')
const mysql = require('mysql')
const router = express.Router()


const conn = getConnection()
const pass = "password"

function getConnection() {
    return mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: 'root',
        database: "todo"
    })
    
}

router.get('/', (req, res) =>{
    res.render('index.ejs')
})

router.get('/get_todos', (req, res) =>{
    console.log('this is me ');
  const querystring = "SELECT * FORM todos" 
  conn.query(querystring, (err, rows, fields)=>{



    if(err) {
        console.log(err,'err')
        console.log('failed to query @ /get_todo: " + err ')
    }
    console.log("getting data from database @ /get_todos")
    res.json(rows)
  })
})

router.post('/add_todo', (req, res) => {
 const todo = req.body.add_todo_input;
 const queryString = "INSERT INTOS todos (todo) VALUES (?)"
 conn.query(queryString, [todo], (err, rows, fields) => {
    if (err) {
        console.log("failed to insert @ /add_todo: " + todo + " " + err )
    }

    console.log("Todo Added: " + todo)
    res.redirect('/')    
    })
 })   

 router.post('/complete_todo/:id', (req, res) => {
    const todo_id = req.params.id
    const queryString = "UPDATE todos SET complete = '1' WHERE todo_id =? "
    conn.query(queryString, [todo_id], (err, rows, fields) => {
        if (err) {
        console.log("failed to complete @ /complete_todo: " + todo_id + " " + err )
        }
        console.log("@/complete_todo/ completing todo with id" +  todo_id)
        res.redirect('/')
    })
})

module.exports = router
get_todos()

function get_todos() {
    var request = new XMLHttpRequest();
    var requestURL = '/get_todos'
    request.open('GET', requestURL)
    request.responsetype = 'json'
    request.send()
    request.onload = function() {
    var todos = request.response
    printTodos(todos)
    }
    }

    function printTodos(todos) {
        var table = document.getElementById("todo_table")

        for ( var i in todos) {
        const todo_id = todos[i]. todo_id
        const todo = todos[i].todo
        var row = document.createElement("tr")
        var todo_cell = document.createElement("td")
        var todo_button = document.createElement("button")
        todo_button.setAttribute("onclick", "completetodo(" + todo_id + ")")
    
        todo_button.innerHTML = todo
        todo_cell.append(todo_button)
        row.append(todo_cell)
        table.append(row)
        }
    }

function completetodo(todo_id) {
    var form = document.getElementById("complete_todo_form")
    form.action = form.action + todo_id
    form.onsubmit()
}


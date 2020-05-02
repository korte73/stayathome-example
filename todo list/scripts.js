console.log("System Online");
let newTodo = "";

// Put field value to list
function readField() {
    let newTodo = document.getElementById("ifield").value;
        $("#todolist").append("<li>" + newTodo + "</li>");

}

$("#ibutton").click(readField) 
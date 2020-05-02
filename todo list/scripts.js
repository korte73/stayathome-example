console.log("System Online");
let newTodo = "x";
console.log(newTodo)
$("#ibutton").click( function() {
    newTodo = document.getElementById("ifield").value;
    console.log(newTodo);
    $("#todolist").append("<li>"+newTodo+"</li>");

})
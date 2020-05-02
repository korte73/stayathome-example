console.log("System Online");
let newTodo = "x";
$("#ibutton").click( function() {
    let newTodo = document.getElementById("ifield").nodeValue;
    console.log(newTodo);
    $("#todolist").append("<li>"+newTodo+"</li>");

})
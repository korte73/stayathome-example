console.log("System is online")
let c = 0;

$("#increase").click( function() {
    c++;
    $("h1").text(c);

})

$("#decrease").click( function() {
    c--
    $("h1").text(c);
})
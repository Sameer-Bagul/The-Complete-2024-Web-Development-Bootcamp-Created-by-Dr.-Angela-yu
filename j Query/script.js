$("h1").css("color", "yellow");
$("p").css("font-size", "rem");
// $("h1").addClass("newh1")  //* this line will add a class to the tag 'h1' 
// $("h1").text("bye")        //* this line will replace the text in the tag 'h1'

$("a").attr("href" , "https://www.yahoo.com");

$("button").click(function(){
    $("h1").css("color", "gray");
});


$("body").keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key);
});


$("h1").on("click", function(){
    $("h1").css("color", "red")
});

//?     it is a question.
//todo: this is a todo.
//*     this is a normal statement.
//!     this is a warning statement.
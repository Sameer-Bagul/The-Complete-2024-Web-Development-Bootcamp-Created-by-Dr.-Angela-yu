function test() {

    var a = prompt("Enter a ")
    var b = prompt("Enter b")

    console.log("a is " + a);
    console.log("b is " + b);

    var temp;
    temp = a ;
    a = b ;
    b =  temp;

    console.log("a is " + a);
    console.log("b is " + b);

}
// test();

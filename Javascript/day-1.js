var x = 0; // global variable can be assest in any function
function msg(){
   document.writeln(x);
}
function msgs(){
   document.writeln(x);
}
msg();
msgs();



function a(){
    var y = 9; // local variable can be assess only within a function
    document.write(y)
}
a();
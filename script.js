function display(a){

    b=document.getElementById("box").value;
    console.log(b)

    x=b+a
    console.log(x)
   d= document.getElementById("box").value=x
   console.log(d)
   
 }
 function calculate(){
    b=document.getElementById("box").value;
    console.log(eval(b))
    document.getElementById("box").value=eval(b)
}

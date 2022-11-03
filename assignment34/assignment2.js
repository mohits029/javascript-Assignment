// 2. Boolean value is either true or false.
// a. Write three JavaScript statements which provide truthy value.

let x=5;
if (x==5){
    console.log("x is equal to 5");
}

if(x>=1){
    console.log("x is grater than 1");
}

if(x<10){
    console.log("x is smaller than 10");
}



// b. Write three JavaScript statements which provide falsy value.

if (x!=5){
    console.log("x is equal to 5");
}

if(x<=1){
    console.log("x is grater than 1");
}

if(x>10){
    console.log("x is smaller than 10");
}
else{
    console.log("Above values are falsy values")
}
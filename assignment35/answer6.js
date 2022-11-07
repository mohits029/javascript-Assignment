// 6. Develop a small script which generate any number of characters random id

let x= Math.random()*1000000000000;
console.log(Math.floor(x));

// 8. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using
// loop without using a reverse method.

let fruit= ['banana', 'orange', 'mango', 'lemon'];
const fruit2= [];
for (let i=fruit.length-1; i>=0; i--){
    fruit2.push(fruit[i]);
}

fruit= fruit2
console.log(fruit);
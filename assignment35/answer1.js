// 1. In the following shopping cart add, remove, edit itemsconst shoppingCart = ['Milk',
// 'Coffee', 'Tea', 'Honey']
// a. add 'Meat' in the beginning of your shopping cart if it has not been already
// added
// b. add Sugar at the end of you shopping cart if it has not been already added
// c. remove 'Honey' if you are allergic to honey
// d. modify Tea to 'Green Tea'


const shoppingCart= ['Milk','Coffee','Tea','Honey'];
console.log(shoppingCart);

shoppingCart.push("Meat");
console.log(shoppingCart);

shoppingCart.push("Sugar");
console.log(shoppingCart);

for (let i=0; i<shoppingCart.length-1; i++){
    if (shoppingCart[i]== 'Honey'){
    shoppingCart.splice(i,1);
    }
}

console.log(shoppingCart);

for (let i=0; i<shoppingCart.length-1; i++){
    if (shoppingCart[i]=='Tea'){
        shoppingCart.splice(i,1, "Green tea");
    }
}

console.log(shoppingCart)

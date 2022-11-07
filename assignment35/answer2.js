// 2. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a
// CSS preprocess'. If it does not exist add Sass to the array and print the array.

let arr1= ['Python','Dango','CSS','HTML','Javascript','Sass'];
let flag= false;

for (let i=0; i< arr1.length; i++){
    if (arr1[i]=='Sass'){
        console.log("Sass ia a CSS Preprocess");
        flag= true;
    }
}

if (flag== false){
    arr1.push("Sass");
}

console.log(arr1);
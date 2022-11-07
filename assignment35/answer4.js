// 4. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle
// and Amazon are big IT companies.

const arr1= ["Facebook","Oracle","Google", "Microsoft", "IBM", "Apple","Amazone"];
console.log(arr1);


// 5. Change each company name to uppercase one by one and print them out

for (let i=0; i<arr1.length; i++){
    arr1[i]= arr1[i].toUpperCase();
}
console.log(arr1);
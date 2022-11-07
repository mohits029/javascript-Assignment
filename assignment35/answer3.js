// 3. The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs()
// method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25,24];
ages.sort();
console.log(ages);

console.log(`min age= ${ages[0]}`);
console.log(`max age= ${ages[ages.length - 1]}`);

// Find the median age(one middle item or two middle items divided by two)
let median;
let N= ages.length;

if (N%2==0){
    let x= ages[N/2];
    let y= ages[N/2-1];
    
    median= (x+y)/2;
}
else{

    median= ages[Math.floor(N/2)];
}

console.log("Median= ",+median)

// Find the average age(all items divided by number of items)
let Mean;
let sum=0;
for (let i=0; i<ages.length; i++){
    sum= sum+ages[i];
}

Mean= sum/ages.length;
console.log("Mean= ",+Mean);



// Find the range of the ages(max minus min)

console.log("Range= ", ages[ages.length-1]-ages[0]);




// Compare the value of (min - average) and (max - average), use abs()
// method

let Compare= Math.abs(ages[0], ages[ages.length-1]);
console.log("Compare= ",Compare);
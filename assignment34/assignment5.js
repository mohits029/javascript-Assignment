// 5. Write a code which can give grades to students according to theirs scores:
// a. 80-100, A
// b. 70-89, B

// Untitled 2

// c. 60-69, C
// d. 50-59, D
// e. 0-49, F

let marks= 50;

if(marks>=80 && marks<=100){
    console.log('A');
}
else if(marks>=70 && marks<80){
    console.log('B');
}
else if(marks>=60 && marks<70){
    console.log('C');
}
else if (marks>=50 && marks<60){
    console.log('D');
}
else if(marks<50){
    console.log('F');
}
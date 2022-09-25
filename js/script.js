// VARIABLES
// var a = 'abc';

// const x = 5;
// let x = 5;

// x = 4;

// ES5
// function x() {
//     return 4;
// }

// var x = function(){
//     return 4;
// }


// Add two numbers ES5
// function addNumbers(a, b){
//     return a + b;
// }

// var result = addNumbers(4, 6);
// console.log(result)

// Add two numbers ES6 using arrow function

// const addNumbers = (a, b) => {
//     return a + b;
// } 

// const addNumbersAndPrint = (a, b) => {
//   const result = a + b;
//   document.getElementById('num').innerHTML = result;
// };

// addNumbersAndPrint(5, 3);
// const result = addNumbers(4, 6);
// console.log(result);

// ARRAY METHOD (ES5)

// const a = ['a', 'b', 'c', 'd', 'e'];

// console.log(a[3]);


// for(let i = 0; i<a.length; i++){
//     console.log(a[i], i);
// }

// ARRAY METHOD (ES6)

// function num(val, index) {
//     console.log(val, index)
// }

// a.forEach(num);

// a.forEach((abc, xyz) => {
//     console.log(val, index)
// });

// MAP function

const a = [5,10,15,17,19,25,38,40];
// const b = [2, 4, 6]
// var b = [];

// for(let i = 0; i<a.length; i++){
//     b.push(a[i] * 2);
// }

// const b = a.map((val) => {
//     return val * 3;
// })



// console.log(b);


// const b = a.filter((val) => {
//     return val % 5 == 0;
// });
// console.log(b);

const b = a.find((val) => {
    return val % 5 == 0;
});
console.log(b);



/* 
...Number challenge

*/

let a = 1_00;
let b = 2_00.5;
let c = 1.4;
let d = 2.4;

// find smallest number in all varaiables and retern integer 
console.log(Math.trunc(Math.min(1_00 , 2_00.5 , 1.4 , 2.4 )));

// use varainale a + d one time to get the needed output
console.log(Math.trunc(Math.min(1_00 , 2_00.5 , 1.4 , 2.4 )))

console.log(Math.floor(d));   
console.log(Math.ceil(d) - 1); 
console.log(Math.trunc(d));   
console.log(Math.round(d - 0.5)); 

//use varaiables b + d to get thi values
console.log(Math.round((b + d) / 3));
console.log((Math.round((b + d) / 3 * 100) / 100).toString()); 



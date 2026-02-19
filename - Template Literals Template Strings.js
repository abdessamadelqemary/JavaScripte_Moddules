/*
.. - Template Literals (Template Strings)
..=> Template Literals (or Template Strings) are a modern way to write strings in JavaScript that make it easier to mix variables and text without using messy plus signs (+).
Instead of using quotes (" " or ' '), you use backticks (`). The magic happens with ${}.
(' ') backticks => Think of them as a new type of quote that works just like regular quotes (" " or ' '), but with superpowers.
(${}) => ${} creates a portal where variables and code can enter the string
console.log(` `)
console.log(` ${}`)
*/
let a = "We Love";
let b = "JavaScripte"
let c = " And";
let d = "Programming";
console.log(a + " " + b + " \n" + c + " " + d)

console.log(` ${a} ${b} ${c} ${d}`);

//exemple

let title = "abdessamad";
let desc = "abdessamad el qemary";

let marKup = ` 
<div class="card">
   <div class="child">
     <h2> ${title} </h2>
     <p> ${desc} </p>
   </div>
</div>
`;
document.write(marKup);




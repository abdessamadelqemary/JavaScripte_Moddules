/*
..Creat 3 varaibales [title, descripion, date]
..all in one statement
..varaibles name most be two world 
..descroption content is elqemary abdessamad
..date content is 25/10
...creat variable contains div and thid div contains
...h3 for title
...p for paraghraphe 
...spam for time 
.... add this card to page 4 times
....use temolate literales for concatenate

extra 
 -Repeat
 codepen.io + comments

*/

let title = "abdessamd el qemary";
let descripion = "javascripte tutorail";
let date = "25/10";

let card = ` 
   <div class="card"> 
     <h3> hello ${title} </h3>
     <p> ${descripion} </p>
     <spam> ${date} </spam>
   </div>
`
document.write(card.repeat(4));
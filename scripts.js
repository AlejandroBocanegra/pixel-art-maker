// var div = document.getElementById('godDiv').
// document.querySelector (".mouseClickDiv").style.backgroundColor = '#eeffaa';

// document.getElementById("div1").addEventListener("click", function() {
//     alert("You clicked the DIV element!");
//   }, false);

/*
Set a background color of a specific <div> element:

document.getElementById("myDiv").style.backgroundColor = "lightblue";

Example
Return the background color of a specific <div> element:

alert(document.getElementById("myDiv").style.backgroundColor);

Example
Return the background color of a document:

alert(document.body.style.backgroundColor);
*/

// function myFunction() {
//     document.getElementById("div1").style.backgroundColor = "lightblue";
//   }




   var color = ['blue', 'red', 'blue', 'yellow', 'green', 'brown', 'black', 'pink', 'grey','orange'];
   var i = 0;
 document.getElementById("div1").addEventListener("click", function() {
     i = 0 < color.length ? ++i : 0;
     document.getElementById("div1").style.backgroundColor = color[i];
   }, false);

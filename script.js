const prompt = require('prompt-sync')();
console.log("Hello: I'm Conditionals")

let a=19;

if(a>18)
 console.log("You can drive");

else
 console.log("You can't drive");

for(let i =0;i<100;i++)
  console.log(i);

let j=0;
while(j<50)
{
 console.log(j);
 j++;
}

//Function in Java Script

function nice(name)
{
    console.log("Hey " + name + " you are nice!");
}

nice("Ankit");
nice("Mohit");

function sum(x,y)
{
    return x+y;
}
result = sum(1,2);
console.log("The sum of these numbers is : ",result);

//String in Java Script

let aa = "Ankit";
console.log(aa[0]);
console.log(aa[1]);
console.log(aa[2]);
console.log(aa[3]);
console.log(aa[4]);

console.log(aa.length);

let first = "Ankit";
let last = "Sarkar";

console.log(last.slice(1,5));
console.log(last.concat(first)); 

console.log("My first name is " + first + " and my last name is " + last);
console.log(`My fist name is ${first} and my last name is ${last}`);

let full = "Sar\"Kar";
console.log(full);

let full2= `Sar"Kar`;
console.log(full2);

//Calculator

let num1 = parseInt(prompt("Enter num 1 : "));
let num2 = parseInt(prompt("Enter num 2 : "));

let op = prompt("Enter the operator : ");

let rnum = Math.random();



// Iteration 1: Names and Input
let hacker1 = "Hugo";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Hugoo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker2 > hacker1){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split('').join(" "));

console.log(hacker2.split('').reverse().join(''));


if(hacker1.length > hacker2.length){
    console.log("The driver's  goes first");
}else if(hacker1.length < hacker2.length){
    console.log("Yo, the navigator goes first definitely.");
}else if(hacker1 === hacker2){
    console.log("What?! You both have the same name?");
}

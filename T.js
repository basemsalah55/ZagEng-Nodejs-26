// 1
let str = prompt("Enter a string:");
if (str !== null) {
console.log(str.length);
console.log(str[0]);
console.log(str[str.length - 1]);
}

// 2
let messyStr = prompt("Enter a string with spaces:");
if (messyStr !== null) {
messyStr = messyStr.trim().toLowerCase();
console.log(messyStr);
}

// 3
let arr = [];
for (let i = 0; i < 5; i++) {
let num = Number(prompt("Enter number:"));
if (!isNaN(num)) {
arr.push(num);
}
}
console.log(arr);
console.log(arr.length);
if (arr.length) {
console.log(arr[0]);
console.log(arr[arr.length - 1]);
}

// 4
for (let i = 1; i <= 20; i++) {
if (i === 10) continue;
console.log(i);
}

// 5
for (let i = 0; i < 5; i++) {
let num = Number(prompt("Enter number:"));
if (!isNaN(num) && num > 6) {
console.log(num);
}
}

// 6
let numCheck = Number(prompt("Enter number:"));
if (!isNaN(numCheck)) {
if (numCheck > 0) {
console.log("Positive");
} else if (numCheck < 0) {
console.log("Negative");
} else {
console.log("Zero");
}
}

// 7
let values = ["15", "8.5", true, false, null];
for (let i = 0; i < values.length; i++) {
console.log(Number(values[i]));
}

// 8
let sentence = prompt("Enter a sentence:");
if (sentence !== null) {
if (sentence.includes("JavaScript")) {
console.log("Found");
} else {
console.log("Not Found");
}
}

// 9
for (let i = 0; i < 3; i++) {
let name = prompt("Enter name:");
if (name !== null) {
console.log(name);
}
}

// 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// 11
for (let i = 0; i < 5; i++) {
let age = Number(prompt("Enter age:"));
if (!isNaN(age) && age >= 18) {
console.log(age);
}
}

// 12
let anotherStr = prompt("Enter a string:");
if (anotherStr !== null) {
console.log(anotherStr.length);
}

// 13
for (let i = 0; i < 4; i++) {
let num = Number(prompt("Enter decimal number:"));
if (!isNaN(num)) {
let rounded = Math.round(num);
if (rounded >= 8) {
console.log("Pass");
} else {
console.log("Fail");
}
}
}

// 14
for (let i = 1; i <= 30; i++) {
if (i % 2 === 0) {
console.log(i);
}
}

// 15
let evenOdd = Number(prompt("Enter number:"));
if (!isNaN(evenOdd)) {
if (evenOdd % 2 === 0) {
console.log("Even");
} else {
console.log("Odd");
}
}

// 16
let numbers = [];
for (let i = 0; i < 5; i++) {
let num = Number(prompt("Enter number:"));
if (!isNaN(num)) {
numbers.push(num);
}
}

if (numbers.length) {
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
if (numbers[i] > max) max = numbers[i];
if (numbers[i] < min) min = numbers[i];
}

console.log("Max:", max);
console.log("Min:", min);
}

// 17
let line = prompt("Enter a sentence:");
if (line !== null) {
let words = line.trim().split(" ");
for (let i = 0; i < words.length; i++) {
console.log(words[i]);
}
}

// 18
for (let i = 10; i >= 1; i--) {
    console.log(i);
}



// 19
let total = 0;

for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Enter number:"));
    total += num;
}
console.log(total);



// 20
let text = prompt("Enter a string:");

if (text.startsWith("J")) {
    console.log("Yes");
} else {
    console.log("No");
}



// 21
let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);



// 22
let Numbers = [];

for (let i = 0; i < 5; i++) {
    Numbers.push(Number(prompt("Enter number:")));
}

let newArray = Numbers.map(n => n * 2);
console.log(newArray);


// 23
let Str = prompt("Enter a string:");

for (let char of Str) {
    console.log(char);
}


// 24
let num = Number(prompt("Enter a number:"));

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Yes");
} else {
    console.log("No");
}
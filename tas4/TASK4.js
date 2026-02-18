//1
function toUpperCaseArray(arr) {
  return arr.map(item => item.toUpperCase());
}

console.log(toUpperCaseArray(["ahmed", "sara"]));

//2
function checkStudents(arr) {
  return arr.map(student => {
    student.passed = student.score >= 50;
    return student;
  });
}

console.log(checkStudents([
  { name: "Ahmed", score: 80 },
  { name: "Sara", score: 40 }
]));

//3
function filterStrings(arr) {
  return arr.filter(item => item.length > 4);
}

console.log(filterStrings(["hi", "hello", "welcome"]));

//4
function getAverage(arr) {
  let sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

console.log(getAverage([10, 20, 30]));

//5
function getAdults(arr) {
  return arr
    .filter(person => person.age >= 18)
    .map(person => person.name);
}

console.log(getAdults([
  { name: "Ahmed", age: 23 },
  { name: "Sara", age: 16 },
  { name: "Mona", age: 19 }
]));

//6
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

//7
function getUnique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(getUnique([1, 1, 2, 1, 3]));

//8
function cleanString(str) {
  return str.replace(/[$!#%^&*]/g, "");
}

console.log(cleanString("Hi! How are you?"));
console.log(cleanString("Are_u,coming?"));

//9
function replaceSpaces(str) {
  return str.replace(/ /g, "#");
}

console.log(replaceSpaces("Hello World"));

//10
function modifyNumbers(arr) {
  return arr.map(num => num % 2 === 0 ? num + 1 : num - 1);
}

console.log(modifyNumbers([73, 22, 52, 214]));
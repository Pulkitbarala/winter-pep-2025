/*Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
 if (confirm(question)) yes();
 else no();
}
ask(
 "Do you agree?",
 function() { alert("You agreed."); },
 function() { alert("You canceled the execution."); }
);*/
const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

//Write an arrow function called square that takes a number as an argument and returns its square.
const square = (x) => x*x;
console.log(square(5));

//Identify the output of the following code
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));

//Given an array of numbers, use an arrow function to create a new array that contains the squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].
const arr = [1, 2, 3];
const squareArr = arr.map((x) => x*x);
console.log(squareArr);

//Use an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh"
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));

//Create a chainable object using arrow functions that allows you to set a value and then add or multiply it by a number. For example: const result = chainable(5).add(3).multiply(2); // result should be 16
const chainable = (x) => {
    return {
        add: (y) => chainable(x + y),
        multiply: (y) => chainable(x * y),
        value: () => x
    };
};
const result = chainable(5).add(3).multiply(2).value();
console.log(result);

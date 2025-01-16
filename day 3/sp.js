function calculateDiscount(price, discount = 10) {
    const finalPrice = price - (price * (discount / 100));
    return finalPrice;
}
console.log(calculateDiscount(100))

function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}
console.log(mergeArrays([1, 2], [3, 4]))

function logArguments(...args) {
    console.log(args);
}
console.log(logArguments(1, 'hello', true))

function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}
console.log(createMessage('Hello', 'how', 'are', 'you'))

function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));


function createUserProfile(username, age = 25, country = "uknown") {
    return { username, age, country };
}
console.log(createUserProfile('xyz')); 
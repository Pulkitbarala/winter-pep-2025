const add = (a, b) => console.log(a + b)
add(5, 5)

const msg = () => {
    console.log("Hello World")
}
msg()
const test = (x, y, z) => {
    console.log(x + y + z)
}
test(5, 4, 2)

const tests = (x, y, z = 4) => {
    console.log(x + y + z)
}
tests(5, 4)

const square = x => x * x
console.log(square(5))

const person=(firstname,lastname)=>({
    first:firstname,
    last:lastname
});
console.log(person("John","Doe"))

const Person=(firstname,lastname)=>
    {

    var a={first:firstname,
    last:lastname}
    return a;
};
console.log(Person("John","Doe"))
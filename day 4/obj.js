var name1 = "RAMA";
var color = "blue";
var age = 15;
var msg = function () {
    console.log(this.name1 + " Welcome");
}
var person = { name1, color, age, msg };
person.msg();
console.log(person, name1) 

let LAST_NAME = "lastname";
let fullname={
    firstname:"somya",
    [LAST_NAME]:"sharma"
};
console.log("My full name is "+fullname.firstname+" "+fullname.lastname);
// Primitive Data Types: Are immutable which means once their are made they cannot be changed.

// Number: These are numeric values, such as integers or floating-point numbers.
let age = 25;
let tmp = -10.56;

//String: Represents textual data enclosed in single or double quotes.
let name = "Doe";
let message = 'Welcome, Back!';

//Boolean: Represents logical values(True, False).
let isStudent = true;
let hasCar = false;

// Undefined: Represents a variable that has been declared without a value.
let x;
let y;

// Null: Represents the intentional absence of any object value.
let z = null;
let r = null;

// so primitive data types are typically assigned directly to the varriables and are compared by value.

// Reference Data Types: are mutable,meaning they can be changed or modified even after they are assigned.

// Object: Represents a collection of key-value pairs enclosed in curl braces.
let person = {
    name: "Smith",
    age: 26,
    isStudent: true
}

// Array: Represents an ordered list of values enclosed in square brackets.
let numbers = [1, 2, 3, 4, 5, 6];

// Function: Represents a reusable block of code that can be invoked.
function greet(name){
    console.log("Hello, " + name + "!");
}
// Date: Represents a specific moment in time.
let currentDate = new Date();

// RegExp: Represents a regular expression pattern for matching strings.
let pattern = /abc/;
// Reference data types are typically assigned by reference and are compared by reference.
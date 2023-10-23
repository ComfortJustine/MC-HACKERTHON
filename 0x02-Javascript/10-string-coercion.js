// Template Literals: Template literals, denoted by backticks,allow for string interpolation and automatic string conversion of other data types.
let name = "Naomi";
let age = 5;
let sentence = `My name is ${name} and I am ${age} years old.`;

console.log(sentence); // Output: "My name is John and I am 5 years old."
````
// In this example, the variables `name` and `age` are implicitly converted to strings and interpolated within the template literal.

// Comparison Operators: It performs and converts one or both operands to a common type before making the comparison.

let num = 10;
let str = "10";

console.log(num == str); // Output: true
console.log(num === str); // Output: false

````
// In this example, the `==` operator performs loose equality comparison and implicitly converts the number `10` to a string for comparison with the string `"10"`. The `===` operator performs strict equality comparison and does not perform string coercion, so the comparison returns false.
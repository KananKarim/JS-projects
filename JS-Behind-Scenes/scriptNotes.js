// ! NOTES

// ? imperative, declarative

/*
 * Procedural programming
 * object oriented programming
 * functional programming
 */

/* 
    ? High level
    ? Garbage-collected
    ? interpreted or just-in-time compiled
    ? multi-paradigm
    ? Prototype based, object oriented
    ? First-class functions
    ? Dynamic
    ? Single-threaded
    ? Non-blocking event loop
*/

/*
? Js engine
! consists - CALL STACK and HEAP
    * Js engine - Program that executes the js codes,  example: v8 engine(google)
    * Call Stack - Where our code is executed (in execution context)
    * HEAP - where our objects are stored

steps of working of js engine
*/

/* 
? Interpretation, Compilation, Just-in time compilation
    * Interpretation - interpreter runs through the source code and convert line-by line into machine code and executes line by line
    * Compilation - Entire source code is converted to machine code at once then executed
    *Just in time compilation - entire code is compiled then executed immediately, no portable file
*/

/* 
? JS runtime in the browser (container such as box)
    * JS engine
    * Callback queue
    * WEB APIs - Functionalities provided to the engine, accessible on the window object(Dom, timers, Fetch api) Browser provide these
    * Event loop - It checks for the callback queue when the callback function is triggered, it puts this function in the call stack.
*/

/* 
! After compilation
? Execution context
    * Global execution context - created for top level code (code is not inside any function)
    * Execution context - For each function call, new EC is created

    * The process itself.
        - For the top level codes, Global context created and sent to the call stack
        - For each function, new EC context is created and sent to the CS in order
    *Inside Ex 
        - Variable environment; declarations, functions, argument objects
        - Scope chain
        - This keyword
    *In the arrow function, there is no this keyword or arguments object
*/

/* 
? Scope chain
! every scope has access to the outer scope variables(Variable lookup)
    * Scoping
    * Lexical Scope
    * Scope
        - Global
        - Function
        - Block
    * Scope of variable
    ! var is function scope and doesnt care about block scope
    ! let and const are block scope
    if, for () {
        ! block scope
    }
    function () {
        ! function scope
    }
    ! SCOPE CHAIN ONLY WORKS UPWARDS
    ! Scope chain has nothing to do with function called order!!
*/

/* 

? HOISTING
! Before execution, code is scannned for variable declarations, and for each variable, a new property is created in the variable environment object
    * Function declarations are hoisted, initial value function value itself
    * variables declared by var are hoisted, initial value undefined
    * Temporal dead zone (let and const has its zone)
*/

/* 
? THIS keyword
! in arrow function, this keyword shows it's parent object
! in regular function sh
    * THIS keyword points to the object that is calling the method
    * If there is no owner, it will point undefined (strict mode) in sloppy mode to the window object
*/

/* 
? objects and primitive types
! Primitive data types
    * Number
    * String
    * Boolean
    * Undefined
    * BigInt
    * Symbol
    * Null
! Objects (Reference types)
    * Object literal
    * Function
    * Array
    * Class
!Process
    * Js engine consists of call stack and heap.Primitive data types are stored in the call stack in their execution context.
    * Objects address and value are stored in the heap.
!For example
    ? Primitive
    * const name = "kenan"
    * identifier = name, address = 01, value = "kenan" in the call stack.
    ? Objects
    * const obj = {name:"kenan"}
    * identifier = obj, address = 02, value = 03
    * address = 03 value = {name:"kenan"}
! For that when we change the one object's value, it also affect to the another object that has reference to the current one.Because we are not changing their value, we are changing the value that is in the heap, the value in the call stack has same value(address - 03)

!! To copy objects without make reference
    * Object.assign({}, obj) - Shallow copy, not deep clone (in nested -- BOOMMMM)
*/

// ! codes

// function parent() {
//     const block1 = "kenan"
//   if (2 > 1) {
//     var function1 = 1;
//   }

//   function child() {
//     console.log(block1);
//     console.log(function1);
//   }

//   child();
// }

// parent();

// function getAge() {
//   if (2 > 1) {
//     const add = (a, b) => {
//       return a + b;
//     }
//   }

//   console.log(add(2, 4));
// }

// getAge();
// const firstName = "Kenan";

// console.log(num);
// var num = 10;

// getName();

// function getName() {
//   console.log("Hello");
// }

// let my_name = "kenan";
// my_name = "z";
// console.log(my_name);

// const obj = {
//   firstName: "kenan",
//   getName: () => {
//     console.log(this);
//   },
// };

// const f = obj.getName
// f()

// "strict mode";

// const person = {
//   firstName: "kenan",
//   age: 21,
//   calcAge() {
//     console.log(this.firstName);
//     const showName = () => {
//       console.log(this);
//     };
//     showName();
//   },
// };

// person.calcAge();

const obj1 = {
  firstName: "kenan",
  age: 21,
};

const obj2 = Object.assign({}, obj1);
obj1.age = 22;
console.log(obj2);

console.log(obj1);
console.log(obj2);

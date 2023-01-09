// Whenever run javascript program global execution context is created. it has two component one is momory component also know as varibale env and code component. 

// 1. way to print in js
// console.log('this');
// alert("me");
// document.write("this is document write");

// 2. js console API
// console.time('your code took');
// console.log('hello console');
// console.log(4+23);
// console.log([1,2,3,4]);
// console.table({vikash: 'this me', marks: 34});
// console.warn("this is a warning");
// console.error('this is error');
// console.clear();
// console.timeEnd('your code took');

// var, let and const
const vikash = 'Hello'; // no change, no redeclare

// Difference btw let and var
// let	                                        |      var
// -----------------------------------------------------------------------------
// let is block-scoped.	                        |   var is function scoped.
// let does not allow to redeclare variables.   |   var allows to redeclare variables.
// Hoisting does not occur in let.	            |   Hoisting occurs in var.

// case: 1
let getNumber = function () {
    var hum = "Kaun";
    let you = "don't_no";
    if (hum) {
        var your = 'name';
        let me = "vikash";
        console.log(your + " " + me + " " + hum + " " + you);
    } else {
        console.log("What's your name?");
    }

    console.log(your + " " + me);
}
// getNumber();

// case: 2
let sanu = 'Hyy'; // no redeclare
// let sanu = 'Hyy'; // Throw error
var marks = '200'; // allow redeclare
// var marks = '300'; // no error

// case: 3
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// Hoisting are two types varibale hoisting and function hoisting
x = 5; // assign
// console.log(x);
var x; // declarations
// let x; // it will throw error
// Important: JavaScript only hoists declarations, not initializations.
var x = 5; // Initialize x
// console.log(x + " " + y);  
var y = 7; // Initialize y

console.log(a);
// console.log(b);
// console.log(c);
getName();
console.log(getName);

var a = 8;
// let b = 1; // it will throw error, doesn't support hoisting
// const c = 3; // it will throw error, doesn't support hoisting
function getName() {
    console.log("Hosting: Vikash");
}
// const getName = function() { // it will throw error
//     console.log("Hosting: Vikash");
// }
// const getName = ()=> { // it will throw error - it is behave like a variable
//     console.log("Hosting: Vikash");
// }

// 3. variable, datatypes and operator in js
// var num1= 23;
// var num2= 3;
// console.log(num1+num2);
// var flt= 34.4;
// var str1= 'this is str type';

// // Boolean
// var a= true;
// var b= false;
// console.log(a, b);

// // At a very high level, there are two types of datatypes in js
// // 1. primitive datatype: undefined, null, Number, String, Boolean, Symbol
// // 2. reference datatype: Array and Object

// // conditional statement in js
// var age= 23;
// if (age<2) {
//     console.log('you are a2 years old');
// }
// else if(age<=5){
//     console.log('you are a kid');
// }
// else if (age>18) {
//     console.log('you are a young men');
// }
// else{
//     console.log('you are a old men');
// }

// // loops in js
// var hrr= [1,3,4,5];

// // for loop in js
// // for(var i=0;  i<hrr.length; i++){
// //     console.log(hrr[i]);
// // }

// // forEach loop in js
// // hrr.forEach(function(element){
// //     console.log(element);
// // });

// // while loop in js
// // const ac=0;
// // ac++;
// // ac= ac+1;
// let j=0;
// // while(j<hrr.length){
// //     console.log(hrr[j]);
// //     j++;
// // }

// // do-while loop in js
// do{
//     console.log(hrr[j]);
//     j++;
// }while(j<hrr.length);
// console.clear();

// Arrow function
// One liners do not require braces/return
// one line will automatically return
// const greet = ()=>{
//     return "good morning";
// }
// const greet = () =>  "Good Morning";
// const greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
// const greet = name => "Good Morning " + name + ending;

// console.log(greet('Harry'))

// // Objects methods in js
window.person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// JavaScript object
const jsObj = {
    fname: "Vikash",
    lname: "Maskhare",
    que: "How are you?"
}

console.log(jsObj)
console.log(typeof (jsObj));

const convertedIntoJson = JSON.stringify(jsObj);
console.log(convertedIntoJson)
console.log(typeof (convertedIntoJson));

const convertedIntoObject = JSON.parse(convertedIntoJson);
console.log(convertedIntoObject)
console.log(typeof (convertedIntoObject))

// Json
function isJsonObject(strData) {
    try {
        JSON.parse(strData);
    } catch (e) {
        return false;
    }
    return true;
}
let jsondata = '{"username": "admin"}';
console.log(typeof jsondata);
let notjsondata = 'username-admin';
console.log(isJsonObject(jsondata)); // returns true
console.log(isJsonObject(notjsondata)); // returns false

// // Array methods
myarr = ["fan", 'camera', 23, null, true];
// console.log(myarr.length);
// myarr.indexOf(23);
// // myarr.pop();
// // myarr.join(" * ");
// // myarr.push("vikash");
// // myarr.shift();
// // myarr.unshift("vikash");
// // myarr.toString();
// console.log(myarr);

// // String methods
window.mystring = "vikash is a good boy good";
// console.log(mystring.length);
// console.log(mystring.indexOf("good"));
// console.log(mystring.lastIndexOf("good"));
// console.log(mystring.slice(0,6));
// d=mystring.replace("vikash", "sanu");
// console.log(d, mystring);

// // Date in js
// // let mydate= new Date;
// // console.log(mydate.getTime());
// // console.log(mydate.getFullYear());
// // console.log(mydate.getDay());
// // console.log(mydate.getMinutes());
// // console.log(mydate.getHours());

// // DOM MANUPILATION: document object model
// let elem= document.getElementById('click');
// console.log(elem);

// let elemclass= document.getElementsByClassName('container');
// console.log(elemclass);
// // elemclass[0].style.background= "yellow";
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text-success");

// // JSON- javascript object notation
// console.clear();
// // Event in js
// function clicked(){
//     console.log('button was clicked');
// }

// window.onload= function(){
//     console.log('window was loaded');
// }

// firstcontainer.addEventListener('click', function(){
//     console.log('click on container');
// })

// Cookies
// to set cookie
// document.cookie= "username=vikash";

// to access cookie in string format
// console.warn(document.cookie);

// // local Storage in javascript
// To set data 
localStorage.setItem("fname", "vikash");

// To read data
// localStorage.getItem('fname');

// To remove data
// localStorage.removeItem('fname');

// To clear localstorage
// localStorage.clear();

// Session storage
// To set data
sessionStorage.setItem('nameKya', 'vikash');

// To get data
// sessionStorage.getItem('nameKya');

// To remove data
// sessionStorage.removeItem('nameKya');

// To clear sessionStorage
// sessionStorage.clear();

// Promises - Promises are used to handle asynchronous operations in JavaScript. - it has three stages 1) Pending 2) Fullfilled 3) Rejected
/* Promise()         ------- it will take condition
   /     \
  /       \
resolve()  reject()
/           \
/              \
then()           catch()         ---------Both are callback function */

// let complete = true;
// const prom = new Promise(function(resolve, reject) {
//     if(complete) {
//         resolve('Successfull.');
//     } else {
//         reject('Failed.');
//     }
// });

// console.log(prom); // it is the object

// Another way
// function prom(complete) {
//     return new Promise(function(res, rej) {
//         console.log('Fetching data, please wait.'); // it is in pending state
//         if(complete) {
//             res('I am successfull.');
//         } else {
//             rej('I am failed');
//         }
//     });
// }

// function prom(complete) {
//     return new Promise(function(res, rej) {
//         console.log('Fetching data, please wait.'); // it is in pending state
//         setTimeout(() => {
//             // codeing to fetch data from server
//             if(complete) {
//                 res('I am successfull.');
//             } else {
//                 rej('I am failed');
//             }
//         }, 2000);
//     });
// }

// it will call two times to prom()
// prom(false).then(function(result) {
//     console.log(result);
// });
// prom(false).catch(function(error) {
//     console.log(error);
// });

// Solution of above: method chaining
// prom(true).then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.log(error);
// });

function prom(a, b) {
    return new Promise(function (res, rej) {
        console.log('Fetching data, please wait.'); // it is in pending state
        var c = a / b;
        setTimeout(() => {
            // codeing to fetch data from server
            if (c) {
                res(`Your answer: ${c}.`);
            } else {
                rej('Failed to calculate.');
            }
        }, 2000);
    });
}

// prom(4, 5).then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.log(error);
// });

// Real life example with ajax 
function prom() {
    return new Promise(function (resolve, reject) {
        console.log('Fetching data, please wait.'); // it is in pending state
        setTimeout(() => {
            // codeing to fetch data from server
            $.get('https://jsonplaceholder.typicode.com/users', function (data) {
                resolve(data);
            }).fail((err) => {
                reject('Failed to load json data.');
            })
        }, 3000);
    });
}

// prom().then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.log(error);
// });


// async and await
// function test() {
//     return "Hello";
// }

// asynchronus means work in background
async function test() {
    return "Hello";
}

// test().then((result)=> {
//     console.log(result);
// });

/*
Scope:
* Block scope - Variables declared inside a pair of curly braces cannot be accessed from outside.
* Function scope - Variables declared inside a function connot be accessed from outside the function.
* Global scope - Gloabally scoped variable can be accessed inside a block or function.
*/

// Sometimes, we need to assign a variable depending on a condition. that time we use conditional(Ternary) operator (?)
// let result = condition ? value1 : value2;

// multiple(?)
// let age = prompt('age?', 18);
// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';
// alert( message );

// Nullish coalescing operator '??'
// The result of a ?? b is: ?? returns the first argument if it’s not null/undefined. Otherwise, the second one
// let user;
// alert(user ?? "Anonymous"); // Anonymous (user not defined)
// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

/* 
The important difference between || and ?? is that:
    || returns the first truthy value.
    ?? returns the first defined value.
*/

// function hello(name) {
//     let phrase = `Hello, ${name}!`;

//     debugger;  // <-- the debugger stops here

//     console.log(phrase);
// }

// hello("vikash");

// The “non-existing property” problem: solution - Optional chaining '?.'
// let user = {}; // a user without "address" property
// console.log(user.address.street); // Error!

// let user = {}; // user has no address
// console.log( user?.address?.street ); // undefined (no error)

// Regular expression
// let str = 'vikash is a something';
// var reg = /vikash/; // we always write regEx btw / and /

// reg.exec(str) ? console.log('found'): console.log('Not found');

// Metacharacter
let regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
// regex = /^harrdc/; // ^ means expression will match if string starts with
// regex = /harry$/; // $ at the end of the string means "string ends with"
// regex = /h.rry/; //matches any one character
// regex = /h*rry/; //matches any 0 or more characters
// regex = /ha?rryi?t/; //? after character means that character is optional
// regex = /h\*rry/; // '\' to escape the metachar, metachar will be as a normal string

// let str = "h*rry means codewith"; // 

// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }

// JavaScript Modules
// JavaScript modules allow you to break up your code into multiple files. : means - import and export
// If we are using normal export then need to use {}, and using default export, don,t need  to use {}. 

// Bind(), call() and apply()
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function () {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemonName now

logPokemon(); // 'Pika Chu I choose you!'

// Two ways to write function in object and toJSON custom method
const person = {
    name: 'vikash',
    age: 22,
    // toJSON: function() {
    //     // first way 
    //     return `${this.name} age ${this.age}`;
    // },
    toJSON() {
        // second way
        return `${this.name} age ${this.age}`;
    }
}

const dataObj = {
    data: person
}

console.log(JSON.stringify(dataObj)); // first stringify() method looks for toJSON() inside object if it exists see result

// Execution contexts and call stack
// Scope and scope chain
// Hoisting 

// this keyword, regular function and arrow function
const jonas = {
    firstName: 'vikash',
    age: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
}
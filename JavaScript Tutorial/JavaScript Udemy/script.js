// Truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonus'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if(money) {
//     console.log("We have money;");
// } else {
//     console.log("We don't have money");
// }

// let height; // it's a declaration, not defination
// (height) ? console.log("YAY, Height is defined") : console.log("Undefined");

// Switch statement
// const day = 'Monday';
// switch(day) {
//     case 'Monday': // day === 'Monday'
//         console.log("It's a monday");
//         break;
//     case 'Tuesday':
//         console.log("It's a tuesday");
//         break;
//     default:
//         console.log("Date are not matched");
// }

// Debugging with the console and breakpoint
// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'cels',
//         value: prompt("Degrees celsius: ")
//     };
//     debugger;
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };

// console.log(measureKelvin());

// Execution contexts and call stack
// Scope and scope chain
// Hoisting 

// this keyword
// console.log(this) // global this point to window object

// Regular function can be called with new keyword but arrow function not
function calcNumberRegular () {
    console.log("Regular function");
}
new calcNumberRegular();

const calcNumberMid = function () {
    console.log("Regular function");
}
new calcNumberMid();

const calcNumberArrow = () => { // this keyword in arrow function uses this of parent
    console.log("Arrow function");
}
// new calcNumberArrow(); // it will throw error
calcNumberArrow();

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
};
jonas.calcAge();

// Function accepting callback function
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const transformer = function (str, fn) {
    console.log(`Transformed: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

// transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
});

// Function returns function
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeter = greet('Hey');
greeter('Vikash');
greeter('Sanu');

greet('Hello')('Vikash'); // it will work

// Call and apply method
const lufthansa = {
    airline: 'lufthansa',
    iatacode: 'LH',
    booking: [],
    // book: function () {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
        );
        this.booking.push({flight: `${this.iatacode}${flightNum}`, name});
    }
};

lufthansa.book(239, 'Vikash flight');
lufthansa.book(502, 'Johan smith');
console.log(lufthansa);

const errowings = {
    airline: 'Errowings',
    iatacode: 'EW',
    booking: []
}

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah williams'); // it will not have 'this', showing not defind

// How the this keyword look like, to tell that we have the three method call, apply and bind()

// Call method have first argument as kis object ke 'this' ko point karna hai, other rest parameter which is needed
book.call(errowings, 23, 'Sarah williams');
console.log(errowings);

book.call(lufthansa, 245, 'Mary cooper');
console.log(lufthansa);

// Apply method works same as call() but we have to pass rest argument as a array
const flightData = [583, 'Goerge cooper'];
book.apply(errowings, flightData);
// console.log(errowings);

// Modern way
book.call(errowings, ...flightData);
console.log(errowings);

// Bind method - works same as call() but it will return same function with 'this' keyword
// book.bind(errowings); // it will not call the function, instead return a function with 'this' keyword
// const bookEW = book.bind(errowings);
// bookEW(988, 'Steven willians');
// console.log(errowings);

const bookEW23 = book.bind(errowings, 23); // here 23 is the preset, now only need to set second parameter
bookEW23('Marthan williams');
bookEW23('Cooper williams');
console.log(errowings);

// Imediately invoked function expression - it will call once, we can't reuse it
(function () {
    console.log("This will never run again.");
})();

// In arrow function
(() => {
    console.log("This will ALSO never run again.");
})();

// Closures
const secureBooking = function () {
    let passangerCount = 0;
    return function () {
        passangerCount++;
        let nameingConvention = passangerCount > 1 ? 'Passangers' : 'Passanger';
        console.log(`${passangerCount} ${nameingConvention}`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// Another example of Closure - Example 1
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a*2);
    }
}

g();
f();

// Timers in javascript: we have two kind of timer: setTimeout and setInterval

// LifeCycle DOM event
document.addEventListener('DOMContentLoaded', function(e) {
    console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function(e) {
    console.log('Page fully loaded', e);
});

// section: 15 running
document.getElementById('go').contentdo
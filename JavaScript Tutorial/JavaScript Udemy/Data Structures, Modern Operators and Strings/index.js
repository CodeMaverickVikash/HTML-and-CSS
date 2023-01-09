// Destructuring arrays
let arr = [1, 2, 3];
let [x, y, z] = arr;
// console.log(x + " " + y + " "+z);

// Destructuring objects
let obj = {
    fname: "vikash",
    lname: "maskhare",
    phone: 293832738,
    email: "viaksj@gmail.com"
}

let {fname, email} = obj; // you need to mentioned same name as mentioned in obj
// console.log(fname + " " + email);

let {fname: first_name, lname: last_name} = obj; // with new variable
console.log(first_name, last_name);

// Spread operator '...arr/obj'
let arr1 = [9, 8, 7];
let arr2 = [1, 2, ...arr1];
// console.log(arr2);

// Rest pattern and parameter
// SPREAD, because on right side of = 
const arr3 = [1, 2, ...[3, 4, 5]];
// REST, because on left side of = 
const [a, , ...others] = [1, 2, 3, 4, 5];
// console.log(a, others);

// Functions
let add = (...numbers)=> { // packing in
    // console.log(numbers);
}

add(1, 2);
// add(3, 4, 5);
// add(6, 7, 8, 9);

const item = [23, 45, 67];
add(...item); // packing out

// Nullish coalescing operator '??'
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
let g = 45;
const val = g ?? 10;
console.log(val);

// Looping arrays: for-of
const menu = ["pizza", "burger", "chaumin"];
// for(const item of menu) console.log(item);
for(const [i, itm] of menu.entries()) {
    // console.log(`${i+1} : ${itm}`);
}
 
// Optional chaining '?.' - is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
// let user = {}; // user has no address
// console.log(user.address.street); // Error!

// let user = {}; // user has no address
// console.log(user?.address?.street); // undefined (no error)

// enhanced object literal
const hours = {
    thursday: {
        open: '11am',
        close: '10pm'
    },
    frieday: {
        open: '9am',
        close: '10pm'
    },
    sturday: {
        restaurant: 'close'
    }
};

const restaurant = {
    menu: ["pizza", "burger", "chaumin"],
    hours  // only hours is enhanced object literal
}

console.log(restaurant);
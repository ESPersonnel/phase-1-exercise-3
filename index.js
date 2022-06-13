// const loopThroughArray = (array) => {
//     for (let i of array) {
//         console.log(i);
//     }
// }
// // Capitalize the array
// const capitalizeArray = (array) => {
//     let newArray = [];
//     for (let i of array) {
//         newArray.push(i.charAt(0).toUpperCase() + i.slice(1));
//     }
//     return newArray;
// }

// function handleArray(fun){
//     let books = [
//         'The Hobbit',
//         'The Lord of the Rings',
//         'The Fellowship of the Ring',
//         'The Two Towers',
//         'The Return of the King',
//         'The Silmarillion',
//         'The Hobbit: An Unexpected Journey',
//     ]
    
//     fun(books);
// }

// handleArray(loopThroughArray);
// handleArray(capitalizeArray);
// console.log(handleArray(capitalizeArray));


// Functions as variables
// Language: javascript

let books = [
    {
        title: 'The Hobbit',
        price: 5,
        inventory: 5,
    },
    {
        title: 'The Lord of the Rings',
        price: 10,
        inventory: 10,
    },
    {
        title: 'The Fellowship of the Ring',
        price: 15,
        inventory: 15,
    },
    {
        title: 'The Two Towers',
        price: 20,
        inventory: 20,
    },
    {
        title: 'The Return of the King',
        price: 25,
        inventory: 25,
    }
]

// function printReport(foo){
//     console.log(foo(books));
// }

// function totalInventory(books){
//     let total = 0;
//     for (let i of books) {
//         total += i.inventory;
//     }
//     return total;
// }

// function replenish(array){
//     let replenishList = []
//     for(item of array){
//         if(item.inventory < 10){
//             replenishList.push(item.title);
//         }
//     }
//     return replenishList.join(', ');
// }

// printReport(totalInventory);
// console.log(printReport(totalInventory));
// console.log(printReport(replenish));


// Return an array of titles

// Loop through the array
// For every item in the array, update/change/transform the item without mutating the original array
//Make a new array to hold updated/changed/transformed items

// function loopAndUpdate(array, updaterFoo){
//     const updatedArray = [];
//     for (let item of array){
//         updatedArray.push(updaterFoo(item));
//     }
//     return updatedArray;
// }

// // Return an array of titles
// // function titles(item){
// //     return item.title
// // }
// const title = books.map(item => item.title);

// // Return an array of prices
// // function prices(item){
// //     return item.price
// // }
// function pricesFoo(item){
//     return item.price
// }
// const prices = books.map(pricesFoo)

// // Return an array of inventories
// function inventories(item){
//     return item.inventory
// }
// // Return an array of books, 50% off
// function halfOff(item){
//     return {
//         title: item.title,
//         price: item.price / 2,
//         inventory: item.inventory
//     }
// }
// // Return an array of books, 10% off
// function tenOff(item){
//     return {
//         title: item.title,
//         price: item.price * 0.9,
//         inventory: item.inventory
//     }
// }




// console.log(loopAndUpdate(books, titles));
// console.log(loopAndUpdate(books, prices));
// console.log(loopAndUpdate(books, inventories));
// console.log(loopAndUpdate(books, halfOff));
// console.log(loopAndUpdate(books, tenOff));
// console.log(books);

// Find Function
// Will loop through the array
// Find the first object whose condition returns true based on a callback function
// function loopThroughAndFind(inventory, finder){
//     let result = null;
//     for (let item of inventory){
//         if(finder(item) === true){
//             result = item;
//             break;
//         }
//     }
//     return result;
// }
// let foundItem = books.find(book => book.title === 'The Hobbit');
// console.log(foundItem);

// // Will find a given book
// function isBook(book){
//     return book.title === 'The Hobbit';
// }
// // console.log(loopThroughAndFind(books, isBook));

// // Will find the first book that needs to be restocked
// function needsRestock(book){
//     return book.inventory < 3;
// }
// // console.log(loopThroughAndFind(books, needsRestock));

// Reduce Function
// const reducer = (accumulator, item) => {
//     console.log(accumulator, item);
//     return accumulator + ", " + item.title;
// }
// let total = books.reduce(reducer, "").substring(2);
// console.log(reducer(0, books[0]));
// console.log(total);

// For each function
// function loopThrough(inventory, foo){
//     for (let item of inventory){
//         foo(item);
//     }
// }
// function logTitle(item){
//     console.log(item.title.toUpperCase());
// }

// console.log(loopThrough(books, book => console.log(book.title)));
// console.log(loopThrough(books, logTitle));

books.forEach(book => console.log(book.title));

console.log(books.map(book => book.title));


// Filter function
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num % 2 === 0));

// declaring a function
function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(1, 2));
let total1 = addNumbers(1, 2);
let total2 = addNumbers(3, 4);
console.log(total1, total2);

let age = 30;

function myAge(){
    console.log("Age: " + age);;
}

function infor(){
    let name = "John";
    console.log("My name is " + name + "" + "and I am " + age + " years old.");
}

myAge();
infor();

// Scope Chain

function profile(){
    function personalInfo(){
        function writePersonalInfo(){
            return fullName = "John Doe";
        }
        return writePersonalInfo();
    }
    return personalInfo();
}

let myProfile = profile();
console.log(myProfile);

// lexical = definition of things from known scope.
// dynamic = definition of things from unknown scope.
// lexical = Defining an area of a given expression.

// define a variable in the global scope
// let value = 10;

// // called the value variable from a function
// functionoutputValue(){
//     let value = 20;
//     return value;
// }

// console.log(outputValue());

// create a function that takes in a word(string) and returns the word in reverse
let word = "Hello";

function reverseWord(word){
    return word.split('').reverse().join(''); // split the word into an array, reverse the array, and join the array back into a string
}
console.log(reverseWord(word));



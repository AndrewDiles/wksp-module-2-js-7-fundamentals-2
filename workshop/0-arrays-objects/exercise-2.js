// Exercise 2
// -------------------
const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

// You have two arrays above of people who arrived late to your party and
// people who arrived early.
// Create a new array that holds all of the party attendees and

// Write a program that will do the following:
// Output them in a tidy list from first to last arrival the console.

// NO for loops!   <--- again?  lol  I will use foreach before looking at solutions this time

let partyPeepsInTheHouse = earlyBirds.concat(lateComers);
partyPeepsInTheHouse.forEach((element, i) => {
    console.log(`#${i+1} ${element}`);
});

// I'm assuming each grouping came in the order they are in the array from left to right.
// Because we don't acually know what order ex: Ellen Jerry and Jasmine arrived in.
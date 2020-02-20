// Exercise 3 (hard)
// -------------------
const colors = ["red", "orange", "yellow", "green", "pink", "black", "gray", "blue", "violet"];

// The array above contains all the colors in the visible light spectrum but has some
// that don't belong. In case you've forgotten, the colors in the spectrum are:
// red, orange, yellow, green, blue, violet

// Write a script that removes the incorrect colors and output the corrected array to the console.

// You must console the colors array.
// NO for loops!

colors.forEach((element, i) => {
    if (element != 'red' && element != 'organge' && element != 'yellow' && element != 'green' && element != 'blue' && element != 'violet') {
        colors.splice(i, 1);
    }
});
console.log(colors);

// this took less than 5 minutes.
// checking the solution because I'm wondering if I circumvented the point by not using the filter method

// Seeing the solution... I guess I was supposed to the includes method...  I dunno, my way seems... easier to understand
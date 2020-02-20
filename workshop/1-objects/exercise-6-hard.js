// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc' : 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles'
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...



let foods = Object.values(favoriteDessert).sort();
let foodResults = {};

foods.forEach((food, id) => {
    let x = 0;
    foods.forEach((foodname, i) => {
        if (food === foodname) { x++;}
    });
    foodResults[food] = x;
});

console.log(foodResults);

let numericResults = Object.values(foodResults).sort();
let numericResultsProper = [];
for (i=0; i<numericResults.length; i++) {
    numericResultsProper.unshift(numericResults[i]);
}

let uniqueFoodNames = Object.keys(foodResults);
console.log('the desserts ranked from most popular to least popular.');
let j = 1;
for (i=1; i<=uniqueFoodNames.length; i++){
    uniqueFoodNames.forEach((foodname) => {
        if (foodResults[foodname]===numericResultsProper[0]) {
            console.log(`${j}. ${foodname}`);
            j++;
            numericResultsProper.shift();
            foodResults[foodname] *= -1;
            return;
        }
    });
};

// That worked... thank the FSM.  I feel like I half solved it four times.

// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...
namesOfAllPeople = Object.keys(favoriteDessert);
uniqueFoodNames.forEach((food) => {
    let arrayOfNames = [];
    namesOfAllPeople.forEach((name) => {
        if (favoriteDessert[name]===food) {
            arrayOfNames.push(name)
        }

    });
    console.log(`${food}: ${arrayOfNames}`);

});

// Below are failed attempts

// let resultsMultiplicity = Object.values(foodResults).sort().reverse();
// let trimmedMultiplicity = [];
// let temp;

// for (i=0; i<resultsMultiplicity.length; i++) {
//     if (resultsMultiplicity[i] === resultsMultiplicity[i+1] && i < resultsMultiplicity.length -2) {}
//     else if (i === resultsMultiplicity.length -1 && resultsMultiplicity[i] === resultsMultiplicity [i-1]) {}
//     else trimmedMultiplicity.push(resultsMultiplicity[i]);
// }
// let dessertKeys = Object.keys(favoriteDessert);

// let theAnswer={};
// for (i=0; i<foods.length; i++){
//     let temparr = [];
//     let tempdes = '';
//     let count = 0;
//     for (j=i; j<foods.length; j++){
//         if (!temparr.includes(foods[j])) {temparr.push(foods[i]); tempdes = foods[i];}
//     }
//     for (k=0; k<foods.length; k++){
//         if (foods[k] === foods[i]) {count++;}
//     }
//     theAnswer[count] = tempdes;
// }

// for (i=0; i<trimmedMultiplicity.length-1; i++){
//     console.log(`With ${trimmedMultiplicity[i]} votes, #${i+1} is ${theAnswer[trimmedMultiplicity][i]}.`);
// }
//     console.log(`The remaining desserts are tied at number ${trimmedMultilicity.length}`)

// console.log(dessertKeys);
// console.log(trimmedMultiplicity);
// console.log(resultsMultiplicity);
// console.log(foods);
// console.log(foodResults);
// console.log(theAnswer);

// let theAnswer={};
// for (i=0; i<foods.length; i++){
//     let temparr = [];
//     let tempdes = '';
//     let count = 0;
//     let change = false;
//     for (j=i; j<foods.length; j++){
//         if (!temparr.includes(foods[j])) {temparr.push(foods[i]); tempdes = foods[i]; change = true;}
//     }
//     for (k=0; k<foods.length; k++){
//         if (foods[k] === foods[i]) {count++;}
//     }
//     if (change === true && theAnswer[count] === undefined) {theAnswer[count] = tempdes;}
//     else if (change === true) {theAnswer[count] += `, ${tempdes}`;}
// }

// for(i=0; i<Object.keys(favoriteDessert).length; i++) {
//     temp = dessertKeys[i];
//     console.log(`${favoriteDessert[temp]}`)
    // if (favoriteDessert[dessertKeys[i]] === trimmedMultiplicity[0]) {console.log(`1. dessert(s): ${favoriteDessert[dessertKeys[i]]}`)}
// }
// foodResults.forEach(element => {
//     if (element.value === trimmedMultiplicity[0]) {console.log(`1. ranked food(s) : ${element}`)};
// trying to test values of results object...
// console.log(trimmedMultiplicity);

// his solution from class:
// somewhere it is broken
// const dessertsArr = Object.values(favoriteDessert).sort();
// const countedDesserts = {};
// const rankedDesserts = [];

// dessertsArr.forEach(dessert => {
//     let count = 0;
//     dessertsArr.forEach(dup=> {
//         if (dessert === dup) count +=1;
//     });
//     countedDesserts[dessert]=count;
// });
// Object.values(countedDesserts).forEach((dessertCount, id)=> {
//     const dessertName = Object.keys(countedDesserts)[id];
//     rankedDesserts.push({
//         dessertName: dessertName,
//         dessertCount: dessertCount
//     });
// });
// rankedDesserts.sort((a,b)=>a.dessertCount < b.dessertCount ? 1 : -1);


// rankedDesserts.forEach((items, id)=> {
//     console.log(` ${id + 1}. ${item.dessertName}`);
// });

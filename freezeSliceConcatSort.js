//! Object.freeze makes object or array immutable
const groceryList = Object.freeze([
    { "food": "carrots",           "haveIngredient": false },
    { "food": "onions",            "haveIngredient": true  },
    { "food": "celery",            "haveIngredient": false },
    { "food": "cremini mushrooms", "haveIngredient": false },
    { "food": "butter",            "haveIngredient": true  }
  ]);

const thyme = {"food":"thyme", "haveIngredient":false};

// groceryList.push(thyme) will NOT work because freeze made groceryList immutable
//! can use spreader (...) to make copy & then pop/push/etc
const spreadList = [...groceryList, thyme];
// console.log(`\nspreadList:`);
// console.log(spreadList);
//! or .concat:
const concatList = groceryList.concat(thyme);
// console.log(`\nconcatList:`);
// console.log(concatList);

//! Slice takes 1-2 parameters & returns array of elements w/ indexes btwn parameters. We can follow that up with a comma and a new object. Inside the new object we can use the spread operator to copy over the attributes from the Ingredient at index 5, and overwrite its haveIngredient key to be true.
const gotTheThyme = [ ...concatList.slice(0, 5), { ...concatList[5], "haveIngredient": true } ];
// console.log(`\ngotTheThyme:`);
// console.log(gotTheThyme);

// can also use slice to remove item:
const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
// console.log(`\nnotNeceCelery:`);
// console.log(notNeceCelery);

//! sorting also does not work on frozen object
const food = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
//food.sort(); //* this will throw an error 
//need to spread & then sort:
const sortedFood = [...food].sort();
// console.log(`\nsortedFood:`);
// console.log(sortedFood);

//! sorting by a key in an object:
// if we want to sort by food, spread frozen groceryList, then call sort & pass in callback:
const sortedGroceries = [...groceryList].sort( (a, b) => a.food > b.food );
// console.log(`\nsortedGroceries:\n`);
// console.log(sortedGroceries);

//! .map() used to replace for and while loops!
// takes 2 args: an array and a callback function
// map passes each element in array to callback function, returning new, manipulated array
const groceries = ["pearl onions", "cremini mushrooms", "thyme", "carrots", "spinach", "barley"];
//  ****THIS ENTIRE BLOCK****
/*
const groceryList2 = [];
for (let i=0; i<groceries.length; i++){
    groceryList2.push(`<li>${groceries[i]}</li>`);
    console.log(`adding '<li>${groceries[i]}</li>' to groceryList2`);
    console.log(groceryList2);
} 
*/
// **** replaced by: ****
const groceryList2 = groceries.map(food => `<li>${food}</li>`);
// another example:
const nums = [1,2,3,4,5];
const cubes = nums.map(num => num**3);

console.log(`\ngroceryList2:`);
console.log(groceryList2);
console.log(`cubes: ${cubes}`);

//! use .filter() to iterate through an array and return only elements that meet specified condition:
const values = [1,2,3,4,5,6,7,8,9,10,11];
const evens = values.filter(num => num % 2 == 0);
const odds = values.filter(num => num % 2 != 0);
console.log(`evens: ${evens}`);
console.log(`odds: ${odds}`);

// works with strings too:
const groceryList3 = groceries.filter(food => food.includes("o"));
console.log(`groceryList3: ${groceryList3}`);

//! can chain methods together too:
// filter will return array of odd nums, pass to map which returns array of cubed nums
const oddCubes = values.filter(num => num % 2 != 0).map(num => num**3);
console.log(`oddCubes: ${oddCubes}`);
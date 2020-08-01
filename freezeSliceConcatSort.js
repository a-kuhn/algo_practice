// Object.freeze makes object or array immutable
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);

const thyme = {"item":"thyme", "haveIngredient":false};

// groceryList.push(thyme) will NOT work because freeze made groceryList immutable
// can use spreader (...) to make copy & then pop/push/etc
const spreadList = [...groceryList, thyme];
console.log(spreadList);
// or .concat:
const concatList = groceryList.concat(thyme);
console.log(concatList);


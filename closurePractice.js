//! closure: a function that is returned from another function
// inner function in a closure is the one that is returned and accessed outside of the function definition

function outer() {
    let count = 0; // this is a count variable that is scoped to the function
    // there is an inner function that increments count and then console logs it
    function inner() {
      count++;
      console.log(count);
    }
    // returning the inner function
    return inner;
  }
      
const counter = outer();   // counter is the function that we returned from calling the outer function
counter();                 // this will console.log "1"
counter();                 // this will console.log "2"
counter();                 // this will console.log "3"
counter();                 // this will console.log "4"
    
// so that means that the count variable still exists! 
// and it is being changed even though we aren't inside of the Outer function!
// can we access count out here?
console.log(count); // doesn't work!

//! attempt at refactoring to arrow functions:
const outerFunc = () => {
    let count = 0;
    const inner = () => {
        count++;
        console.log(`count: ${count}`);
    }
    return inner;
}

const counterFun = outerFun();
counterFun();
counterFun();
counterFun();
counterFun();
// simulates flipping coin with 50/50 change of heads/tails
const tossCoin = () => Math.random() > 0.5 ? "heads" : "tails";

// testing how long before flipping 5 'heads' in a row
const fiveHeadsSync = () => {
    let headsCount = 0;
    let totalFlipsCount = 0;

    while (headsCount < 5) {
        let result = tossCoin();
        totalFlipsCount++;

        console.log(`result: ${result}`);

        result === "heads" ? headsCount++ : headsCount=0;

        return `it took ${totalFlipsCount} tosses to get 5 heads in a row!`
    }
}

// refactor fiveHeadsSync() using Promises (so the rest of the code can run async)
const fiveHeadsPromise = new Promise((resolve, reject) => {
    let headsCount = 0;
    let totalFlipsCount = 0;

    if(headsCount < 5 && totalFlipsCount < 101) {
        let result = tossCoin();
        totalFlipsCount++;
        result === "heads" ? headsCount++ : headsCount=0;
    }else {
        reject(`100 flips and still no streak? this just isn't working out :(`)
    }
});


fiveHeadsSync();
fiveHeadsPromise
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log(`this is running after the synchronous fiveHeadsSync() completes`);
console.log(`this is running after fiveHeadsSync(), but not waiting for fiveHeadsPromise() to finish`);
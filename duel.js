/*
working with classes and inheritance to create card game with 2 main card types, Unit and Effect
*/

// create player class to hold/play cards
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    showHand() {
        console.log(`\n${this.name}'s hand contains:`);
        this.hand.forEach((card) => console.log(`${card.name}`));
    }
}


// all cards have a name and cost associated with them
class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

// Unit cards have attack power and resilience attributes in addition to name and cost
// for a unit card to attack, it must declare a target
class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        target.resilience -= this.power;
    }
}

// Effect cards have attributes stat and magnitude
// when an effect is played on a unit, it will alter the unit's stat (power/resilience) by this.magnitude
class Effect extends Card {
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        if (magnitude < 0) {
            this.text = `Decrease target's ${stat} by ${magnitude*-1}`;
        }
        else {
            this.text = `Increase target's ${stat} by ${magnitude}`;
        }
    }
    play(target){
        if (target instanceof Unit){
            target.stat += this.magnitude;
            console.log(this.text);
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const HardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 3, "power", -2);
const PairProgramming = new Effect("Pair Programming", 3, "power", 2);

// Player 1 summons "Red Belt Ninja"
// Player 1 plays "Hard Algorithm" on "Red Belt Ninja"
HardAlgorithm.play(RedBeltNinja);

// Player 2 summons "Black Belt Ninja"
// Player 2 plays "Unhandled Promise Rejection" on "Red Belt Ninja"
UnhandledPromiseRejection.play(RedBeltNinja);

// Player 1 plays "Pair Programming" on "Red Belt Ninja"
PairProgramming.play(RedBeltNinja);

// Player 1 has "Red Belt Ninja" attack "Black Belt Ninja"
RedBeltNinja.attack(BlackBeltNinja);

// const p1 = new Player("player 1");
// const p2 = new Player("player 2");

// p1.hand.push(RedBeltNinja);
// p1.hand.push(RedBeltNinja);
// p1.hand.push(BlackBeltNinja);
// p1.hand.push(HardAlgorithm);
// p1.hand.push(UnhandledPromiseRejection);
// p1.hand.push(UnhandledPromiseRejection);
// p1.showHand();

// p2.hand.push(BlackBeltNinja);
// p2.hand.push(BlackBeltNinja);
// p2.hand.push(UnhandledPromiseRejection);
// p2.hand.push(PairProgramming);
// p2.hand.push(PairProgramming);
// p2.hand.push(HardAlgorithm);
// p2.showHand();


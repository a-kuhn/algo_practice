/*
working with classes and inheritance to create card game with 2 main card types, Unit and Effect
*/

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
            target.this.stat += this.magnitude;
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

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
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

// Effect cards have attributes stat and magnitude
// when an effect is played on a unit, it will alter the unit's stat (power/res) by this.magnitude
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}


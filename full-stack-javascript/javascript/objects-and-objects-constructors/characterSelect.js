// From the following article https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

let x = {};

console.log(Object.getPrototypeOf(x));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(x)));


let y = [];

console.log(Object.getPrototypeOf(y));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(y)));


// Initialize a constructor function for a new Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

let hero1 = new Hero('Bjorn', 1);

console.log(hero1);
console.log(Object.getPrototypeOf(hero1));

// Add greet method to the Hero prototype
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

console.log(hero1.greet());


// Initialize Warrior constructor
function Warrior(name, level, weapon) {
    // Chain constructor with call
    Hero.call(this, name, level);

    // Add a new property
    this.weapon = weapon;
}

// Initialize Healer contructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Warrior.prototype.attack = function() {
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}.`;
}

const hero2 = new Warrior('Bjorn', 1, 'axe');
const hero3 = new Healer('Kanin', 1, 'cure');

console.log(hero2.attack()); // Bjorn attacks with the axe.
console.log(hero2.name); // Bjorn
// console.log(hero2.greet()); // TypeError: hero2.greet is not a function

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(hero2.greet()); // Bjorn says hello.




// Full clean page
// Initialize constructor functions
function Hero(name, level) {
    this.name = name;
    this.level = level;
  }
  
  function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
  
    this.weapon = weapon;
  }
  
  function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
  }
  
  // Link prototypes and add prototype methods
  Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
  Object.setPrototypeOf(Healer.prototype, Hero.prototype);
  
  Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }
  
  Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }
  
  // Initialize individual character instances
  const hero4 = new Warrior('Bjorn', 1, 'axe');
  const hero5 = new Healer('Kanin', 1, 'cure');
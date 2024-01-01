//Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
    }
        companion2: {
            [ Flea { fleaName: 'Frank', owner: 'Leo', belongings: 'hat and sunglasses'}],
        } 
    .roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    };
};

//create a loop that logs each item in Robin’s inventory.
inventory.forEach(inventory => console.log(inventory));

//Part 2: Class Fantasy
class Character {
    constructor (Robin) {
      this.name = Robin;
      this.health = 100;
      this.inventory = ['sword', 'potion', 'artifact'];
      roll(); 
    }
    constructor (Leo) {
      this.name = Leo;
      this.health = 100;
      this.inventory = [];
      roll();
      }
    constructor (Frank) {
      this.name = Frank;
      this.health = 100;
      this.inventory = ['smallHat', 'sunglasses'];
      roll();
      }
  }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

//Part 3: Class features
class Adventurer extends Character {
    constructor (name, role) {
      super(Robin);
      // Adventurers have specialized roles.
      this.role = Exploring;
      this.role = GatheringData;
      this.role = Storytelling;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins", "large net", "bookbag", "sun hat", "protein bars", "compass");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

class Companion extends Character {
    constructor (name, role) {
        super(Leo);
        // Adventurers have specialized roles.
        this.role = Sleeping;
        this.role = Scratch;
        this.role = Hunt;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("cat collar", "cat food", "yarn", "catnip");
      }
      // Adventurers have the ability to scout ahead of them.
      scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
      }
      jump () {
        console.log(`${this.name} is jumping...`);
        super.roll();
      }
      throwing () {
        console.log(`${this.name} is throwing...`);
        super.roll();
      }
      
      constructor (name, role) {
        super(Frank);
        // Adventurers have specialized roles.
        this.role = Flying;
        this.role = Bite;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("sunglasses", "small hat");
      }
      // Adventurers have the ability to scout ahead of them.
      bite () {
        console.log(`${this.name} is biting...`);
        super.roll();
      }
      fly () {
        console.log(`${this.name} is flying...`);
        super.roll();
      }      
      //change the declaration
      
      constructor (name, role) {
        super(Robin);
        // Adventurers have specialized roles.
        this.role = Hiking;
        this.role = Drinking;
        this.role = Hunt;
        this.role = Scout;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins", "large net", "bookbag", "sun hat", "protein bars", "compass");
      }
      // Adventurers have the ability to scout ahead of them.
      scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
      }
      hike () {
        console.log(`${this.name} is hiking...`);
        super.roll();
      }
      drinking () {
        console.log(`${this.name} is drinking...`);
        super.roll();
      }
      hunt () {
        console.log(`${this.name} is hunting...`);
        super.roll();
      }
      //Part 4: Class Uniforms
static staticProperty = Max_Health;
static description () {
    return ('Health is 100%');
}
static staticArray = Roles['Fighter','Healer','Wizard'];
}

//Part 5
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");

//Part 6: Developing Skills
duel(Adventurer){
    roll();
    if (roll > 1) {
        result = "keep rolling";
    } else if (roll) {
        result = "Your Out"
    } 
}
console.log(role);
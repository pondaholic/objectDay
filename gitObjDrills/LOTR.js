function createCharacter(name, nickname, race, origin, attack, defense) {
	return {
		name,
		nickname,
		race, 
		origin,
		attack,
		defense,
		describe : function() {
			return `${this.name} is a ${this.race} from ${this.origin}.`
		},
		evaluateFight : function(enemy) {
			// x = your character's attack - enemy's defense
			// y = enemy's attack - your character's defense
			let x = this.attack - enemy.defense
			let y = enemy.attack - this.defense
			if (x<0) {
				x = 'no damage'
			}
			if (y<0) {
				y = 'no damage'
			}
			return `Your opponent takes ${x} damage and you receive ${y} damage`;
		}
	};
}

const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
//console.log(bilbo);
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
const arwen = createCharacter('Arwen Undomiel', 'arwen', 'Elf', 'Rivendell', 10, 5)

let characters = [gandalf, bilbo, frodo, aragorn, legolas];
characters.push(arwen);
//console.log(characters);


const findAragorn = characters.find(myChar => {
  if (myChar.nickname === 'aragorn') {
    console.log(myChar.describe());
  }
});

let onlyHobbits = characters.filter(myChars => myChars.race === 'Hobbit');

const highAttacks = characters.filter(attackers => attackers.attack > 5);

//console.log(gandalf.evaluateFight(bilbo));
//console.log(findAragorn);
//console.log(onlyHobbits);
//console.log(highAttacks);

/* Equip a weapon: 

function createModifiedCharacter(name, nickname, race, origin, attack, defense, weapon) {
	return {
		name,
		nickname,
		race, 
		origin,
		attack,
    defense,
    weapon,
		describe : function() {
			return `${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}.`
		},
		evaluateFight : function(enemy) {
			// x = your character's attack - enemy's defense
			// y = enemy's attack - your character's defense
			let x = this.attack - enemy.defense
			let y = enemy.attack - this.defense
			if (x<0) {
				x = 'no damage'
			}
			if (y<0) {
				y = 'no damage'
			}
			return `Your opponent takes ${x} damage and you receive ${y} damage`;
		}
	};
}
*/
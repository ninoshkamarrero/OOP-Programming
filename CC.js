class Pokemon {
    constructor(name, type, attack){
        this.name = name,
        this.type = type,
        this.attack = attack
    }
    attackUsed = () => {
        console.log(this.name +" used "+ this.attack)
    }
}

const poke1 = new Pokemon("Pikachu", "bird", "Thunderbolt");
const poke2 = new Pokemon("Character", "birdie", "Fire");

console.log(poke1.attackUsed());
console.log(poke2.attackUsed());
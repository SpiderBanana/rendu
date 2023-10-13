class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        const randomValue = Math.random()
        return randomValue < this.luck
    }

    attackPokemon(target) {
        if (this.isLucky()) {
            const damage = this.attack - target.defense
            if (damage > 0) {
                target.hp -= damage
                console.log(this.name + " attaque " + target.name+ " et lui inflige " + damage + " dégâts. ")
            } else {
                console.log(this.name +" attaque "+target.name+", mais les dégâts sont nuls.")
            }
        } else {
            console.log (this.name + " attaque " +target.name+", mais rate son attaque.")
        }
    }
}

let pikachu = new Pokemon("Pikachu", 30, 10, 100, 0.4)
let pichu = new Pokemon("Pichu", 45, 12, 100, 0.6)

while (pikachu.hp > 0 && pichu.hp > 0) {
    // Pikachu attaque Pichu
    pikachu.attackPokemon(pichu)
    console.log("Vie de "+ pichu.name+" : "+ pichu.hp)

    if (pichu.hp <= 0) {
        console.log(pichu.name+ " est K.O. " +pikachu.name+ " remporte le combat!")
        break
    }

    // Pichu attaque Pikachu
    pichu.attackPokemon(pikachu)
    console.log("Vie de " +pikachu.name+" : "+ pikachu.hp)

    if (pikachu.hp <= 0) {
        console.log(pikachu.name+ "est K.O. " +pichu.name+ " remporte le combat!")
        break;
    }
}
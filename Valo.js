class Player {
    constructor(name, role) {
        this.name = name
        this.role = role
        this.isAlive = true
    }
}

class Team {
    constructor(name, players) {
        this.name = name
        this.players = players
        this.score = 0
    }

    reset() {
        this.players.forEach(player => player.isAlive = true)
    }

    isEliminated() {
        return !this.players.some(player => player.isAlive)
    }
}

function createTeams() {
    const roles = ['Omen', 'Fade', 'Phoenix', 'Chamber', 'Jett']
    const team1 = new Team('Team 1', roles.map(role => new Player(`${role} 1`, role)))
    const team2 = new Team('Team 2', roles.map(role => new Player(`${role} 2`, role)))
    return [team1, team2]
}

function simulateGame() {
    const [team1, team2] = createTeams()
    let spikePlanted = false

    while (team1.score < 13 && team2.score < 13) {
        team1.reset()
        team2.reset()
        spikePlanted = false

        while (!team1.isEliminated() && !team2.isEliminated()) {
            const attacker = Math.random() < 0.5 ? team1 : team2
            const defender = attacker === team1 ? team2 : team1

            if (!spikePlanted && Math.random() < 0.6) {
                spikePlanted = true;
                console.log(`Spike planted by ${attacker.name}`)
            }

            const duelOutcome = Math.random() < (spikePlanted ? 0.7 : 0.5)
            if (duelOutcome) {
                const deadPlayer = defender.players.find(player => player.isAlive)
                if (deadPlayer) {
                    deadPlayer.isAlive = false
                    console.log(`${deadPlayer.name} from ${defender.name} has been killed by ${attacker.name}`)
                }
            } else {
                const deadPlayer = attacker.players.find(player => player.isAlive)
                if (deadPlayer) {
                    deadPlayer.isAlive = false
                    console.log(`${deadPlayer.name} from ${attacker.name} has been killed by ${defender.name}`)
                }
            }
        }

        const winningTeam = team1.isEliminated() ? team2 : team1
        winningTeam.score++
        console.log(`${winningTeam.name} wins the round. Score is now ${team1.score}-${team2.score}`)
    }

    console.log(`${team1.score >= 13 ? team1.name : team2.name} wins the game!`)
}

simulateGame()
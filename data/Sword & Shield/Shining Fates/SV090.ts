import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charibari"
	},

	illustrator: "sowsow",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	attacks: [{
		name: {
			fr: "Force"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3
}

export default card
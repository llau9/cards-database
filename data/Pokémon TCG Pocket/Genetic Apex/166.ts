import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♀"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Call for Family"
		},

		effect: {
			en: "Put 1 random Nidoran♂ from your deck onto your Bench."
		}
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card

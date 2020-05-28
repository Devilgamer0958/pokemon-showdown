export const BattleItems: {[k: string]: ModdedItemData} = {

	abomasite: {
		inherit: true,
		isNonstandard: null,
	},
	absolite: {
		inherit: true,
		isNonstandard: null,
	},
	blueorb: {
		inherit: true,
		isNonstandard: null,
	},
	redorb: {
		inherit: true,
		isNonstandard: null,
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	aggronite: {
		inherit: true,
		isNonstandard: null,
	},
	alakazite: {
		inherit: true,
		isNonstandard: null,
	},
	altarianite: {
		inherit: true,
		isNonstandard: null,
	},
	ampharosite: {
		inherit: true,
		isNonstandard: null,
	},
	audinite: {
		inherit: true,
		isNonstandard: null,
	},
	banettite: {
		inherit: true,
		isNonstandard: null,
	},
	beedrillite: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: null,
	},
	blazikenite: {
		inherit: true,
		isNonstandard: null,
	},
	cameruptite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditex: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditey: {
		inherit: true,
		isNonstandard: null,
	},
	diancite: {
		inherit: true,
		isNonstandard: null,
	},
	galladite: {
		inherit: true,
		isNonstandard: null,
	},
	garchompite: {
		inherit: true,
		isNonstandard: null,
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: null,
	},
	gengarite: {
		inherit: true,
		isNonstandard: null,
	},
	glalitite: {
		inherit: true,
		isNonstandard: null,
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: null,
	},
	heracronite: {
		inherit: true,
		isNonstandard: null,
	},
	houndoominite: {
		inherit: true,
		isNonstandard: null,
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: null,
	},
	latiasite: {
		inherit: true,
		isNonstandard: null,
	},
	latiosite: {
		inherit: true,
		isNonstandard: null,
	},
	lopunnite: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionite: {
		inherit: true,
		isNonstandard: null,
	},
	manectite: {
		inherit: true,
		isNonstandard: null,
	},
	mawilite: {
		inherit: true,
		isNonstandard: null,
	},
	medichamite: {
		inherit: true,
		isNonstandard: null,
	},
	metagrossite: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: null,
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: null,
	},
	pinsirite: {
		inherit: true,
		isNonstandard: null,
	},
	sablenite: {
		inherit: true,
		isNonstandard: null,
	},
	salamencite: {
		inherit: true,
		isNonstandard: null,
	},
	sceptilite: {
		inherit: true,
		isNonstandard: null,
	},
	scizorite: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: null,
	},
	slowbronite: {
		inherit: true,
		isNonstandard: null,
	},
	steelixite: {
		inherit: true,
		isNonstandard: null,
	},
	swampertite: {
		inherit: true,
		isNonstandard: null,
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: null,
	},
	venusaurite: {
		inherit: true,
		isNonstandard: null,
	},
	'use strict';

	/**@type {{[k: string]: ModdedItemData}} */
	let BattleItems = {
		blueorb: {
			inherit: true,
			onSwitchIn: function (pokemon) {
				if (pokemon.isActive && !pokemon.template.isPrimal) {
					this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
				}
			},
			onPrimal: function (pokemon) {
				/**@type {Template} */
				// @ts-ignore
				let template = this.getMixedTemplate(pokemon.originalSpecies, 'Kyogre-Primal');
				if (pokemon.originalSpecies === 'Kyogre') {
					pokemon.formeChange(template, this.effect, true);
				} else {
					pokemon.formeChange(template, this.effect, true);
					pokemon.baseTemplate = template;
					this.add('-start', pokemon, 'Blue Orb', '[silent]');
				}
			},
			onTakeItem: function (item) {
				return false;
			},
		},
		redorb: {
			inherit: true,
			onSwitchIn: function (pokemon) {
				if (pokemon.isActive && !pokemon.template.isPrimal) {
					this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
				}
			},
			onPrimal: function (pokemon) {
				/**@type {Template} */
				// @ts-ignore
				let template = this.getMixedTemplate(pokemon.originalSpecies, 'Groudon-Primal');
				if (pokemon.originalSpecies === 'Groudon') {
					pokemon.formeChange(template, this.effect, true);
				} else {
					pokemon.formeChange(template, this.effect, true);
					pokemon.baseTemplate = template;
					this.add('-start', pokemon, 'Red Orb', '[silent]');
					// @ts-ignore
					let oTemplate = this.getTemplate(pokemon.illusion || pokemon.originalSpecies);
					this.add('-start', pokemon, 'Red Orb', '[silent]');
					if (pokemon.illusion) {
						pokemon.ability = '';
						let types = oTemplate.types;
						if (types.length > 1 || types[types.length - 1] !== 'Fire') {
							this.add('-start', pokemon, 'typechange', (types[0] !== 'Fire' ? types[0] + '/' : '') + 'Fire', '[silent]');
						}
					} else if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
						this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
					}
				}
			},
			onTakeItem: function (item) {
				return false;
			},
		},
	};

	exports.BattleItems = BattleItems;
};

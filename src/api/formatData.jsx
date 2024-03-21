export const formatPokemonData = (pokemon) => {
    const { id, name, sprites, weight, height,types} = pokemon;
    const typePokemon = types.map(({type})=>type)
    const weightInKg = (weight / 10 ) + 'kg';
    const heightInMeter = (height / 10 ) + 'm';
    const paddedId = String(id).padStart(3, '0');
    const pokemonImg = sprites.other.dream_world.front_default || sprites.other['official-artwork'].front_default;
    return {
        ...pokemon,
        paddedId,
        weight: weightInKg,
        imgSrc: pokemonImg,
        height: heightInMeter,
        name: removeHyphens(name),
        types: typePokemon
       
        // name: removeHyphens(name),
    };
}

const removeHyphens =(name) =>{
    return name.replace(/-/g,'');
}

export const getTypeIcon =(type)=>{
    return `/Images/type/${type}.svg`
}

//convert evolution chain
export function normalizeEvolutionChain(evolutionChain) {
    const { species, evolves_to } = evolutionChain;
    
    if(! evolves_to.length) {
        return [];
    }
    
    const evolutions = evolves_to.reduce((chain, evolution) => {
        return [
            ...chain,
            {
                current: {
                    name: species.name,
                    image: pokemonImage(species.url),
                },
                next: {
                    name: evolution.species.name,
                    image: pokemonImage(evolution.species.url),
                },
            },
            ...normalizeEvolutionChain(evolution)
        ];
    }, []);

    return evolutions;
}

//get image for evolutions chain
const pokemonImage = (url) =>{
    const id = url.match(/\/(\d+)\//)[1];
    const isPokemonHasSvg = id < 650; 

    const base = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other`;
    
    if(isPokemonHasSvg) {
        return `${ base }/dream-world/${ id }.svg`;
    }
    
    return `${ base }/official-artwork/${ id }.png`;
};

//format stats 
export function formatStats(stats) {
    const statsMaxValues = {
        hp: 255,
        attack: 190,
        defense: 250,
        "special-attack": 194,
        "special-defense": 250,
        speed: 200,
    }

    const statsObject = stats.map(({ stat, base_stat }) => {
        return {
            name: removeHyphens(stat.name),
            value: base_stat,
            max: statsMaxValues[stat.name]
        }
    });

    const total = stats.reduce((total, { base_stat }) => total + base_stat, 0);
    
    return [
        ...statsObject,
        { name: 'total', value: total }
    ];
}

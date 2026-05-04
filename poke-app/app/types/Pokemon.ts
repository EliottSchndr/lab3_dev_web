export interface PokemonType {
    type: {
        name: string;
    };
}

export interface PokemonSprites {
    other: {
        'official-artwork': {
            front_default: string;
        };
    };
}

export interface Pokemon {
    id: number;
    name: string;
    types: PokemonType[];
    sprites: PokemonSprites;
}

export const TYPE_COLORS: Record<string, string> = {
    fire:     '#FDDFDF',
    grass:    '#DEFDE0',
    water:    '#DEF3FD',
    electric: '#FCF7DE',
    psychic:  '#EAEDA1',
    normal:   '#F5F5F5',
    poison:   '#F7DEFD',
    bug:      '#F8D5A3',
    rock:     '#D5D5D4',
    ghost:    '#705898',
    dragon:   '#97B3E6',
    ice:      '#96D9D6',
    fighting: '#C22E28',
    ground:   '#E2BF65',
    flying:   '#A98FF3',
    fairy:    '#EE99AC',
    steel:    '#B7B7CE',
    dark:     '#705746',
};
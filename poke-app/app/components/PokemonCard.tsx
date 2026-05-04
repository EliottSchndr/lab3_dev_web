import type { Pokemon } from '../types/Pokemon';
import { TYPE_COLORS } from '../types/Pokemon';

interface Props {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
    const name  = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const type  = pokemon.types[0].type.name;
    const sprite = pokemon.sprites.other['official-artwork'].front_default;
    const bg    = TYPE_COLORS[type] || '#F5F5F5';

    return (
        <div className="pokemon-card" data-type={type} style={{ backgroundColor: bg }}>
            <div className="img-container">
                <img src={sprite} alt={name} />
            </div>
            <div className="info">
                <span className="number">#{pokemon.id.toString().padStart(3, '0')}</span>
                <h3 className="name">{name}</h3>
                <small className="type">Type: <span>{type}</span></small>
            </div>
        </div>
    );
};

export default PokemonCard;
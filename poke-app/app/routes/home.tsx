import { useState, useEffect } from 'react';
import type { Pokemon } from '../types/Pokemon';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [pokemons, setPokemons]   = useState<Pokemon[]>([]);
  const [loading, setLoading]     = useState<boolean>(true);
  const [search, setSearch]       = useState<string>('');

  useEffect(() => {
    const fetchAll = async () => {
      const promises = Array.from({ length: 151 }, (_, i) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then(res => res.json())
      );

      const results: Pokemon[] = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    };

    fetchAll();
  }, []);

  const filtered = pokemons.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <div className="container">
        <h1>Pokédex</h1>

        <SearchBar value={search} onChange={setSearch} />

        {loading ? (
            <div className="spinner">Chargement des Pokémon...</div>
        ) : (
            <div className="grid-container">
              {filtered.map(pokemon => (
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
        )}
      </div>
  );
}
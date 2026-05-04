interface Props {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
    return (
        <div className="search-container">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Rechercher un Pokémon..."
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {PokemonList} from './components/PokemonList';
import {PokemonDetails} from './components/PokemonDetails';

const AppContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
`;

const Header = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 30px;
    font-size: 48px;
`;

const Dashboard = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

function App() {
    // This will be used to prevent useEffect logic from happening more than once
    const hasFetched = useRef(false);

    // Since the response has a count property, we can update TOTAL_NUMBER_OF_POKEMONS after the fetch,
    const TOTAL_NUMBER_OF_POKEMONS = 1328;

    // This should be part of configuration.
    const AMOUNT_TO_DISPLAY = 10;


    const [pokemonList, setPokemonList] = useState<any[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [detailsError, setDetailsError] = useState<string | null>(null);

    const fetchPokemonList = async () => {
        setLoading(true);
        setError(null);

        try {
            const offset = Math.floor(Math.random() * (TOTAL_NUMBER_OF_POKEMONS - AMOUNT_TO_DISPLAY));
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${AMOUNT_TO_DISPLAY}&offset=${offset}`);
            const data = await response.json();
            const randomPokemon = data.results;

            const pokemonWithImages = [];
            for (const pokemon of randomPokemon) {
                const detailResponse = await fetch(pokemon.url);
                const details = await detailResponse.json();
                pokemonWithImages.push({
                    name: pokemon.name,
                    url: pokemon.url,
                    image: details.sprites.front_default
                });
            }

            setPokemonList(pokemonWithImages);
        } catch (err) {
            setError('Failed to load Pokemon');
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchPokemonDetails = async (url: string) => {
        setDetailsLoading(true);
        setDetailsError(null);

        try {
            const response = await fetch(url);
            const data = await response.json();

            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();

            setSelectedPokemon({
                ...data,
                description: speciesData.flavor_text_entries[0]?.flavor_text || 'No description'
            });
        } catch (err) {
            setDetailsError('Failed to load Pokemon details');
            console.log(err);
        } finally {
            setDetailsLoading(false);
        }
    };

    useEffect(() => {
        if (hasFetched.current) return; // prevent second run
        hasFetched.current = true;
        fetchPokemonList();
    }, []);

    const handleSelectPokemon = (url: string) => {
        fetchPokemonDetails(url);
    };

    const handleRefresh = () => {
        fetchPokemonList();
    };

    return (
        <AppContainer>
            <Header>🎮 Pokémon Dashboard</Header>
            <Dashboard>
                <PokemonList
                    pokemon={pokemonList}
                    loading={loading}
                    error={error}
                    onSelect={handleSelectPokemon}
                    onRefresh={handleRefresh}
                    selectedPokemon={selectedPokemon}
                />
                <PokemonDetails
                    pokemon={selectedPokemon}
                    loading={detailsLoading}
                    error={detailsError}
                    onRetry={() => selectedPokemon && fetchPokemonDetails(selectedPokemon.species.url)}
                />
            </Dashboard>
        </AppContainer>
    );
}

export default App;

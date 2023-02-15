import { React, useState, useEffect } from "react";
import axios from "axios"
import { useParams} from "react-router";
import { NavLink } from "react-router-dom";

const PokemonInfo = () => {

    const [pokemon, setPokemon] = useState({})
    const {id} = useParams()

    function capName(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
            const pokemon = {}
            pokemon['name'] = capName(res.data.name)
            pokemon['id'] = res.data.id
            pokemon['image'] = res.data.sprites.other['official-artwork']['front_default']
            pokemon['types'] = res.data.types
                                .map((type) => capName(type.type.name))
                                .join(', ')
            pokemon['abilities'] = res.data.abilities 
                                    .map((ability) => capName(ability.ability.name))
                                    .join(', ')
            setPokemon(pokemon)
        })
    }, []);

    return(
        <div className="poke-info">
            <NavLink to={'/'}>Not what you're looking for?</NavLink>
            <h1>{pokemon.name}</h1>
            <img className="poke-sprite" src={pokemon.image} alt="pokemon sprite" />
            <h3>{pokemon.types}</h3>
            <h3>Abilities: {pokemon.abilities}</h3>
        </div>
    )
}

export default PokemonInfo
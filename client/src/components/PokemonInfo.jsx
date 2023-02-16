import { React, useState, useEffect } from "react";
import axios from "axios"
import { useParams} from "react-router";
import { NavLink } from "react-router-dom";
import normal from '../assets/images/normalType.png'
import fairy from '../assets/images/fairyType.png'
import steel from '../assets/images/steelType.png'
import grass from '../assets/images/grassType.png'
import psychic from '../assets/images/psychicType.png'
import ice from '../assets/images/iceType.png'
import water from '../assets/images/waterType.png'
import fire from '../assets/images/fireType.png'
import dragon from '../assets/images/dragonType.png'
import ground from '../assets/images/groundType.png'
import electric from '../assets/images/electricType.png'
import fight from '../assets/images/fightType.png'
import ghost from '../assets/images/ghostType.png'
import poison from '../assets/images/poisonType.png'
import dark from '../assets/images/darkType.png'
import bug from '../assets/images/bugType.png'
import flying from '../assets/images/flyingType.png'
import rock from '../assets/images/rockType.png'

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
            pokemon['front'] = res.data.sprites['front_default']
            pokemon['back'] = res.data.sprites['back_default']

            pokemon['type1'] = res.data.types[0].type.name

            if(res.data.types[1]){
                pokemon['type2'] = res.data.types[1].type.name
            }

            pokemon['hiddenAbility'] = ""
            pokemon['abilities'] = []
            res.data.abilities.map((ability) => {
                if(ability.is_hidden === true){
                    pokemon.hiddenAbility = capName(ability.ability.name)
                }else{
                    pokemon.abilities.push(capName(ability.ability.name))
                }
            })
            pokemon.abilities = pokemon.abilities.join(', ')
            setPokemon(pokemon)
        })
    }, []);

    return(
        <div className="poke-info">
            <NavLink to={'/'}>Not what you're looking for?</NavLink>
            <h4 className="mt-2 mb-0">Pokedex #{pokemon.id}</h4>
            <h1>{pokemon.name}</h1>
            <img className="poke-sprite" src={pokemon.image} alt="pokemon sprite" />
            <div className="d-flex flex-row">
                <h3 className="me-2"><label htmlFor="type-img">Pokemon Type: </label></h3>
                {
                    pokemon.type1==='normal' && <img className="type-img" src={normal} alt="pokemon type1" />
                }{
                    pokemon.type1==='fairy' && <img className="type-img" src={fairy} alt="pokemon type1" />
                }{
                    pokemon.type1==='grass' && <img className="type-img" src={grass} alt="pokemon type1" />
                }{
                    pokemon.type1==='steel' && <img className="type-img" src={steel} alt="pokemon type1" />
                }{
                    pokemon.type1==='fire' && <img className="type-img" src={fire} alt="pokemon type1" />
                }{
                    pokemon.type1==='water' && <img className="type-img" src={water} alt="pokemon type1" />
                }{
                    pokemon.type1==='dragon' && <img className="type-img" src={dragon} alt="pokemon type1" />
                }{
                    pokemon.type1==='electric' && <img className="type-img" src={electric} alt="pokemon type1" />
                }{
                    pokemon.type1==='ground' && <img className="type-img" src={ground} alt="pokemon type1" />
                }{
                    pokemon.type1==='rock' && <img className="type-img" src={rock} alt="pokemon type1" />
                }{
                    pokemon.type1==='fighting' && <img className="type-img" src={fight} alt="pokemon type1" />
                }{
                    pokemon.type1==='dark' && <img className="type-img" src={dark} alt="pokemon type1" />
                }{
                    pokemon.type1==='ice' && <img className="type-img" src={ice} alt="pokemon type1" />
                }{
                    pokemon.type1==='poison' && <img className="type-img" src={poison} alt="pokemon type1" />
                }{
                    pokemon.type1==='psychic' && <img className="type-img" src={psychic} alt="pokemon type1" />
                }{
                    pokemon.type1==='flying' && <img className="type-img" src={flying} alt="pokemon type1" />
                }{
                    pokemon.type1==='ghost' && <img className="type-img" src={ghost} alt="pokemon type1" />
                }{
                    pokemon.type1==='bug' && <img className="type-img" src={bug} alt="pokemon type1" />
                }
                
                {
                    pokemon.type2==='normal' && <img className="type-img" src={normal} alt="pokemon type2" />
                }{
                    pokemon.type2==='fairy' && <img className="type-img" src={fairy} alt="pokemon type2" />
                }{
                    pokemon.type2==='grass' && <img className="type-img" src={grass} alt="pokemon type2" />
                }{
                    pokemon.type2==='steel' && <img className="type-img" src={steel} alt="pokemon type2" />
                }{
                    pokemon.type2==='fire' && <img className="type-img" src={fire} alt="pokemon type2" />
                }{
                    pokemon.type2==='water' && <img className="type-img" src={water} alt="pokemon type2" />
                }{
                    pokemon.type2==='dragon' && <img className="type-img" src={dragon} alt="pokemon type2" />
                }{
                    pokemon.type2==='electric' && <img className="type-img" src={electric} alt="pokemon type2" />
                }{
                    pokemon.type2==='ground' && <img className="type-img" src={ground} alt="pokemon type2" />
                }{
                    pokemon.type2==='rock' && <img className="type-img" src={rock} alt="pokemon type2" />
                }{
                    pokemon.type2==='fighting' && <img className="type-img" src={fight} alt="pokemon type2" />
                }{
                    pokemon.type2==='dark' && <img className="type-img" src={dark} alt="pokemon type2" />
                }{
                    pokemon.type2==='ice' && <img className="type-img" src={ice} alt="pokemon type2" />
                }{
                    pokemon.type2==='poison' && <img className="type-img" src={poison} alt="pokemon type2" />
                }{
                    pokemon.type2==='psychic' && <img className="type-img" src={psychic} alt="pokemon type2" />
                }{
                    pokemon.type2==='flying' && <img className="type-img" src={flying} alt="pokemon type2" />
                }{
                    pokemon.type2==='ghost' && <img className="type-img" src={ghost} alt="pokemon type2" />
                }{
                    pokemon.type2==='bug' && <img className="type-img" src={bug} alt="pokemon type2" />
                }
            </div>
            <h3 className="mt-2">Abilities: {pokemon.abilities}</h3>
            {
                pokemon.hiddenAbility && <h3>Hidden Ability: {pokemon.hiddenAbility}</h3>
            }
            <div className="sprites d-flex flex-row">
                <img className="game-sprite" src={pokemon.front} alt="pokemon front sprite" />
                <img className="game-sprite" src={pokemon.back} alt="pokemon front sprite" />
            </div>
        </div>
    )
}

export default PokemonInfo
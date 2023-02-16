import { React, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Search = () => {

    const [pokemonName, setPokemonName] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate()

    function lowName(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    const searchPokemon = (e) => {
        e.preventDefault()

        if(pokemonName==='penis'||pokemonName==='Penis'){
            navigate('/prank')
        }if(pokemonName==='mewthree'||pokemonName==='Mewthree'){
            navigate('/mewthree')
        }if(pokemonName===''){
            setErrors("Please Enter a Valid Pokemon")
        }else{
            const lowerName = lowName(pokemonName)
            
            axios.get(`https://pokeapi.co/api/v2/pokemon/${lowerName}`)
            .then((res) => {
                const id = res.data.id
                navigate(`/pokeinfo/${id}`)
            })
            .catch((err)=>{
                setErrors("Please Enter a Valid Pokemon")
            })
        }
    }

    return(
        <div className="search d-flex justify-content-center">
            <form className="d-flex flex-column align-self-center mt-3" onSubmit={searchPokemon}>
                <label className="mb-3" htmlFor="pokemonName">Enter Pokemon Name or Pokedex Number</label>
                <input className="mb-3" type="text" placeholder="Pokemon Name" value={pokemonName} name="pokemonName" onChange={(e)=>setPokemonName(e.target.value)} />
                { errors ? <p className="red-text">{errors}</p> : null}
                <button className="btn btn-success align-self-center w-25" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
import { useState } from "react"
import Link from "next/link"
import { useLazyQuery } from "@apollo/client"
import { POKEMONS } from '../querys/pokemon'

export default function Search(){
  const [pokemonSearched, setPokemonSearched] = useState("");
  const [getPokemon, { data, error }] = useLazyQuery(POKEMONS, {
    variables: { name: pokemonSearched },
  });

  if (error) return <h1> Error found</h1>;

  return(
    <>
      <div className="containerSearch">
        <input
          type="text"
          placeholder="Pokemon name..."
          onChange={(event) => {
            setPokemonSearched(event.target.value.toLowerCase());
          }}
        />
        <button onClick={() => getPokemon()}> Search</button>
      </div>
      <div className="pokeContainer">
        {data &&(
          <Link href='/character/[id]' as={`/character/${data.pokemon.id}`}>
          <div className="pokeCard">
            <h3>{data.pokemon.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.pokemon.id}.png`}/>
          </div>
          </Link>
        )}
      </div>
    </>
  )
}

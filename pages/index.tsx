import Link from "next/link"
import { useQuery } from "@apollo/client"

import { MORE_POKEMONS } from '../querys/pokemon'
import Search from './search'

export default function Home(){
  const{loading,data} = useQuery(MORE_POKEMONS)

  if(loading) return <h3>Loading...</h3>
  
  return (
    <div>
      <h1 className="title">PokeNext</h1>
      <Search/>
      <div className="pokeContainer">
        {data.pokemons.results.map((response) => (
          <Link href='/character/[id]' as={`/character/${response.id}`}>
           <div className="pokeCard">
             <h3>{response.name}</h3>
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.id}.png`}/>
           </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

import Link from "next/link"

export default function Character({data}){
  const { name, id, types, type} = data
  return(
    <div className="PokeContainer">
      <h1>Details</h1>

      <div className="pokeCard">
        <h3>Name: {name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
        <h5>Id: {id}</h5>
        <div>
          <h5>Type:</h5>
         <ul>
          {types.map((item,index) => (
           <li key={index}>{item.type.name}</li>
          ))}
           </ul>
        </div>
      </div>
      
      <Link href="/">Home</Link>
    </div>
  )
}

const defaultEndpoint = 'https://pokeapi.co/api/v2/pokemon'


export async function getServerSideProps({query}){
  const { id } = query
  const res = await fetch(`${defaultEndpoint}/${id}`)
  const data = await res.json()
  
  return{
    props: {
      data
    }
  }
}

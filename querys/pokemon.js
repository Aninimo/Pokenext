import { gql } from "@apollo/client"

export const POKEMONS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      id
      types {
        type {
         name
       }
     }
  }
}
`

export const MORE_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      id
      name
    }
  }
}
`

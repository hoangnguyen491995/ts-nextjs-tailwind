import axios from "axios";
import { useEffect, useState } from "react";
import ListPokemon from "../../src/component/pokemon";
import { Pokemon } from "../interface";

const Pokemons: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`)
      .then(function (response) {
        console.log(response.data.results);

        setPokemon(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(pokemon);
  }, []);

  console.log(pokemon);

  return <div>{pokemon != [] && <ListPokemon pokemons={pokemon} />}</div>;
};

export default Pokemons;

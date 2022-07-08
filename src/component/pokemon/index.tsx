import axios from "axios";

import { useEffect, useState } from "react";
import { Pokemon, Post } from "../../../pages/interface";

interface Props {
  pokemons: Pokemon[];
}

const ListPokemon: React.FC<Props> = (props) => {
  const { pokemons } = props;
  //console.log(props.pokemons)

  const [url, setUrl] = useState<string>("")
  

  return (
    <div>
      {props.pokemons.map((post: Post, index: number) => {

            

        return (
          <div key={index}>
        
                   
            <p>{post.name}</p>
          </div>
        );
      })}
      List Pokemons
    </div>
  );
};

export default ListPokemon;

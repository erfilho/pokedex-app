import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Location() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => {
        setPokemon(data);
        console.log(pokemon);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="text-slate-200 flex flex-col gap-2 w-full items-center px-2">
      {pokemon?.abilities.map((hab) => (
        <p className="">{hab.ability.name + " "}</p>
      ))}
    </div>
  );
}

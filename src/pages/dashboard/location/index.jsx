import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Location() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [locate, setLocate] = useState(null);

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

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
      .then(({ data }) => {
        setLocate(data);
        console.log(data);
      });
  }, [pokemon]);

  return (
    <div className="text-slate-200 flex flex-col gap-2 w-full px-2">
      {locate?.map((location) => (
        <p className="">{location.location_area.name + " "}</p>
      ))}
    </div>
  );
}

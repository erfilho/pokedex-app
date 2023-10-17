import { useState } from "react";
import Card from "../../components/card";
import Loading from "../../components/loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function searchPokemon() {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(({ data: { id } }) => {
        navigate(`/dash/${id}`);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 text-slate-100 min-h-screen bg-red-500">
      <header className="w-full flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Pokédex</h1>
        <p className="">O seu catálogo de pokemons.</p>
        <div className="flex w-3/4 sm:w-3/5 md:w-2/4 lg:w-1/3">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="bg-slate-50 text-slate-800 w-full py-2 px-4 rounded-s-full focus:outline-none"
            placeholder="Pesquise aqui"
          ></input>
          <button
            onClick={searchPokemon}
            className="text-slate-200 rounded-e-full bg-slate-50 py-2 px-4"
          >
            🔍
          </button>
        </div>
      </header>
      <main className="bg-slate-50 max-w-4xl w-full sm:w-8/12 rounded-t-3xl flex-1 sm:flex-initial sm:rounded-3xl p-4">
        <h2 className="text-slate-300 px-2 pb-4"> Sugestões </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      {loading && <Loading />}
    </div>
  );
}

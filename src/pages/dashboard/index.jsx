import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import Tabs from "../../components/tabs";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ArrowLeft from "../../assets/chevron-left.svg";
import ArrowRight from "../../assets/chevron-right.svg";

export default function Dashboard() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("normal");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => {
        setPokemon(data);
        setType(data.types[0].type.name);
        setLoading(false);
      })
      .catch((error) => {
        navigate("/");
        setLoading(false);
        console.error(error);
      });
  }, [id]);

  function changePokemon(id) {
    setLoading(true);
    navigate(`/dash/${id}/data`);
  }

  return (
    <div
      className={`flex flex-col justify-start items-center w-full gap-10 text-slate-600 min-h-screen ${
        type ? type : "normal"
      }`}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className="max-w-4xl w-full flex flex-col items-start pt-10 gap-2 sm:w-8/12 px-10 sm:px-0">
            <div>
              <h1 className="text-4xl font-semibold capitalize text-slate-800">
                {pokemon?.name}
              </h1>
              <p className="text-xl mt-1 text-black opacity-50">
                #{pokemon?.id}{" "}
              </p>
              <span
                className={`inline-block text-lg py-1 px-4 font-medium mt-2 text-center bg-slate-700 rounded-full uppercase ${type}`}
              >
                {type}
              </span>
            </div>
          </header>
          <main className="bg-slate-700 max-w-4xl w-full sm:w-8/12 rounded-t-3xl flex-1 sm:flex-initial sm:rounded-3xl p-4 relative">
            <div>
              <img
                src={pokemon?.sprites?.other["official-artwork"]?.front_default}
                className="w-36 h-36 absolute right-0 -top-36 lg:w-48 lg:h-48 lg:-top-24"
                alt={pokemon?.name}
              ></img>
              <Tabs />
              <Outlet />
            </div>
          </main>
          <div className="max-w-4xl flex justify-between w-full">
            <button
              onClick={() => changePokemon(pokemon?.id - 1)}
              className="flex gap-2 items-center text-slate-400 py-2 pe-6 ps-4 rounded-full bg-slate-700"
            >
              <img src={ArrowLeft} alt="Anterior" />
              Anterior
            </button>
            <button
              onClick={() => changePokemon(pokemon?.id + 1)}
              className="flex gap-2 items-center text-slate-400 py-1 pe-4 ps-6 rounded-full bg-slate-700"
            >
              Próximo
              <img src={ArrowRight} alt="Próximo" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

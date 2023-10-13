import Card from "../../components/card";
import Loading from "../../components/loading";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 text-slate-100 min-h-screen bg-red-500">
      <header className="w-full flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Pokédex</h1>
        <p className="">O seu catálogo de pokemons.</p>
        <div className="w-1/2">
          <input
            type="text"
            className="border bg-slate-50 border-slate-200 text-slate-200 mt-4 w-full py-2 px-4 rounded-full"
            placeholder="Pesquise aqui"
          ></input>
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
    </div>
  );
}

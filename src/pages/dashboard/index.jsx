import Card from "../../components/card";
import Loading from "../../components/loading";
import Tabs from "../../components/tabs";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-10 text-slate-600 min-h-screen bg-yellow-200">
      <header className="max-w-4xl w-full flex flex-col items-start pt-10 gap-2 sm:w-8/12 px-10 sm:px-0">
        <div>
          <h1 className="text-4xl font-semibold"> Pikachu </h1>
          <p className="text-black opacity-30 text-xl"> #01 </p>
          <p className="text-lg py-1 font-medium text-center bg-slate-600 rounded-full text-yellow-200 uppercase">
            Eletrico{" "}
          </p>
        </div>
      </header>
      <main className="bg-slate-700 max-w-4xl w-full sm:w-8/12 rounded-t-3xl flex-1 sm:flex-initial sm:rounded-3xl p-4 relative">
        <div>
          <Tabs />
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            className="w-36 h-36 absolute right-0 -top-36 lg:w-48 lg:h-48 lg:-top-24"
            alt="Pikachu"
          ></img>
        </div>
      </main>
    </div>
  );
}

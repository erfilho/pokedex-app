export default function Card() {
  return (
    <div className="flex flex-row text-slate-900 bg-yellow-200 items-center justify-start gap-2 px-5 py-2 rounded-2xl">
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        className="w-28 h-28 object-cover"
        alt="Pikachu"
      ></img>
      <a href="/dash">
        <div className="flex flex-col justify-center gap-1">
          <h3 className="text-lg font-medium"> Pikachu </h3>
          <p className="text-black opacity-30 text-sm"> #01 </p>
          <p className="text-sm bg-slate-50 rounded-full py-0.5 px-2 text-yellow-200 uppercase">
            Eletrico{" "}
          </p>
        </div>
      </a>
    </div>
  );
}

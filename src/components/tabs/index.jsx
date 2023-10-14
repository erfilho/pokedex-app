export default function Tabs() {
  return (
    <div>
      <div className="flex p-2 gap-4 ">
        <button className="py-2 border-4 border-slate-700 text-slate-50 hover:border-b-slate-50">
          {" "}
          Dados{" "}
        </button>
        <button className="py-2 border-4 border-slate-700 text-slate-50 hover:border-b-slate-50">
          {" "}
          Localizações{" "}
        </button>
        <button className="py-2 border-4 border-slate-700 text-slate-50 hover:border-b-slate-50">
          {" "}
          Habilidades{" "}
        </button>
        <button className="py-2 border-4 border-slate-700 text-slate-50 hover:border-b-slate-50">
          {" "}
          Métricas{" "}
        </button>
        <button className="py-2 border-4 border-slate-700 text-slate-50 hover:border-b-slate-50">
          {" "}
          Sair{" "}
        </button>
      </div>
    </div>
  );
}

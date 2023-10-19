import Close from "../../assets/x-lg.svg";
import { Link } from "react-router-dom";

export default function Tabs() {
  return (
    <div>
      <div className="flex p-2 gap-x-4 flex-wrap">
        <Link
          to="data"
          className="text-sm sm:text-md py-1 text-slate-400 hover:text-slate-300 relative before:absolute before:w-full before:h-1 before:bg-slate-600 before:rounded before:bottom-0 before:invisible before:hover:visible"
        >
          Dados
        </Link>
        <Link
          to="location"
          className="text-sm sm:text-md py-1 text-slate-400 hover:text-slate-300 relative before:absolute before:w-full before:h-1 before:bg-slate-600 before:rounded before:bottom-0 before:invisible before:hover:visible"
        >
          Localizações
        </Link>
        <Link
          to="habilities"
          className="text-sm sm:text-md py-1 text-slate-400 hover:text-slate-300 relative before:absolute before:w-full before:h-1 before:bg-slate-600 before:rounded before:bottom-0 before:invisible before:hover:visible"
        >
          Habilidades
        </Link>
        <Link
          to="metrics"
          className="text-sm sm:text-md py-1 text-slate-400 hover:text-slate-300 relative before:absolute before:w-full before:h-1 before:bg-slate-600 before:rounded before:bottom-0 before:invisible before:hover:visible"
        >
          Métricas
        </Link>
        <Link
          to="/"
          className="text-sm sm:text-md py-1 text-slate-400 hover:text-slate-300 relative before:absolute before:w-full before:h-1 before:bg-slate-600 before:rounded before:bottom-0 before:invisible before:hover:visible flex gap-2 items-center"
        >
          Sair
          <img src={Close} alt="Fechar" />
        </Link>
      </div>
    </div>
  );
}

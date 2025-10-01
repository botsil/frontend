import { TrophyIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function CompetitionCard({ competition }) {
  return (
    <Link
      to={`/competitions/${competition.id}`}
      className="flex flex-col items-center w-full max-w-[10rem] md:max-w-[20rem] h-48 md:h-80 group"
    >
      <div className="relative flex-1 w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl border border-slate-600 transition-all duration-300 group-hover:border-cyan-400">
        {competition.primaryPhoto ? (
          <img
            src={competition.primaryPhoto}
            alt={competition.name}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
            <TrophyIcon className="h-16 w-16 text-cyan-400" />
          </div>
        )}
      </div>
      <h3 className="mt-2 text-xl font-semibold text-center transition-colors duration-300 group-hover:text-cyan-400">
        {competition.name}
      </h3>
      <p className="text-lg text-slate-200 text-center">{competition.status}</p>
    </Link>
  );
}

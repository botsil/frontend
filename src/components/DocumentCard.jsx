import { DocumentTextIcon } from "@heroicons/react/24/outline";

export function DocumentCard({ title, documentUrl }) {
  return (
    <button
      onClick={() => window.open(documentUrl, "_blank")}
      className="w-full max-w-[10rem] md:max-w-[20rem] aspect-square flex flex-col items-center transition-all duration-300 hover:scale-[1.03] group"
    >
      <div className="flex-1 w-full flex flex-col items-center justify-center p-4 overflow-hidden rounded-lg shadow-lg hover:shadow-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600 transition-colors duration-300 group-hover:border-cyan-400">
        <div className="bg-slate-600/50 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-110">
          <DocumentTextIcon className="h-12 w-12 text-cyan-400" />
        </div>
        <h3 className="text-white font-medium text-center line-clamp-2">
          {title}
        </h3>
      </div>
    </button>
  );
}

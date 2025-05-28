import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import BotsilLogo from "./BotsilLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md fixed w-full flex justify-between items-center z-50 border-b border-slate-700">
      <div className="flex items-center h-20 ml-4 md:ml-10">
        <BotsilLogo className="text-3xl md:text-4xl" />
      </div>

      <div className="hidden md:flex space-x-8 mr-10 font-orbitron font-bold text-xl pr-40">
        <Link
          to="/"
          className="text-slate-200 hover:text-cyan-400 transition-colors duration-300"
        >
          Início
        </Link>
        <Link
          to="/articles"
          className="text-slate-200 hover:text-cyan-400 transition-colors duration-300"
        >
          Artigos
        </Link>
        <Link
          to="/manuals"
          className="text-slate-200 hover:text-cyan-400 transition-colors duration-300"
        >
          Manuais
        </Link>
        <Link
          to="/members"
          className="text-slate-200 hover:text-cyan-400 transition-colors duration-300"
        >
          Membros
        </Link>
      </div>

      <button
        className="md:hidden mr-4 p-2 text-slate-200 hover:text-cyan-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      <div
        className={`md:hidden absolute top-20 right-0 w-full bg-slate-800/95 backdrop-blur-lg transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link
            to="/"
            className="text-slate-100 hover:text-cyan-400 w-full text-center py-3 border-b border-slate-700"
            onClick={() => setIsOpen(false)}
          >
            Início
          </Link>
          <Link
            to="/articles"
            className="text-slate-100 hover:text-cyan-400 w-full text-center py-3 border-b border-slate-700"
            onClick={() => setIsOpen(false)}
          >
            Artigos
          </Link>
          <Link
            to="/manuals"
            className="text-slate-100 hover:text-cyan-400 w-full text-center py-3 border-b border-slate-700"
            onClick={() => setIsOpen(false)}
          >
            Manuais
          </Link>
          <Link
            to="/members"
            className="text-slate-100 hover:text-cyan-400 w-full text-center py-3"
            onClick={() => setIsOpen(false)}
          >
            Membros
          </Link>
        </div>
      </div>
    </nav>
  );
}

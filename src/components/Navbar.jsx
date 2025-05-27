import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50/50 backdrop-blur-sm fixed w-full flex justify-between items-center z-50">
      <div className="flex items-center h-20 ml-4 md:ml-10">
        <Link
          to="/"
          className="font-orbitron italic font-black text-3xl md:text-5xl"
        >
          BOTSIL
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 mr-10 font-orbitron font-bold text-lg xl:text-xl">
        <Link to="/" className="hover:text-gray-600">
          Início
        </Link>
        <Link to="/articles" className="hover:text-gray-600">
          Artigos
        </Link>
        <Link to="/manuals" className="hover:text-gray-600">
          Manuais
        </Link>
        <Link to="/members" className="hover:text-gray-600">
          Membros
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <button className="md:hidden mr-4 p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 right-0 w-full bg-gray-50/95 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link
            to="/"
            className="text-xl py-2"
            onClick={() => setIsOpen(false)}
          >
            Início
          </Link>
          <Link
            to="/articles"
            className="text-xl py-2"
            onClick={() => setIsOpen(false)}
          >
            Artigos
          </Link>
          <Link
            to="/manuals"
            className="text-xl py-2"
            onClick={() => setIsOpen(false)}
          >
            Manuais
          </Link>
          <Link
            to="/members"
            className="text-xl py-2"
            onClick={() => setIsOpen(false)}
          >
            Membros
          </Link>
        </div>
      </div>
    </nav>
  );
}

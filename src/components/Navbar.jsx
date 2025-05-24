import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 fixed w-full flex justify-between items-center">
      <div className="flex items-center h-20 ml-10">
        <Link to="/" className="font-orbitron italic font-black text-5xl">
          BOTSIL
        </Link>
      </div>
      <div className="flex space-x-15 mr-90 font-orbitron font-bold text-xl">
        <Link to="/">Início</Link>
        <Link to="/articles">Artigos</Link>
        <Link to="/manuals">Manuais</Link>
        <Link to="/members">Sobre Nós</Link>
      </div>
    </nav>
  );
}

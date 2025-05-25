import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-50/50 backdrop-blur-sm fixed w-full flex justify-between items-center z-50">
      <div className="flex items-center h-20 ml-10">
        <Link to="/" className="font-orbitron italic font-black text-5xl">
          BOTSIL
        </Link>
      </div>
      <div className="flex space-x-8 mr-20 font-orbitron font-bold text-xl">
        <Link to="/">Início</Link>
        <Link to="/articles">Artigos</Link>
        <Link to="/manuals">Manuais</Link>
        <Link to="/members">Membros</Link>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md py-8 mt-auto border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-8">
            <img src={logo} alt="Logo" className="max-h-16 w-auto" />
            <a
              href="https://github.com/botsil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <CodeBracketIcon className="h-8 w-8" />
              <span>GitHub</span>
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} BOTSIL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

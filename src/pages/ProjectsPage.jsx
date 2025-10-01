import logo from "../assets/logo_dark.png";
import blip from "../assets/blip.png";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 py-8">
        <div className="max-w-3xl mt-5">
          <h3 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron">
            Em construção
          </h3>
          <p className="text-lg md:text-xl">
            Nessa página futuramente vamos atualizar sobre nossos próximos
            projetos. Entre os nossos projetos futuros da Botsil estão:
          </p>
          <ul className="text-lg md:text-xl mt-4 list-disc list-inside text-left">
            <li>
              Um software para controlar veículos Bluetooth (Arduino, ESP32,
              etc) com gestos
            </li>
            <li>Um carro autônomo com Raspberry Pi 5 e visão computacional</li>
            <li>Software para controlar carros Bluetooth pelo celular</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
          {/* Alterações aqui: adicione w-full para mobile */}
          <div className="w-full md:w-[45%] aspect-square relative">
            <img
              src={logo}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
              alt="Logo Botsil"
              onError={(e) => {
                console.error("Erro ao carregar logo:", e);
                e.target.style.display = "none";
              }}
            />
          </div>

          <div className="w-full md:w-[45%] aspect-square relative">
            <img
              src={blip}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
              alt="Blip"
              onError={(e) => {
                console.error("Erro ao carregar blip:", e);
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

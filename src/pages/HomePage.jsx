import { useState, useEffect } from "react";
import api from "../services/api";
import logo from "../assets/logo_dark.png";
import blip from "../assets/blip.png";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [images_competition_highlight, setImages] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await api.get("/photos/competition_highlight");
        const imageUrls = response.data.map((item) => item.photo_url);
        setImages(imageUrls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (images_competition_highlight.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage(
          (prev) => (prev + 1) % images_competition_highlight.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images_competition_highlight]);

  return (
    <div className="min-h-screen pt-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-8 items-center">
        <div className="md:w-[45%]">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 font-orbitron">
            Hello, World! 👋
          </h1>
          <h3 className="text-xl md:text-2xl font-bold mb-4 font-orbitron">
            Nós somos{" "}
            <span className="font-extrabold text-2xl md:text-4xl">BOTSIL</span>,
          </h3>
          <p className="text-lg md:text-xl">
            Somos uma equipe de robótica binacional formada por estudantes
            brasileiros e uruguaios da parceria entre
            <span className="font-semibold "> IFSul</span> e
            <span className="font-semibold"> UTEC</span>.
          </p>
        </div>

        <div className="md:w-[45%] md:ml-auto aspect-square w-full relative">
          <img
            src={logo}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 rounded-xl shadow-lg`}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-8 items-center">
        <div className="md:w-[45%] md:ml-auto aspect-square w-full relative">
          <img
            src={blip}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000  rounded-xl shadow-lg`}
          />
        </div>
        <div className="md:w-[45%]">
          <h3 className="text-4xl md:text-4xl font-bold mb-4 font-orbitron">
            Conheça o{" "}
            <span className="font-extrabold text-2xl md:text-4xl">BLIP</span> !
          </h3>
          <p className="text-lg md:text-xl">
            <span className="font-bold">BLIP</span> é um acrônimo para{" "}
            <span className="font-bold">
              Botsil's Learning & Integrated Pilot
            </span>{" "}
            (Piloto de Aprendizagem Integrado da Botsil). Ele é o robozinho
            símbolo da nossa equipe, sempre pronto para aprender.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-8 items-center">
        <div className="md:w-[45%]">
          <h3 className="text-4xl md:text-4xl font-bold mb-4 font-orbitron">
            Nossa estreia como{" "}
            <span className="font-extrabold italic bg-gradient-to-r  bg-clip-text">
              BOTSIL
            </span>
            ,
          </h3>
          <p className="text-lg md:text-xl">
            Nossa primeira aparição como equipe foi na 1ª edição do{" "}
            <span className="font-bold">BRABOTS</span>, competição de robótica
            do{" "}
            <span className="font-bold">
              IFSul Campus Santana do Livramento
            </span>
            , no dia 29/05/2025. Na estreia, conquistamos o{" "}
            <span className="font-bold">1º lugar</span> nas provas de arrancada,
            puxar peso, salto em rampa e estética do veículo.
          </p>
        </div>

        <div className="md:w-[45%] md:ml-auto aspect-square w-full relative">
          {images_competition_highlight.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`Carrossel ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentImage === i ? "opacity-100" : "opacity-0"
              } rounded-xl shadow-lg`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

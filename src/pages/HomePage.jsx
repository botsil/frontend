import { useState, useEffect } from "react";
import api from "../services/api";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await api.get("/photos");
        const imageUrls = response.data.map((item) => item.photo_url);
        setImages(imageUrls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="min-h-screen pt-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-8">
        <div className="md:w-[45%]">
          <h1 className="text-6xl md:text-6xl font-bold mb-4 font-orbitron">
            Hello, World! 👋
          </h1>
          <h3 className="text-4xl md:text-4xl font-bold mb-4 font-orbitron">
            Somos{" "}
            <span
              className="font-extrabold italic bg-gradient-to-r text-transparent bg-clip-text"
              style={{
                background:
                  "linear-gradient(90deg, #009C3B 0%, #FFCB00 30%, #FFFFFF 50%, #0038A8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              BOTSIL
            </span>
            ,
          </h3>
          <p className="text-lg md:text-xl">
            Uma equipe de robótica binacional formada por estudantes brasileiros
            e uruguaios da parceria entre
            <span className="font-semibold "> IFSul</span> e
            <span className="font-semibold"> UTEC</span>. Unimos talentos de
            Análise e Desenvolvimento de Sistemas e Engenharia Elétrica para
            transformar circuitos e códigos em robôs incríveis!
          </p>

          <p className="text-lg md:text-xl mt-4">
            Nosso desafio é o{" "}
            <span className="font-semibold bg-gradient-to-r from-[#009C3B] to-[#FFCB00] text-transparent bg-clip-text">
              BRABOTS
            </span>
            : um torneio onde todas as equipes recebem o mesmo kit (Arduino,
            motores, rodas) e precisam inovar dentro das regras. Criamos robôs
            para quatro provas:
          </p>

          <ul className="mt-4 space-y-2 text-lg md:text-xl list-disc pl-5">
            <li>
              <span className="font-semibold">Arrancadão:</span> Corrida
              eliminatória de velocidade pura!
            </li>
            <li>
              <span className="font-semibold">Salto em Distância:</span> Voo
              mais longo em três tentativas
            </li>
            <li>
              <span className="font-semibold">Carregamento de Peso:</span>{" "}
              Resistência com peso crescente
            </li>
            <li>
              <span className="font-semibold">Personalização:</span> Design
              criativo e organização da equipe
            </li>
          </ul>

          <p className="text-lg md:text-xl mt-4">
            Juntamos tecnologia, criatividade e trabalho em equipe para superar
            limites - sempre com um pé no Brasil e outro no Uruguai! 🚀🇧🇷🇺🇾
          </p>
        </div>

        <div className="md:w-[45%] md:ml-auto aspect-square w-full relative">
          {images.length > 0 ? (
            images.map((imgSrc, i) => (
              <img
                key={i}
                src={imgSrc}
                alt={`Carrossel ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  currentImage === i ? "opacity-100" : "opacity-0"
                } rounded-xl shadow-lg`}
              />
            ))
          ) : (
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-square flex items-center justify-center">
              <span>Carregando imagens...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

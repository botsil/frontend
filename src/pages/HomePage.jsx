import { useState, useEffect } from "react";
import api from "../services/api";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await api.get("/photos");
      const imageUrls = response.data.map((item) => item.photo_url);
      setImages(imageUrls);
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
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-8">
        <div className="md:w-[45%]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron">
            Hello, World! Somos o BOTSIL,
          </h1>
          <p className="text-lg md:text-xl">
            Equipe de robótica binacional composta por estudantes brasileiros e
            uruguaios do IFSul e UTEC. Nosso objetivo? Competir no BRABOTS, um
            torneio onde todas as equipes receberam o mesmo kit (Arduino,
            motores, rodas) e precisam inovar dentro das regras. Unimos
            estudantes de Análise e Desenvolvimento de Sistemas e Engenharia
            Elétrica. Aqui, circuitos e código viram robôs para quatro desafios:
            1. Arrancadão: corrida eliminatória; 2. Salto em Distância: voo mais
            longo em três tentativas; 3. Carregamento de Peso: resistência com
            peso crescente; 4. Personalização: avalia design e organização da
            equipe. Queremos provar que a parceria Brasil-Uruguai é nosso
            superpoder.
          </p>
        </div>
        <div className="md:w-[45%] md:ml-auto md:aspect-square h-64 md:h-auto w-full relative max-w-[90vw] md:max-w-none mx-auto">
          {images.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`Carrossel ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentImage === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

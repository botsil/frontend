import { useState, useEffect } from "react";
import api from "../services/api";
import logo from "../assets/logo_dark.png";

export default function AboutUsPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [images_competition_highlight, setImages] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await api.get("/photos/about_us");
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-8 items-center md:mt-10">
        <div className="md:w-[45%]">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 font-orbitron">
            Sobre nós
          </h1>
          <p className="text-lg md:text-xl md:mt-20">
            <span className="font-bold">BOTSIL</span> é uma equipe de robótica
            binacional formada por estudantes brasileiros e uruguaios da
            parceria entre IFSul e UTEC. Nosso objetivo é desenvolver
            habilidades em robótica e aprendizado de máquina em um ambiente
            colaborativo, visando a participação em competições.
          </p>
          <p className="text-lg md:text-xl mt-5">
            Nosso símbolo é o <span className="font-bold">BLIP</span>, um robô
            que representa nossa vontade constante de aprender. Estreamos com
            sucesso no BRABOTS, conquistando o 1º lugar em várias provas, e
            agora seguimos explorando novos projetos tecnológicos.
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

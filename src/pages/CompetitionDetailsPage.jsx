import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function CompetitionDetailsPage() {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchCompetitionDetails = async () => {
      try {
        const competitionResponse = await api.get(`/competitions/${id}`);
        setCompetition(competitionResponse.data);
        const photosResponse = await api.get(`/competitions/photos/${id}`);
        setPhotos(photosResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompetitionDetails();
  }, [id]);

  if (!competition) {
    return (
      <div className="min-h-screen pt-10 px-4 md:px-20 mt-5 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-orbitron">
            Carregando...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-10 px-4 md:px-20 mt-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center pb-10">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron">
            {competition.name}
          </h1>
          <p className="text-lg md:text-2xl pt-5 text-slate-300">
            {competition.location} •{" "}
            {new Date(competition.initial_date).toLocaleDateString("pt-BR")}
          </p>
          <div
            className={`inline-block mt-4 px-4 py-2 rounded-full ${
              competition.status === "Finalizada"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : competition.status === "Planejada"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
            }`}
          >
            {competition.status}
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-orbitron">
            Sobre a Competição
          </h2>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
            {competition.description}
          </p>
        </div>

        {competition.result && (
          <div className="bg-slate-800/50 rounded-lg p-6 mb-8 border-l-4 border-cyan-400">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-orbitron">
              Resultado
            </h2>
            <p className="text-lg md:text-xl text-slate-200">
              {competition.result}
            </p>
          </div>
        )}

        {photos.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-orbitron">
              Galeria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={photo.photo_url}
                    alt={photo.caption || competition.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {photo.caption && (
                    <p className="p-3 text-sm text-slate-300 bg-slate-900/80">
                      {photo.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 font-orbitron">Data</h3>
            <p className="text-lg text-slate-200">
              {new Date(competition.initial_date).toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 font-orbitron">
              Localização
            </h3>
            <p className="text-lg text-slate-200">{competition.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

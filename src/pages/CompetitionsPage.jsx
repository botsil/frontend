import { useState, useEffect } from "react";
import { CompetitionCard } from "../components/CompetitionCard";
import api from "../services/api";

export default function CompetitionsPage() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await api.get("/competitions");
        const competitionsData = response.data;

        const competitionsWithPrimaryPhoto = await Promise.all(
          competitionsData.map(async (competition) => {
            try {
              const photoResponse = await api.get(
                `/competitions/photos/${competition.id}`
              );
              const photos = photoResponse.data;

              const primaryPhoto = photos.length > 0 ? photos[0] : null;

              return {
                ...competition,
                primaryPhoto: primaryPhoto ? primaryPhoto.photo_url : null,
              };
            } catch (error) {
              console.error(error);
              return {
                ...competition,
                primaryPhoto: null,
              };
            }
          })
        );

        setCompetitions(competitionsWithPrimaryPhoto);
      } catch (error) {
        console.error("Erro ao buscar competições:", error);
      }
    };

    fetchCompetitions();
  }, []);

  return (
    <div className="min-h-screen pt-10 px-4 md:px-20 mt-5">
      <div className="text-center pb-10">
        <h1 className="text-4xl md:text-6xl font-bold font-orbitron">
          Competições
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
        {competitions.map((competition) => (
          <CompetitionCard key={competition.id} competition={competition} />
        ))}
      </div>
    </div>
  );
}

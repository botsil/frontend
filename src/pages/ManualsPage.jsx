import { useState, useEffect } from "react";
import { DocumentCard } from "../components/DocumentCard";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

export default function ManualsPage() {
  const [manuals, setManuals] = useState([]);

  useEffect(() => {
    const fetchManuals = async () => {
      const response = await api.get("/manuals");
      setManuals(response.data);
    };
    fetchManuals();
  }, []);

  return (
    <PageLayout title="Manuais Técnicos">
      {manuals.map((manual) => (
        <DocumentCard
          key={manual.id}
          title={manual.title}
          documentUrl={manual.manual_url}
        />
      ))}
    </PageLayout>
  );
}

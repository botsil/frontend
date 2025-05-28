import { useState, useEffect } from "react";
import { DocumentCard } from "../components/DocumentCard";
import api from "../services/api";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await api.get("/articles");
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-10 px-4 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-center pb-10">
        Artigos Publicados
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
        {articles.map((article) => (
          <DocumentCard
            key={article.id}
            title={article.title}
            documentUrl={article.article_url}
          />
        ))}
      </div>
    </div>
  );
}

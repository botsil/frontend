import { useState, useEffect } from "react";
import { DocumentCard } from "../components/DocumentCard";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

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
    <PageLayout title="Artigos Publicados">
      {articles.map((article) => (
        <DocumentCard
          key={article.id}
          title={article.title}
          documentUrl={article.article_url}
        />
      ))}
    </PageLayout>
  );
}

import { useState, useEffect } from "react";
import { MemberCard } from "../components/MemberCard";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

export default function MembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await api.get("/members");
      setMembers(response.data);
    };
    fetchMembers();
  }, []);

  return (
    <PageLayout title="Nossa Equipe" subtitle="Conheça mais sobre a gente">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </PageLayout>
  );
}

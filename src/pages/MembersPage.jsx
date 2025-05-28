import { useState, useEffect } from "react";
import { MemberCard } from "../components/MemberCard";
import api from "../services/api";

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
    <div className="min-h-screen bg-gray-100 pt-10 px-4 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-center pb-10">
        Nossa Equipe
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

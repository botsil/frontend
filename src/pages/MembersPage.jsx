import { MemberCard } from "../components/MemberCard";
import joao from "../assets/joao.jpg";
import maria from "../assets/maria.jpg";
import marcos from "../assets/marcos.jpg";

export default function MembersPage() {
  const members = [
    { id: 1, name: "João Silva", photo: joao },
    { id: 2, name: "Maria Souza", photo: maria },
    { id: 3, name: "Marcos Schlick", photo: marcos },
    { id: 4, name: "João Souza", photo: joao },
    { id: 5, name: "Maria Schlick", photo: maria },
    { id: 6, name: "Marcos Silva", photo: marcos },
    { id: 7, name: "João Schlick", photo: joao },
    { id: 8, name: "Maria Schlick", photo: maria },
  ];

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

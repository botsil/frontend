export function MemberCard({ member, isExpanded, onClick }) {
  return (
    <button
      className={`flex flex-col items-center transition-all duration-600 ${
        isExpanded ? "w-[25rem] h-[25rem]" : "w-40 h-40 md:w-80 md:h-80"
      }`}
      onClick={onClick}
    >
      <div className="flex-1 overflow-hidden rounded-lg shadow-lg hover:shadow-xl">
        <img
          src={member.photo}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isExpanded ? "scale-105" : "scale-100"
          }`}
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{member.name}</h3>
    </button>
  );
}

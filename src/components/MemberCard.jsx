export function MemberCard({ member, isExpanded, onMouseOver }) {
  return (
    <button
      className={`flex flex-col items-center transition-all duration-400 ${
        isExpanded ? "w-112 h-112" : "w-80 h-80"
      }`}
      onMouseOver={onMouseOver}
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

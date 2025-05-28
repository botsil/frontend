export function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center w-full max-w-[10rem] md:max-w-[20rem] aspect-square">
      <div className="flex-1 overflow-hidden rounded-lg shadow-lg hover:shadow-xl">
        <img
          src={member.photo_url}
          alt={member.name}
          className="w-full h-full object-cover scale-100"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{member.name}</h3>
    </div>
  );
}

import { UserCircleIcon } from "@heroicons/react/24/outline";

export function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center w-full max-w-[10rem] md:max-w-[20rem] aspect-square group">
      <div className="flex-1 w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl border border-slate-600 transition-all duration-300 group-hover:border-cyan-400">
        {member.photo_url ? (
          <img
            src={member.photo_url}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
            <UserCircleIcon className="h-16 w-16 text-cyan-400" />
          </div>
        )}
      </div>
      <h3 className="mt-2 text-lg font-semibold text-center transition-colors duration-300 group-hover:text-cyan-400">
        {member.name}
      </h3>
    </div>
  );
}

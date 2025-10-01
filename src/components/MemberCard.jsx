import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center w-full max-w-[10rem] md:max-w-[20rem] aspect-square group">
      <div className="relative flex-1 w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl border border-slate-600 transition-all duration-300 group-hover:border-cyan-400">
        {member.photo_url ? (
          <>
            <img
              src={member.photo_url}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-3">
              <div className="flex gap-2">
                {member.github_link && (
                  <a
                    href={member.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-1.5 rounded-full hover:scale-110 hover:bg-white transition-all duration-200"
                  >
                    <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
                  </a>
                )}
                {member.linkedin_link && (
                  <a
                    href={member.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-1.5 rounded-full hover:scale-110 hover:bg-white transition-all duration-200"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-5 h-5"
                    />
                  </a>
                )}
                {member.instagram_link && (
                  <a
                    href={member.instagram_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-1.5 rounded-full hover:scale-110 hover:bg-white transition-all duration-200"
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-5 h-5"
                    />
                  </a>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
            <UserCircleIcon className="h-16 w-16 text-cyan-400" />
          </div>
        )}
      </div>
      <h3 className="mt-2 text-xl font-semibold text-center transition-colors duration-300 group-hover:text-cyan-400">
        {member.name}
      </h3>
      <p className="text-lg text-slate-200 text-center">{member.role}</p>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function BotsilLogo({ className = "" }) {
  return (
    <Link
      to="/"
      className={`font-orbitron italic font-black text-3xl md:text-4xl bg-clip-text text-transparent ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #009C3B 0%, #FFCB00 30%, #FFFFFF 50%, #0038A8 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
    >
      BOTSIL
    </Link>
  );
}

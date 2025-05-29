export default function PageLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen pt-10 px-4 md:px-20">
      <div className="text-center pb-10">
        <h1 className="text-4xl md:text-6xl font-bold font-orbitron">
          {title}
        </h1>
        {subtitle && (
          <p className="font-orbitron text-lg md:text-2xl pt-5">
            <span
              className="font-bold"
              style={{
                background:
                  "linear-gradient(90deg, #009C3B 0%, #FFCB00 30%, #FFFFFF 50%, #0038A8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {subtitle}
            </span>
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
        {children}
      </div>
    </div>
  );
}

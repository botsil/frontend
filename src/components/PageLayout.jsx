export default function PageLayout({ title, children }) {
  return (
    <div className="min-h-screen pt-10 px-4 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-center pb-10">
        {title}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
        {children}
      </div>
    </div>
  );
}

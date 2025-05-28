export function DocumentCard({ title, documentUrl }) {
  return (
    <button
      onClick={() => window.open(documentUrl, "_blank")}
      className="w-full max-w-[10rem] md:max-w-[20rem] aspect-square flex flex-col items-center transition-transform duration-300 hover:scale-105"
    >
      <div className="flex-1 w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl bg-white">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-2xl font-bold">📄 {title}</span>
        </div>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </button>
  );
}

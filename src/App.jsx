import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="flex-1 pt-16">
        {" "}
        {}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

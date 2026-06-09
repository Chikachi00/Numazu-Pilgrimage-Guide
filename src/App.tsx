import { useState } from "react";
import { type AppPage } from "./components/layout/AppHeader";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { RoutesPage } from "./pages/RoutesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>("home");

  if (currentPage === "routes") {
    return <RoutesPage currentPage={currentPage} onNavigate={setCurrentPage} />;
  }

  if (currentPage === "about") {
    return <AboutPage currentPage={currentPage} onNavigate={setCurrentPage} />;
  }

  return <HomePage currentPage={currentPage} onNavigate={setCurrentPage} />;
}

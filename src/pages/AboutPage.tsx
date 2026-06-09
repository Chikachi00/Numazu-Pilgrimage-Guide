import { AppHeader, type AppPage } from "../components/layout/AppHeader";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

interface AboutPageProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

const techStack = [
  "React",
  "TypeScript",
  "Vite",
  "React Leaflet",
  "Leaflet",
  "OpenStreetMap",
  "localStorage",
  "Vercel",
];

const liveDemoUrl = "https://numazu-pilgrimage-guide.vercel.app/";
const githubUrl = "https://github.com/Chikachi00/Numazu-Pilgrimage-Guide";

export function AboutPage({ currentPage, onNavigate }: AboutPageProps) {
  return (
    <>
      <AppHeader currentPage={currentPage} onNavigate={onNavigate} />
      <main className="content-page about-page">
        <Card>
          <p className="eyebrow">Project Info</p>
          <h2>Numazu Pilgrimage Guide / 沼津圣地巡礼导航</h2>
          <p>
            A lightweight web pilgrimage guide for Love Live! Sunshine!! / Aqours fans visiting
            Numazu. It combines curated spots, map browsing, filters, search, and personal
            localStorage check-in states.
          </p>

          <div className="about-grid">
            <section>
              <h3>Why This Project</h3>
              <p>
                Numazu pilgrimage is closer to a real travel workflow than a simple checklist. This
                project focuses on fan-oriented route planning, a clean map experience, and personal
                visit tracking without adding backend complexity.
              </p>
            </section>

            <section>
              <h3>Tech Stack</h3>
              <div className="badge-row">
                {techStack.map((item) => (
                  <Badge key={item} tone="blue">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>

            <section>
              <h3>Data Source</h3>
              <p>
                Spot data lives in <code>src/data/spots.ts</code> and is manually organized by the
                author. The app does not scrape data, use a backend database, or sync to the cloud.
              </p>
            </section>

            <section>
              <h3>Copyright Notes</h3>
              <p>
                This is an unofficial fan-made tool. It does not use official images, character
                artwork, anime screenshots, or other copyrighted visual assets. Map tiles use
                OpenStreetMap with attribution preserved in the map UI.
              </p>
            </section>
          </div>

          <div className="about-links">
            <a className="button button-primary" href={liveDemoUrl} target="_blank" rel="noreferrer">
              View Vercel Demo
            </a>
            <a className="button" href={githubUrl} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        </Card>
      </main>
    </>
  );
}

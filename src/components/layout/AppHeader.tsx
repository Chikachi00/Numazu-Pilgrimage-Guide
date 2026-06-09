export type AppPage = "home" | "routes" | "about";

interface AppHeaderProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

const navItems: Array<{ page: AppPage; label: string }> = [
  { page: "home", label: "地图" },
  { page: "routes", label: "路线" },
  { page: "about", label: "关于" },
];

export function AppHeader({ currentPage, onNavigate }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">Numazu Pilgrimage Guide</p>
        <h1>沼津圣地巡礼导航</h1>
      </div>
      <nav className="app-nav" aria-label="主导航">
        {navItems.map((item) => (
          <button
            key={item.page}
            className={currentPage === item.page ? "is-active" : ""}
            type="button"
            onClick={() => onNavigate(item.page)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

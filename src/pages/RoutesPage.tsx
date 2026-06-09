import { AppHeader, type AppPage } from "../components/layout/AppHeader";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { routes } from "../data/routes";

interface RoutesPageProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

const difficultyLabels = {
  easy: "轻松",
  normal: "普通",
  packed: "紧凑",
};

export function RoutesPage({ currentPage, onNavigate }: RoutesPageProps) {
  return (
    <>
      <AppHeader currentPage={currentPage} onNavigate={onNavigate} />
      <main className="content-page">
        <div className="page-heading">
          <h2>人工推荐路线</h2>
          <p>第一阶段先预留轻量路线数据，后续可以把路线与地图联动。</p>
        </div>
        <div className="route-grid">
          {routes.map((route) => (
            <Card key={route.id} className="route-card">
              <div className="route-card-header">
                <h3>{route.title.zh}</h3>
                <Badge tone="blue">{difficultyLabels[route.difficulty]}</Badge>
              </div>
              <p>{route.description.zh}</p>
              <dl>
                <div>
                  <dt>预计时间</dt>
                  <dd>{route.estimatedHours} 小时</dd>
                </div>
                <div>
                  <dt>交通</dt>
                  <dd>{route.transport.zh}</dd>
                </div>
                <div>
                  <dt>提示</dt>
                  <dd>{route.tips.zh}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}

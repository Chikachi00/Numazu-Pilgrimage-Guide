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
];

export function AboutPage({ currentPage, onNavigate }: AboutPageProps) {
  return (
    <>
      <AppHeader currentPage={currentPage} onNavigate={onNavigate} />
      <main className="content-page about-page">
        <Card>
          <p className="eyebrow">Project Info</p>
          <h2>Numazu Pilgrimage Guide / 沼津圣地巡礼导航</h2>
          <p>
            这是一个面向 Love Live! Sunshine!! / Aqours 粉丝的沼津圣地巡礼 Web 工具，
            用地图、手写点位、筛选搜索和本地打卡状态，帮助用户更轻松地规划自己的巡礼路线。
          </p>

          <div className="about-grid">
            <section>
              <h3>为什么做</h3>
              <p>
                沼津巡礼更像一次真实旅行，而不只是地点清单。这个项目希望把粉丝视角、路线感、
                地图体验和个人记录放在一起，做成一个轻量但完整的作品集项目。
              </p>
            </section>

            <section>
              <h3>技术栈</h3>
              <div className="badge-row">
                {techStack.map((item) => (
                  <Badge key={item} tone="blue">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>

            <section>
              <h3>数据来源说明</h3>
              <p>
                点位数据存放在 <code>src/data/spots.ts</code>，由作者手动整理维护，不自动抓取，
                也不依赖后端数据库或云同步。
              </p>
            </section>

            <section>
              <h3>版权说明</h3>
              <p>
                本项目是非官方 fan-made 工具，不使用官方图片、角色图、动画截图或其他版权素材。
                地图使用 OpenStreetMap tile，并在地图 UI 中保留 attribution。
              </p>
            </section>
          </div>

          <a
            className="button button-primary about-github-link"
            href="https://github.com/Chikachi00/Numazu-Pilgrimage-Guide"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </Card>
      </main>
    </>
  );
}

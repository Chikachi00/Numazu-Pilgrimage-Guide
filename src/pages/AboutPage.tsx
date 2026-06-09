import { AppHeader, type AppPage } from "../components/layout/AppHeader";
import { Card } from "../components/ui/Card";

interface AboutPageProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

export function AboutPage({ currentPage, onNavigate }: AboutPageProps) {
  return (
    <>
      <AppHeader currentPage={currentPage} onNavigate={onNavigate} />
      <main className="content-page about-page">
        <Card>
          <h2>关于这个 Demo</h2>
          <p>
            Numazu Pilgrimage Guide 是一个面向沼津圣地巡礼的轻量 Web 工具，第一阶段专注地图、
            手写点位、筛选、搜索、打卡、收藏和想去列表。
          </p>
          <p>
            本项目不使用后端、不做登录、不抓取数据，也不使用官方图片或版权素材。点位信息由作者手动整理，
            适合作为 1-2 周内可完成的 MVP。
          </p>
        </Card>
      </main>
    </>
  );
}

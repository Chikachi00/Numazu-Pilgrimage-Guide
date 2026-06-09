import type { ReactNode } from "react";

interface AppShellProps {
  sidebar: ReactNode;
  map: ReactNode;
  detail: ReactNode;
}

export function AppShell({ sidebar, map, detail }: AppShellProps) {
  return (
    <main className="app-shell">
      <section className="sidebar-column">{sidebar}</section>
      <section className="map-column">{map}</section>
      <section className="detail-column">{detail}</section>
    </main>
  );
}

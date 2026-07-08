import { AppHeader } from "./app-header";
import { DesktopSidebar } from "./desktop-sidebar";
import { MobileHeader } from "./mobile-header";
import { MobileNavigation } from "./mobile-navigation";

export function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(135deg,rgba(104,71,255,0.12),transparent_30%),linear-gradient(180deg,#f8f9ff_0%,#eef2ff_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.96),rgba(255,255,255,0.42)_42%,transparent_72%)]" />

      <AppHeader />
      <MobileHeader />
      <DesktopSidebar />
      <MobileNavigation />

      <main className="relative z-10 h-screen overflow-y-auto px-4 pb-20 pt-24 md:px-8 md:pb-24 lg:pl-36 lg:pr-9 lg:pt-28">
        {children}
      </main>
    </div>
  );
}

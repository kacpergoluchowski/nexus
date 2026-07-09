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
    <div className="relative min-h-screen overflow-hidden bg-[#eef1f8] text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,#f9f9fd_0%,#f0f3f9_48%,#e9edf6_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_7%_3%,rgba(105,82,228,0.11),transparent_32%),radial-gradient(circle_at_94%_88%,rgba(68,137,210,0.075),transparent_36%),radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.82),transparent_46%)]" />

      <AppHeader />
      <MobileHeader />
      <DesktopSidebar />
      <MobileNavigation />

      <main className="relative z-10 h-screen overflow-y-auto px-4 pb-20 pt-24 md:px-8 md:pb-24 lg:pl-48 lg:pr-12 lg:pt-28 2xl:pl-40 2xl:pr-12">
        {children}
      </main>
    </div>
  );
}

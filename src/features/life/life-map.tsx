import { ChevronDown, Sparkles } from "lucide-react";
import { NexusLogo } from "@/features/app-shell/nexus-logo";
import { lifeAreas } from "./life-data";
import type { CSSProperties } from "react";
import type { LifeArea } from "./life-data";

function ProgressLine({ area }: { area: LifeArea }) {
  return (
    <span className="mt-2 block h-1 overflow-hidden rounded-full bg-[#e3e6f0]">
      <span
        className="block h-full rounded-full"
        style={{
          width: `${area.progress}%`,
          backgroundColor: area.color,
          boxShadow: `0 0 16px ${area.glow}`,
        }}
      />
    </span>
  );
}

function MapNode({ area }: { area: LifeArea }) {
  const Icon = area.icon;

  return (
    <article
      className={[
        "absolute left-[var(--map-x)] top-[var(--map-y)] z-20 w-[7.9rem] -translate-x-1/2 -translate-y-1/2 rounded-[18px] border border-white/60 bg-white/52 p-3 shadow-[0_16px_40px_rgba(43,50,93,0.08),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-2xl lg:left-[var(--map-desktop-x)] lg:top-[var(--map-desktop-y)]",
        area.hideOnMobileMap ? "hidden lg:block" : "",
        "lg:w-[8.35rem] lg:p-3",
      ].join(" ")}
      style={
        {
          "--map-x": `${area.mapPosition.mobile.x}%`,
          "--map-y": `${area.mapPosition.mobile.y}%`,
          "--map-desktop-x": `${area.mapPosition.desktop.x}%`,
          "--map-desktop-y": `${area.mapPosition.desktop.y}%`,
        } as CSSProperties
      }
    >
      <div className="flex items-center gap-2.5">
        <span
          className="grid size-7 shrink-0 place-items-center rounded-full shadow-[0_8px_20px_var(--area-glow),inset_0_1px_0_rgba(255,255,255,0.56)]"
          style={
            {
              "--area-glow": area.glow,
              background: `linear-gradient(145deg, ${area.color}, color-mix(in srgb, ${area.color} 74%, white))`,
            } as CSSProperties
          }
        >
          <Icon aria-hidden="true" className="size-[0.82rem] text-white" strokeWidth={1.9} />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-[0.72rem] font-medium text-[#070b22] lg:text-[0.73rem]">
            {area.label}
          </h3>
          <p className="hidden truncate text-[0.61rem] text-[#68708c] lg:block">
            {area.description}
          </p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="min-w-0 flex-1">
          <ProgressLine area={area} />
        </div>
        <span className="text-[0.66rem] tabular-nums text-[#4e5674]">{area.progress}%</span>
      </div>
    </article>
  );
}

function RadarGrid() {
  return (
    <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 lg:h-[23rem] lg:w-[23rem]">
      <div className="absolute inset-0 rounded-full border border-[#cfd4e6]/42" />
      <div className="absolute inset-[12%] rounded-full border border-[#cfd4e6]/42" />
      <div className="absolute inset-[24%] rounded-full border border-[#cfd4e6]/42" />
      <div className="absolute inset-[36%] rounded-full border border-[#cfd4e6]/42" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#c8cfe4]/50" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#c8cfe4]/50" />
      <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#c8cfe4]/50" />
      <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#c8cfe4]/50" />
      <div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/60 shadow-[0_18px_50px_rgba(104,71,255,0.16),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl lg:size-22">
        <NexusLogo className="size-12 lg:size-13" />
      </div>
    </div>
  );
}

export function LifeMap() {
  return (
    <section
      aria-labelledby="life-map-title"
      className="mt-5 rounded-[24px] border border-white/56 bg-white/36 p-4 shadow-[0_22px_70px_rgba(43,50,93,0.085),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-[28px] lg:mt-7 lg:min-h-[31rem] lg:w-full lg:p-5"
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 id="life-map-title" className="text-[0.98rem] font-medium text-[#070b22]">
            Your Life Map
          </h2>
          <p className="mt-1 hidden text-[0.76rem] text-[#596383] lg:block">
            The big picture of your life and where you&apos;re heading.
          </p>
        </div>
        <button className="flex h-8 items-center gap-1.5 rounded-[12px] bg-white/42 px-3 text-[0.72rem] font-normal text-[#202848] shadow-[inset_0_1px_0_rgba(255,255,255,0.76)] transition-colors hover:bg-white/58 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          <span className="hidden lg:inline">View:</span> All Areas
          <ChevronDown aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
        </button>
      </header>

      <div className="relative mx-auto mt-5 h-[27rem] max-w-[38rem] overflow-hidden lg:mt-3 lg:h-[24.5rem] lg:max-w-none">
        <RadarGrid />
        {lifeAreas.map((area) => (
          <MapNode key={area.label} area={area} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 rounded-[18px] bg-white/34 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
        <div className="flex min-w-0 items-center gap-3">
          <Sparkles aria-hidden="true" className="size-5 shrink-0 text-accent" strokeWidth={1.8} />
          <p className="text-[0.78rem] leading-relaxed text-[#4d5877]">
            <span className="font-medium text-[#101536]">Focus insight:</span> Your Learning and
            Career areas are your strongest drivers right now.
          </p>
        </div>
        <button className="hidden shrink-0 text-[0.76rem] font-medium text-accent transition-colors hover:text-accent-strong lg:block">
          See details
        </button>
      </div>
    </section>
  );
}

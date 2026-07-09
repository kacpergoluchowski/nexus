import { Plus } from "lucide-react";
import { lifeAreas } from "./life-data";
import type { CSSProperties } from "react";
import type { LifeArea } from "./life-data";

function LifeAreaIcon({ area }: { area: LifeArea }) {
  const Icon = area.icon;

  return (
    <span
      className="grid size-8 shrink-0 place-items-center rounded-full shadow-[0_8px_20px_var(--area-glow),inset_0_1px_0_rgba(255,255,255,0.55)] lg:size-7"
      style={
        {
          "--area-glow": area.glow,
          background: `linear-gradient(145deg, ${area.color}, color-mix(in srgb, ${area.color} 74%, white))`,
        } as CSSProperties
      }
    >
      <Icon aria-hidden="true" className="size-[0.92rem] text-white lg:size-[0.82rem]" strokeWidth={1.9} />
    </span>
  );
}

function ProgressBar({ area }: { area: LifeArea }) {
  return (
    <span className="block h-1 overflow-hidden rounded-full bg-[#e3e6f0]">
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

function MobileLifeAreaCard({ area }: { area: LifeArea }) {
  return (
    <article
      className={[
        "min-w-[5.45rem] rounded-[16px] border bg-white/42 p-2.5 text-center shadow-[0_10px_28px_rgba(43,50,93,0.055),inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-2xl",
        area.active ? "border-accent/55 ring-1 ring-accent/20" : "border-white/58",
      ].join(" ")}
    >
      <div className="flex justify-center">
        <LifeAreaIcon area={area} />
      </div>
      <h3 className="mt-2.5 truncate text-[0.73rem] font-normal text-[#070b22]">{area.label}</h3>
      <p className="mt-0.5 text-[0.68rem] font-normal text-[#68708c]">{area.progress}%</p>
      <div className="mt-2">
        <ProgressBar area={area} />
      </div>
    </article>
  );
}

function MobileAddLifeAreaCard() {
  return (
    <button className="flex min-w-[5.45rem] flex-col items-center justify-center rounded-[16px] border border-dashed border-accent/28 bg-white/24 p-2.5 text-center text-accent/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl transition-colors hover:border-accent/42 hover:bg-white/34 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
      <span className="grid size-8 place-items-center rounded-full bg-white/46 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <Plus aria-hidden="true" className="size-[0.95rem]" strokeWidth={1.9} />
      </span>
      <span className="mt-2.5 max-w-14 text-[0.72rem] font-normal leading-tight">
        Add Life Area
      </span>
    </button>
  );
}

function DesktopLifeAreaRow({ area }: { area: LifeArea }) {
  return (
    <article className="group flex items-center gap-2 rounded-[13px] px-2 py-1 transition-colors duration-200 hover:bg-white/40">
      <LifeAreaIcon area={area} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate text-[0.76rem] font-normal text-[#070b22]">{area.label}</h3>
          <span className="text-[0.7rem] font-normal tabular-nums text-[#68708c]">{area.progress}%</span>
        </div>
        <div className="mt-1">
          <ProgressBar area={area} />
        </div>
      </div>
    </article>
  );
}

export function LifeAreas() {
  return (
    <section
      aria-labelledby="life-areas-title"
      className="mt-5 [font-family:-apple-system,BlinkMacSystemFont,'SF_Pro_Text','SF_Pro_Display',var(--font-geist-sans),system-ui,sans-serif] lg:mt-7 lg:w-[21.5rem] lg:rounded-[22px] lg:border lg:border-white/54 lg:bg-white/34 lg:p-3 lg:shadow-[0_18px_56px_rgba(43,50,93,0.075),inset_0_1px_0_rgba(255,255,255,0.84)] lg:backdrop-blur-[26px] 2xl:w-full"
    >
      <header className="hidden items-center justify-between gap-4 lg:flex">
        <h2 id="life-areas-title" className="text-[0.95rem] font-normal text-[#070b22]">
          Life Areas
        </h2>
        <button className="rounded-full px-2 py-1 text-[0.74rem] font-normal text-accent/85 transition-colors hover:bg-white/42 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          Edit
        </button>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
        {lifeAreas.map((area) => (
          <MobileLifeAreaCard key={area.label} area={area} />
        ))}
        <MobileAddLifeAreaCard />
      </div>

      <div className="mt-3 hidden space-y-1 lg:block">
        {lifeAreas.map((area) => (
          <DesktopLifeAreaRow key={area.label} area={area} />
        ))}
      </div>

      <button className="mt-3 hidden h-6 w-full items-center justify-center gap-1.5 rounded-full text-[0.74rem] font-normal text-accent/90 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:flex">
        <Plus aria-hidden="true" className="size-3.5" strokeWidth={1.9} />
        Add Life Area
      </button>
    </section>
  );
}

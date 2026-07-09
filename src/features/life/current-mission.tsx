import { ArrowRight, CalendarDays, Clock3, Route, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function MissionDetail({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/44 text-[#253057] shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]">
          <Icon aria-hidden="true" className="size-[0.88rem]" strokeWidth={1.8} />
        </span>
        <p className="truncate text-[0.74rem] font-normal text-[#596383]">{label}</p>
      </div>
      <p className="whitespace-nowrap text-right text-[0.76rem] font-medium text-[#101536]">
        {value}
      </p>
    </div>
  );
}

export function CurrentMission() {
  return (
    <aside
      aria-labelledby="current-mission-title"
      className="hidden rounded-[24px] border border-white/56 bg-white/36 p-5 shadow-[0_22px_70px_rgba(43,50,93,0.085),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-[28px] 2xl:block"
    >
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="grid size-6 place-items-center rounded-full bg-accent/10 text-accent">
            <Target aria-hidden="true" className="size-3.5" strokeWidth={2} />
          </span>
          <h2 id="current-mission-title" className="text-[0.98rem] font-medium text-[#070b22]">
            Current Mission
          </h2>
        </div>
        <button className="rounded-full px-2 py-1 text-[0.74rem] font-normal text-accent/90 transition-colors hover:bg-white/42 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          Change
        </button>
      </header>

      <div className="mt-5 rounded-[20px] bg-white/30 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
        <p className="text-[0.68rem] font-medium uppercase tracking-normal text-accent">
          Primary Mission
        </p>
        <h3 className="mt-3 text-[1.02rem] font-semibold leading-tight text-[#101536]">
          Build Nexus MVP
        </h3>
        <p className="mt-3 max-w-[15rem] text-[0.76rem] leading-relaxed text-[#596383]">
          Create the first successful version of Nexus and get early users.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#e2e6f1]">
            <span className="block h-full w-[58%] rounded-full bg-accent shadow-[0_0_18px_rgba(105,71,255,0.35)]" />
          </span>
          <span className="text-[0.72rem] font-medium tabular-nums text-[#202848]">58%</span>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <MissionDetail icon={CalendarDays} label="Target" value="30 June 2025" />
        <MissionDetail icon={Clock3} label="Time remaining" value="23 days" />
        <MissionDetail icon={Route} label="Progress" value="58% complete" />
      </div>

      <button className="mt-6 flex h-10 w-full items-center justify-center gap-2 rounded-[16px] bg-white/28 text-[0.78rem] font-medium text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.76)] transition-colors hover:bg-white/42 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
        View full mission plan
        <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.8} />
      </button>
    </aside>
  );
}

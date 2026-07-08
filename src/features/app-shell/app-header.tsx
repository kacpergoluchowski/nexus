import { Bell, ChevronDown, Command, Search } from "lucide-react";
import { NexusLogo } from "./nexus-logo";

export function AppHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 hidden h-20 px-8 md:block">
      <div className="relative flex h-full items-center justify-between">
        <a
          href="/dashboard"
          className="flex w-fit items-center gap-3.5 text-foreground"
          aria-label="Nexus dashboard"
        >
          <NexusLogo className="size-9 shrink-0" />
          <span className="hidden text-[1.02rem] font-semibold tracking-[0.34em] sm:block">
            NEXUS
          </span>
        </a>

        <form className="absolute left-1/2 hidden h-12 w-[min(42vw,34rem)] -translate-x-1/2 items-center gap-3 rounded-[18px] border border-white/74 bg-white/68 px-4 text-muted-foreground shadow-[0_18px_56px_rgba(45,54,102,0.11)] backdrop-blur-2xl md:flex">
          <Search
            aria-hidden="true"
            className="size-[19px] text-[#334168]"
            strokeWidth={1.7}
          />
          <label className="sr-only" htmlFor="ask-nexus">
            Ask Nexus
          </label>
          <input
            id="ask-nexus"
            type="search"
            placeholder="Ask Nexus anything..."
            className="min-w-0 flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-[#687195]"
          />
          <kbd className="flex h-8 items-center gap-1 rounded-xl bg-white/75 px-2.5 text-xs font-semibold text-[#2a3156] shadow-sm ring-1 ring-surface-border">
            <Command aria-hidden="true" className="size-3.5" strokeWidth={1.8} />K
          </kbd>
        </form>

        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="relative grid size-11 place-items-center rounded-2xl text-[#111936] transition hover:bg-white/62"
          >
            <Bell aria-hidden="true" className="size-5" strokeWidth={1.7} />
            <span className="absolute right-2.5 top-2.5 size-2.5 rounded-full bg-accent ring-2 ring-white" />
          </button>

          <button
            type="button"
            className="group flex min-h-14 items-center rounded-2xl py-1.5 pl-1.5 pr-2 transition-colors hover:bg-white/48"
            aria-label="Open account menu"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#171a32_20%,#7b6258_58%,#d8c4b1)] text-sm font-semibold text-white shadow-[0_8px_22px_rgba(22,26,55,0.16)]">
              K
            </span>
            <span className="ml-3 hidden min-w-[72px] text-left md:block">
              <span className="block text-[0.92rem] font-semibold leading-[1.2rem] text-foreground">
                Kacper
              </span>
              <span className="mt-0.5 block text-xs font-medium leading-4 text-[#667092]">
                Pro Plan
              </span>
            </span>
            <ChevronDown
              aria-hidden="true"
              className="ml-4 hidden size-4 text-[#445071] transition-transform group-hover:translate-y-0.5 md:block"
              strokeWidth={1.6}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

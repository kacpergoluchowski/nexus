import { CurrentMission } from "@/features/life/current-mission";
import { LifeAreas } from "@/features/life/life-areas";
import { LifeMap } from "@/features/life/life-map";

const lifeSections = ["Life Map", "Goals", "Milestones", "Habits", "Reviews", "Insights"];

export default function LifePage() {
  return (
    <section aria-labelledby="life-page-title" className="min-h-full">
      <header className="2xl:mx-auto 2xl:grid 2xl:w-[min(100%,102rem)] 2xl:grid-cols-[21.5rem_minmax(0,57rem)_21.5rem] 2xl:items-end 2xl:gap-4">
        <div>
          <h1
            id="life-page-title"
            className="text-[1.75rem] font-semibold leading-tight text-[#090d29] lg:text-[2rem]"
          >
            Life
          </h1>
          <p className="mt-1.5 text-[0.8125rem] font-normal text-[#596383] lg:text-[0.9375rem]">
            Your life. Organized. Your future. Designed.
          </p>
        </div>

        <nav
          aria-label="Life sections"
          className="mt-6 flex gap-8 overflow-x-auto pb-1 text-[0.85rem] font-medium text-[#202848] [-ms-overflow-style:none] [scrollbar-width:none] lg:mt-7 lg:gap-11 lg:text-[0.86rem] 2xl:col-start-2 2xl:mt-0 2xl:justify-center [&::-webkit-scrollbar]:hidden"
        >
          {lifeSections.map((section) => {
            const isActive = section === "Life Map";

            return (
              <button
                key={section}
                type="button"
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative h-8 shrink-0 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                  isActive ? "font-semibold text-accent" : "text-[#202848]/86",
                ].join(" ")}
              >
                {section}
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-accent shadow-[0_4px_14px_rgba(104,71,255,0.28)]" />
                ) : null}
              </button>
            );
          })}
        </nav>
      </header>

      <div className="lg:grid lg:grid-cols-[21.5rem_minmax(0,45.3125rem)] lg:items-start lg:gap-4 2xl:grid-cols-[21.5rem_minmax(0,57rem)_21.5rem] 2xl:justify-center">
        <LifeAreas />
        <LifeMap />
        <div className="mt-7 hidden 2xl:block">
          <CurrentMission />
        </div>
      </div>
    </section>
  );
}

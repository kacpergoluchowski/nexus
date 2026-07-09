import { CurrentMission } from "@/features/life/current-mission";
import { LifeAreas } from "@/features/life/life-areas";
import { LifeMap } from "@/features/life/life-map";

export default function LifePage() {
  return (
    <section aria-labelledby="life-page-title" className="min-h-full">
      <header>
        <h1
          id="life-page-title"
          className="text-[1.75rem] font-semibold leading-tight text-[#090d29] lg:text-[2rem]"
        >
          Life
        </h1>
        <p className="mt-1.5 text-[0.8125rem] font-normal text-[#596383] lg:text-[0.9375rem]">
          Your life. Organized. Your future. Designed.
        </p>
      </header>

      <div className="lg:grid lg:grid-cols-[21.5rem_minmax(0,45.3125rem)] lg:items-start lg:gap-4 2xl:grid-cols-[minmax(22.5rem,1fr)_minmax(42rem,48rem)_minmax(22.5rem,1fr)]">
        <LifeAreas />
        <LifeMap />
        <div className="mt-7 hidden 2xl:block">
          <CurrentMission />
        </div>
      </div>
    </section>
  );
}

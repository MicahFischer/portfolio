import { ProblemCard } from "@/components/problem-card";
import { Reveal } from "@/components/reveal";

export function ProblemGrid({
  eyebrow,
  title,
  points,
}: {
  eyebrow: string;
  title: string;
  points: { title: string; body: string }[];
}) {
  return (
    <div className="flex flex-col gap-8 pt-[100px] pb-[100px]">
      <div className="site-width">
        <div className="flex flex-col items-start gap-2.5">
          <Reveal>
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="heading text-[36px] text-nowrap text-foreground max-md:text-wrap">
              {title}
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="site-width">
        <ul className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <ProblemCard
              key={point.title}
              index={index}
              heading={point.title}
              point={point.body}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

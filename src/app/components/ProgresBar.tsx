import AnimatedSection from "./AnimatedSection";

export const ProgressBar = ({
  percentage = 45,
  skill,
}: {
  percentage: number;
  skill: string;
}) => {
  const validPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <AnimatedSection direction="right">
      <div className="mb-0.5 flex justify-between text-xs font-semibold uppercase text-slate-900">
        <span>{skill}</span>
        <i>{validPercentage}%</i>
      </div>
      <div className="h-3 w-full overflow-hidden bg-slate-200">
        <div
          className="bg-secondary-200 h-full"
          style={{ width: `${validPercentage}%` }}
        />
      </div>
    </AnimatedSection>
  );
};

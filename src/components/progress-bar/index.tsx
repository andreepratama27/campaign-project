import cn from "classnames";
import "./progress-bar.scss";

interface Props {
  percentage: number;
}

export default function ProgressBar({ percentage }: Props) {
  const progressCount = Math.ceil(percentage * 100);

  return (
    <progress
      data-testid="progress-bar"
      value={progressCount}
      max="100"
      className={cn("progress-bar", {
        "progress-bar--full": progressCount >= 100,
      })}
    />
  );
}

import type { FC } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { sadCountSelector } from "./selectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = () => {
  const sadCount = useSelector(sadCountSelector);

  return (
    <div className="bg-orange-500 px-8 py-4">
      You were sad {sadCount} times
    </div>
  );
};

export default memo(SadTracker);

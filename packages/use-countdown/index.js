import { useState } from "react";
import useInterval from "react-use/lib/useInterval";
import useBoolean from "react-use/lib/useBoolean";

export default function({
  initTime,
  delay = 1000,
  limit = 0,
  onComplete = Function.prototype,
  step = 1000
}) {
  const [timeInMs, setTimeInMs] = useState(initTime);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      setTimeInMs(timeInMs - step);
    },
    isRunning ? delay : null
  );

  if (timeInMs <= limit) {
    setTimeInMs(0);
    onComplete();
    if (isRunning) toggleIsRunning(false);
  }

  return timeInMs;
}

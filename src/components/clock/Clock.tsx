// Clock.js
import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: any) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="text-4xl font-bold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900  w-full h-full text-center p-4 grid items-center content-center rounded-xl">
      {formatTime(currentTime)}
    </div>
  );
};

export default Clock;

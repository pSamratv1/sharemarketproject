import React, { useEffect, useState } from "react";
import CardSection from "../CardSection";
import dayjs from "dayjs";

const Summary = ({ initialTime }) => {
  const [currentTime, setCurrentTime] = useState(dayjs(initialTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => prevTime.add(1, "second"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <CardSection>
      <div className="flex w-full h-auto py-2 justify-between px-2">
        <div className="text-2xl font-bold">Summary</div>
        <div className="flex items-center text-blue-400 font-semibold text-md">
          {currentTime.format("MMM DD")} | {currentTime.format("HH:mm A")}
        </div>
      </div>
    </CardSection>
  );
};

export default Summary;

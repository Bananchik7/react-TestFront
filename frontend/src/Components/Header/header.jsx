import React, { useState, useEffect } from "react";

export default function Header() {
  const [seconds, setSeconds] = useState(5);
  const [minutes, setMinutes] = useState(0);
  const [color, setColor] = useState("#FD4D35");

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 10 && minutes >= 0) {
        setSeconds(seconds - 1);
      } else if (seconds <= 10 && seconds > 1 && minutes > -1) {
        setSeconds("0" + (seconds - 1));
      } else if (seconds <= 0 && minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else if (minutes <= 0 && seconds <= 1) {
        setSeconds("0" + (seconds - 1));
        setSeconds("0" + 0);
        setMinutes(0);
        setColor("#01B9C5");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [color, minutes, seconds]);

  return (
    <header className="z-0 flex bg-[#FFFFFF] h-[10%]">
      <div className="ml-[35%] mt-[1.3%] text-2xl font-all font-bold">
        Скидка действует:
      </div>
      <div>
        <div
          style={{ color: color }}
          className="flex ml-[25%] mt-[3%] text-[280%]  font-time font-bold"
        >
          <p>0{minutes}</p>
          <p className="ml-[10%]">:</p>
          <p className="ml-[10%]">{seconds}</p>
        </div>
        <div className="flex ml-[25%] mt-[-25%] text-[#818798] font-all font-bold ">
          <p className="ml-[-7%]">минут</p>
          <p className="ml-[20%]">секунд</p>
        </div>
      </div>
    </header>
  );
}

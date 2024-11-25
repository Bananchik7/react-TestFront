import React, { useState, useEffect } from "react";
import Price from "./Price.jsx";
import Agreement from "./Agreement.jsx";
import ButtonSale from "./ButtonSale.jsx";
import Header from "../Header/Header.jsx";

export default function Main() {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(1);
  const [visibleOld, setVisibleOld] = useState("none");
  const [visibleNew, setVisibleNew] = useState("flex");
  const [color, setColor] = useState("#FD4D35");

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 10 && minutes >= 0) {
        setSeconds(seconds - 1);
      } else if (seconds <= 10 && seconds >= 1 && minutes > -1) {
        setSeconds("0" + (seconds - 1));
      } else if (seconds <= 0 && minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else if (minutes <= 0 && seconds <= 1) {
        setSeconds("0" + (seconds - 1));
        setSeconds("0" + 0);
        setMinutes(0);
        setColor("#01B9C5");
        setVisibleOld("flex");
        setVisibleNew("none");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [color, minutes, seconds]);

  return (
    <>
      <Header minutes={minutes} seconds={seconds} color={color} />
      <main className="z-0 bg-[#F5F7F7] pb-[6%] pt-[1.5%] ">
        <p className="text-[220%] text-[#2D3242] ml-[20%] tracking-wider font-title">
          ВЫБЕРИТЕ ПОДХОДЯЩИЙ ТАРИФНЫЙ ПЛАН
        </p>
        <div className="flex mt-[2%]">
          <aside className="w-[45%]">
            <div className="w-[65%] ml-[25%] mt-[10%]">
              <img
                className="w-[100%] h-[100%]"
                src="./img.png"
                alt="img"
              ></img>
            </div>
          </aside>
          <article className="w-[40%] ml-[3%]">
            <Price visibleNew={visibleNew} visibleOld={visibleOld} />
            <p className="m-[0.5%] mt-[3%] text-[110%] font-all font-bold ">
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
            <Agreement />
            <ButtonSale />
            <p className="font-all">
              Нажимая «Купить», Пользователь соглашается на автоматическое
              списание денежных средств по истечению купленного периода.
              Дальнейшие списания по тарифам участвующим в акции осуществляются
              по полной стоимости согласно оферте.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

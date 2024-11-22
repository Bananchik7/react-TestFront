import { useEffect, useState } from "react";
import ButtonPopup from "./ButtonPopup";
import CheckPopup from "./CheckPopup";
import { list } from "../../Database/test-list.js";

export default function Popup() {
  const [visible, setVisible] = useState("none");
  const [time, setTime] = useState(1000);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time >= 0) {
        setTime(time - 1);
        if (time === 0) {
          setVisible("block");
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time, visible]);

  return (
    <>
      <div
        style={{ display: visible }}
        className=" z-1 fixed w-[100%] h-[100%]  bg-black/50 overflow-auto top-0 left-0"
      >
        <div className="z-2 absolute w-[54%] mx-[23%] my-[10%] mt-[3%] bg-[#F5F7F7]">
          <p className="w-[27%] ml-[5%] p-[0.5%] pl-[1.5%] bg-[#01B9C5] text-white font-all font-bold text-[110%]">
            горящее предложение
          </p>
          <div
            onClick={() => setVisible("none")}
            className="w-[3%] ml-[94.5%] mt-[-2%] hover:rotate-45 cursor-pointer"
          >
            <img className="w-[100%] " src="./close.png" alt="close" />
          </div>
          <div className="flex ml-[10%] mt-[2.5%] font-title text-[200%] text-[#12191D]">
            <p>НЕ УПУСТИ СВОЙ</p>
            <p className="text-[#01B9C5]">&ensp;ПОСЛЕДНИЙ ШАНС</p>
          </div>
          <div className="flex ml-[23%] mt-[2%] text-[140%] font-all font-bold text-[#2D3242]">
            <p>Мы знаем, как трудно начать..</p>
            <p className="font-price text-[#12191D]">&ensp;Поэтому!</p>
          </div>
          <div className="flex w-[52%] ml-[23%] mt-[1%] px-[3%] py-[2%] border border-[#01B9C5] border-2 rounded-[40px] font-price text-[130%] leading-5">
            <p>Дарим скидку для</p>
            <p className="text-[#01B9C5]">&ensp;лёгкого старта 🏃‍♂️</p>
          </div>
          <p className="ml-[7%] mt-[5%] font-all font-bold text-[135%]">
            Посмотри, что мы для тебя приготовили 🔥
          </p>
          <div className="flex ml-[3%]">
            <CheckPopup {...list[8]} old="./old_price.png" sale="./sale.png" />
            <CheckPopup
              {...list[9]}
              old="./old_price-2.png"
              sale="./sale-2.png"
            />
            <CheckPopup
              {...list[10]}
              old="./old_price-3.png"
              sale="./sale-3.png"
            />
          </div>
          <ButtonPopup />
        </div>
      </div>
    </>
  );
}

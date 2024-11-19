import ButtonPopup from "./ButtonPopup";
import CheckPopup from "./CheckPopup";
import { list } from "../../Database/test-list.js";

export default function Popup() {
  return (
    <>
      <div className=" z-1 fixed w-[100%] h-[100%]  bg-black/50 overflow-auto top-0 left-0">
        <div className="z-2 absolute w-[60%] h-[50%] mx-[20%] my-[15%] bg-[#F5F7F7]">
          <p className="w-[29%] ml-[6%] p-[0.5%] pl-[2%] bg-[#01B9C5] text-white font-all font-bold text-[130%]">
            горящее предложение
          </p>
          <div className="w-[3%] ml-[94.5%] mt-[-2%]">
            <img className="w-[100%]" src="./close.png" alt="close" />
          </div>
          <p className="flex ml-[11%] mt-[2.5%] font-title text-[220%] text-[#12191D]">
            НЕ УПУСТИ СВОЙ<p className="text-[#01B9C5]">&ensp;ПОСЛЕДНИЙ ШАНС</p>
          </p>
          <p className="flex ml-[17%] mt-[2%] text-[190%] font-all font-bold text-[#2D3242]">
            Мы знаем, как трудно начать..
            <p className="font-price text-[#12191D]">&ensp;Поэтому!</p>
          </p>
          <p className="flex w-[64%] ml-[17%] mt-[1%] px-[3%] py-[0.8%] border border-[#01B9C5] border-2 rounded-[40px] font-price text-[180%]">
            Дарим скидку для
            <p className="text-[#01B9C5]">&ensp;лёгкого старта 🏃‍♂️</p>
          </p>
          <p className="ml-[7%] mt-[5%] font-all font-bold text-[180%]">
            Посмотри, что мы для тебя приготовили 🔥
          </p>
          <div className="flex ml-[7%]">
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

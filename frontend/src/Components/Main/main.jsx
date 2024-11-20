import Price from "./Price.jsx";
import Agreement from "./Agreement.jsx";
import ButtonSale from "./ButtonSale.jsx";

export default function Main() {
  return (
    <main className="z-0 bg-[#F5F7F7] pb-[6%] pt-[1.5%] ">
      <p className="text-[220%] text-[#2D3242] ml-[20%] tracking-wider font-title">
        ВЫБЕРИТЕ ПОДХОДЯЩИЙ ТАРИФНЫЙ ПЛАН
      </p>
      <div className="flex mt-[2%]">
        <aside className="w-[45%]">
          <div className="w-[65%] ml-[25%] mt-[10%]">
            <img className="w-[100%] h-[100%]" src="./img.png" alt="img"></img>
          </div>
        </aside>
        <article className="w-[40%] ml-[3%]">
          <Price />
          <p className="m-[0.5%] mt-[3%] text-[125%] font-all font-bold ">
            Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
            чем за 1 месяц
          </p>
          <Agreement />
          <ButtonSale />
          <p className="font-all">
            Нажимая «Купить», Пользователь соглашается на автоматическое
            списание денежных средств по истечению купленного периода.
            Дальнейшие списания по тарифам участвующим в акции осуществляются по
            полной стоимости согласно оферте.
          </p>
        </article>
      </div>
    </main>
  );
}

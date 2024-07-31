import Price from "../Price/Price.jsx";

export default function Main() {
  return (
    <main className="bg-[#F5F7F7] h-[1115px] pt-[1.5%]">
      <p className="font-extrabold text-[175%] text-[#2D3242] ml-[25%] tracking-wider">
        ВЫБЕРИТЕ ПОДХОДЯЩИЙ ТАРИФНЫЙ ПЛАН
      </p>
      <div className="flex">
        <aside className="w-[50%]">
          <div className="w-[65%] ml-[22%] mt-[13%]">
            <img className="w-[100%] h-[100%]" src="./img.png" alt="img"></img>
          </div>
        </aside>
        <article>
          <Price />
        </article>
      </div>
    </main>
  );
}

import Price from "../Price/price";

export default function Main() {
  return (
    <main className="bg-[#F5F7F7] h-[900px] pt-[1.5%]">
      <p className="font-extrabold text-[175%] text-[#2D3242] ml-[25%] tracking-wider">
        ВЫБЕРИТЕ ПОДХОДЯЩИЙ ТАРИФНЫЙ ПЛАН
      </p>
      <aside className="w-[50%]">
        <div className="w-[50%] h-[100%] ml-[25%] mt-[13%]">
          <img className="w-[100%] h-[100%]" src="./img.png" alt="img"></img>
        </div>
      </aside>
      <article>
        <Price />
      </article>
    </main>
  );
}

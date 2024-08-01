export default function Header() {
  return (
    <header className="flex bg-[#FFFFFF] h-20">
      <div className="ml-[35%] mt-[1%] text-xl font-all font-bold">
        Скидка действует:
      </div>
      <div>
        <div className="flex ml-[15%] mt-[6%] text-[#FD4D35] text-4xl font-time font-bold">
          <p>00</p>
          <p className="ml-[10%]">:</p>
          <p className="ml-[10%]">00</p>
        </div>
        <div className="flex ml-[17%] text-[#818798] font-all font-bold">
          <p>минут</p>
          <p className="ml-[27%]">секунд</p>
        </div>
      </div>
    </header>
  );
}

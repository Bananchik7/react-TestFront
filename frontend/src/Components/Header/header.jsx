export default function Header() {
  return (
    <header className="z-0 flex bg-[#FFFFFF] h-[10%]">
      <div className="ml-[35%] mt-[1.3%] text-2xl font-all font-bold">
        Скидка действует:
      </div>
      <div>
        <div className="flex ml-[25%] mt-[6%] text-[#FD4D35] text-[280%] font-time font-bold">
          <p>00</p>
          <p className="ml-[10%]">:</p>
          <p className="ml-[10%]">00</p>
        </div>
        <div className="flex ml-[25%] mt-[-25%] text-[#818798] font-all font-bold ">
          <p className="ml-[-7%]">минут</p>
          <p className="ml-[20%]">секунд</p>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <header className="flex h-20">
      <div className="ml-[35%] mt-[1%] text-xl font-medium">
        Скидка действует:
      </div>
      <div>
        <div className="flex ml-[15%] mt-[6%] text-[#FD4D35] text-4xl font-sans">
          <p>00</p>
          <p className="ml-[10%]">:</p>
          <p className="ml-[10%]">00</p>
        </div>
        <div className="flex ml-[15%] text-[#818798]">
          <p>минут</p>
          <p className="ml-[25%]">секунд</p>
        </div>
      </div>
    </header>
  );
}

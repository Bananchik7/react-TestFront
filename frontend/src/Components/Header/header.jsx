export default function Header({ seconds, minutes, color }) {
  return (
    <>
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
    </>
  );
}

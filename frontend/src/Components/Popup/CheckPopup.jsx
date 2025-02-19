export default function CheckPopup({
  name,
  price,
  old,
  sale,
  isActive,
  onClick,
  onChange,
  checked,
}) {
  return (
    <button
      className={
        isActive
          ? "w-[40%] border rounded-2xl mx-[1%] mt-[2%] p-[3%] pb-[1%] bg-[#01B9C5]/10 border-[#01B9C5]"
          : "w-[40%] bg-[#FFFFFF] border border-[#D3D6DD] rounded-2xl mx-[1%] mt-[2%] p-[3%] pb-[1%] hover:bg-[#01B9C5]/10  hover:border-[#01B9C5] cursor-pointer"
      }
      onClick={onClick}
    >
      <div className="flex">
        <p className="text-[#2D3242] text-[170%] font-name font-bold">{name}</p>
        <input
          className={"w-[12%] ml-[42%] mt-[-7%]  cursor-pointer"}
          type="radio"
          name="popup"
          checked={checked}
        ></input>
      </div>
      <div className="w-[30%]">
        <img src={old} alt="" className="w-[100%]" />
      </div>
      <hr className="w-[85%] mt-[10%] ml-[5%]"></hr>
      <div className="flex mt-[13%] ml-[-2%]">
        <div className="mt-[-2%]">
          <img src={sale} alt="" className="w-[100%]" />
        </div>
        <p className="w-[50%] text-[280%] font-price font-black">
          {price + "₽"}
        </p>
      </div>
    </button>
  );
}

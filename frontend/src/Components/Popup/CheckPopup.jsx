export default function CheckPopup({ name, price, old, sale }) {
  return (
    <div className=" bg-[#FFFFFF] border border-[#D3D6DD] rounded-2xl mr-[2%] mt-[2%] p-[3%] ">
      <div className="flex">
        <p className="text-[#2D3242] text-[190%] font-name font-bold">{name}</p>
        <input className="w-[10%] ml-[40%] mt-[-6%]" type="radio"></input>
      </div>
      <div className="w-[35%]">
        <img src={old} alt="" className="w-[100%]" />
      </div>
      <div className="flex mt-[15%]">
        <p className="text-[340%] font-price font-black">{price + "₽"}</p>
        <div className="w-[45%] ml-[1%] mt-[-2%]">
          <img src={sale} alt="" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
}

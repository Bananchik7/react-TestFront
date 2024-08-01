export default function CheckPrice({ name, price, text }) {
  return (
    <div className=" bg-[#FFFFFF] border border-[#D3D6DD] rounded-2xl mr-[2%] p-[3%] pl-[4%] pt-[6%] pr-[5%]">
      <p className="text-[#687078] text-[190%] font-name font-bold">{name}</p>
      <p className="text-[270%] font-price font-black">{price + "₽"}</p>
      <p className="text-[#2F4353] text-[100%] text-center font-all font-bold ml-[1%] mt-[15%]">
        {text}
      </p>
    </div>
  );
}

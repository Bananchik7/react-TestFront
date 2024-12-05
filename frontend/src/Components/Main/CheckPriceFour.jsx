export default function CheckPriceFour({
  name,
  price,
  text,
  onClick,
  isActive,
}) {
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <div
      className={
        isActive
          ? "flex border rounded-2xl mr-[0.8%] mt-[5%] bg-[#01B9C5]/10 border-[#01B9C5]"
          : "flex bg-[#FFFFFF] border border-[#D3D6DD] rounded-2xl mr-[0.8%] mt-[5%] hover:bg-[#01B9C5]/10  hover:border-[#01B9C5] cursor-pointer"
      }
      onClick={onClick}
    >
      <p className="text-[190%] font-name font-bold m-[6%] mt-[5%] mr-[3%]">
        {name}
      </p>
      <p className="text-[240%] font-price font-black mt-[2.5%] mr-[2%]">
        {numberWithSpaces(price) + "₽"}
      </p>
      <p className="w-[35%] text-[#2F4353] text-[90%] font-all font-bold m-[4%] pr-[4.7%]">
        {text}
      </p>
    </div>
  );
}

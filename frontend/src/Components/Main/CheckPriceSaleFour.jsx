export default function CheckPriceSaleFour({ name, price, text, old, img }) {
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <>
      <div className="flex bg-[#FFFFFF] border border-[#D3D6DD] rounded-2xl mr-[0.8%] mt-[7%] hover:bg-[#01B9C5]/10  hover:border-[#01B9C5] cursor-pointer">
        <p className="text-[190%] font-name font-bold m-[6%] mt-[5%] mr-[3%]">
          {name}
        </p>
        <div>
          <p className=" ml-[5%] text-[260%] font-price font-black mt-[11%]">
            {price + "₽"}
          </p>
          <p className="mt-[-12%] ml-[30%] text-[140%] text-[#95979F]">
            <strike>{numberWithSpaces(old) + "₽"}</strike>
          </p>
        </div>
        <p className="w-[38%] ml-[8%] mt-[4%] text-[#2F4353] text-[100%] font-all font-bold">
          {text}
        </p>
        <div>
          <img className=" ml-[-20%] mr-[-10%] mt-[-50%]" src={img} alt="" />
        </div>
      </div>
    </>
  );
}

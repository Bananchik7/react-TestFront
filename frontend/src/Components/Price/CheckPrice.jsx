export default function CheckPrice({ name, price, text }) {
  return (
    <div className="bg-[#FFFFFF] border border-[#D3D6DD] rounded-2xl mr-[0.5%]">
      <p className="text-[#687078] text-[140%]">{name} </p>
      <p className="text-[200%] font-extrabold">{price + "₽"}</p>
      <p className="text-[#2F4353]">{text}</p>
    </div>
  );
}

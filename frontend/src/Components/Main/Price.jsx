import { list } from "../../Database/test-list.js";
import CheckPrice from "./CheckPrice.jsx";
import CheckPriceFour from "./CheckPriceFour.jsx";

export default function Price() {
  return (
    <>
      <div className="flex mt-[14%]">
        <CheckPrice {...list[4]} text="Чтобы просто начать 👍🏻" />
        <CheckPrice {...list[5]} text="Привести тело впорядок 💪🏻" />
        <CheckPrice {...list[6]} text="Изменить образ жизни 🔥" />
      </div>
      <CheckPriceFour
        {...list[7]}
        text="Всегда быть в форме и поддерживать своё здоровье ⭐️"
      />
    </>
  );
}

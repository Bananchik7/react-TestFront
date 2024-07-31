import { list } from "../../Database/test-list.js";
import CheckPrice from "./CheckPrice.jsx";

export default function Price() {
  return (
    <>
      <div className="flex mt-[13%]">
        <CheckPrice {...list[0]} text="Чтобы просто начать 👍🏻" />
        <CheckPrice {...list[1]} text="Привести тело впорядок 💪🏻" />
        <CheckPrice {...list[2]} text="Изменить образ жизни 🔥" />
      </div>
      <CheckPrice
        {...list[3]}
        text="Всегда быть в форме и поддерживать своё здоровье ⭐️"
      />
    </>
  );
}

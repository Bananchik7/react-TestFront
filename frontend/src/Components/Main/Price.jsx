import { list } from "../../Database/test-list.js";
import CheckPrice from "./CheckPrice.jsx";
import CheckPriceFour from "./CheckPriceFour.jsx";
import CheckPriceSale from "./CheckPriceSale.jsx";
import CheckPriceSaleFour from "./CheckPriceSaleFour.jsx";

export default function Price({ visibleNew, visibleOld }) {
  return (
    <>
      <div style={{ display: visibleOld }} className="flex mt-[10%]">
        <CheckPrice {...list[4]} text="Чтобы просто начать 👍🏻" />
        <CheckPrice {...list[5]} text="Привести тело впорядок 💪🏻" />
        <CheckPrice {...list[6]} text="Изменить образ жизни 🔥" />
      </div>
      <div style={{ display: visibleNew }} className="flex mt-[10%]">
        <CheckPriceSale
          {...list[0]}
          text="Чтобы просто начать 👍🏻"
          old={list[4].price}
          img="./sale-30.png"
        />
        <CheckPriceSale
          {...list[1]}
          text="Привести тело впорядок 💪🏻"
          old={list[5].price}
          img="./sale.png"
        />
        <CheckPriceSale
          {...list[2]}
          text="Изменить образ жизни 🔥"
          old={list[6].price}
          img="./sale-3.png"
        />
      </div>
      <div style={{ display: visibleOld }}>
        <CheckPriceFour
          {...list[7]}
          text="Всегда быть в форме и поддерживать своё здоровье ⭐️"
        />
      </div>
      <div style={{ display: visibleNew }}>
        <CheckPriceSaleFour
          {...list[3]}
          text="Всегда быть в форме и поддерживать своё здоровье ⭐️"
          old={list[7].price}
          img="./sale-70.png"
        />
      </div>
    </>
  );
}

import { useState } from "react";
import { list } from "../../Database/test-list.js";
import CheckPrice from "./CheckPrice.jsx";
import CheckPriceFour from "./CheckPriceFour.jsx";
import CheckPriceSale from "./CheckPriceSale.jsx";
import CheckPriceSaleFour from "./CheckPriceSaleFour.jsx";

export default function Price({ visibleNew, visibleOld }) {
  const [clickButton, setClickButton] = useState(null);

  function handleClick(type) {
    setClickButton(type);
  }

  return (
    <>
      <div style={{ display: visibleOld }} className="flex mt-[10%]">
        <CheckPrice
          {...list[4]}
          isActive={clickButton === "oneOld"}
          onClick={() => handleClick("oneOld")}
          text="Чтобы просто начать 👍🏻"
        />
        <CheckPrice
          {...list[5]}
          isActive={clickButton === "twoOld"}
          onClick={() => handleClick("twoOld")}
          text="Привести тело впорядок 💪🏻"
        />
        <CheckPrice
          {...list[6]}
          isActive={clickButton === "threeOld"}
          onClick={() => handleClick("threeOld")}
          text="Изменить образ жизни 🔥"
        />
      </div>
      <div style={{ display: visibleNew }} className="flex mt-[10%]">
        <CheckPriceSale
          {...list[0]}
          isActive={clickButton === "oneSale"}
          onClick={() => handleClick("oneSale")}
          text="Чтобы просто начать 👍🏻"
          old={list[4].price}
          img="./sale-30.png"
        />
        <CheckPriceSale
          {...list[1]}
          isActive={clickButton === "twoSale"}
          onClick={() => handleClick("twoSale")}
          text="Привести тело впорядок 💪🏻"
          old={list[5].price}
          img="./sale.png"
        />
        <CheckPriceSale
          {...list[2]}
          isActive={clickButton === "threeSale"}
          onClick={() => handleClick("threeSale")}
          text="Изменить образ жизни 🔥"
          old={list[6].price}
          img="./sale-3.png"
        />
      </div>
      <div style={{ display: visibleOld }}>
        <CheckPriceFour
          {...list[7]}
          isActive={clickButton === "fourOld"}
          onClick={() => handleClick("fourOld")}
          text="Всегда быть в форме и поддерживать своё здоровье ⭐️"
        />
      </div>
      <div style={{ display: visibleNew }}>
        <CheckPriceSaleFour
          {...list[3]}
          isActive={clickButton === "fourNew"}
          onClick={() => handleClick("fourNew")}
          text="Всегда быть в форме и поддерживать своё здоровье ⭐️"
          old={list[7].price}
          img="./sale-70.png"
        />
      </div>
    </>
  );
}

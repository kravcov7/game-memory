import { useState } from "react";
import s from "./container.module.css";
import moveCards from "../../utils/utils";
import Card from "../card/card";
import {arrayCards} from '../../utils/data'

function Container() {
  const [cards, setCards] = useState(() => moveCards(arrayCards.concat(arrayCards)));
  // const [openCards, setOpencards] = useState([]);

  return (
    <div className={s.cont}>
      <div className={s.container}>
        {cards.map((el, ind) => (
          <Card key={ind} el={el}/>
        ))}
      </div>
    </div>
  );
}

export default Container;

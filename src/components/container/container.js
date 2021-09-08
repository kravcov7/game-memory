import { useEffect, useState, useRef } from "react";
import s from "./container.module.css";
import moveCards from "../../utils/utils";
import Card from "../card/card";
import { arrayCards } from "../../utils/data";

function Container() {
  const [cards, setCards] = useState(() => moveCards(arrayCards.concat(arrayCards)));
  const [openCards, setOpencards] = useState([]);
  const [moves, setMoves] = useState(0);
  const timeout = useRef(null);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [matchedCards, setMatchedcards] = useState({});

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setMatchedcards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpencards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpencards([]);
    }, 500);
  };
  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
  const checkIsInactive = (card) => {
    return Boolean(matchedCards[card.type]);
  };

  const handleCardClick = (index) => {
    if(openCards.length === 1) {
     
      setOpencards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable()
    } else {      
      clearTimeout(timeout.current);
      setOpencards([index]);      
    }
  }

  return (
    <div className={s.cont}>
      <div className={s.container}>
        {cards.map((el, index) => (
          <Card key={index} el={el} onClick={handleCardClick} index={index} isDisabled={shouldDisableAllCards} isInactive={checkIsInactive(el)} isFlipped={checkIsFlipped(index)} />
        ))}
      </div>
    </div>
  );
}

export default Container;

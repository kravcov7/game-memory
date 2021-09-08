import s from "./card.module.css";
import background from "../../image/background.jpg";
import cn from "classnames";

function Card({ el, onClick, index, isInactive, isFlipped, isDisabled }) {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={cn(s.card, {
        [s['is-flipped']]: isFlipped,
        [s['is-inactive']]: isInactive,
      })}
      onClick={handleClick}
    >
      <div className={cn(s.card1, s['card1-front'])}>
        <img src={background} alt="front" className={s.img} />
      </div>
      <div className={cn(s.card1, s["card1-back"])}>
        <img src={el.image} alt="front" className={s.img} />
      </div>
    </div>
  );
}

export default Card;

import s from "./card.module.css";

function Card({ el }) {
  console.log(el);
  return (
    <div className={s.card}>
      {/* <div className={s.card1}>
        <img src={el.image} alt="front" className="img" />
      </div> */}
      <div className={s.card1}>
        <img src={el.image} alt="front" className={s.img} />
      </div>
    </div>
  );
}

export default Card;

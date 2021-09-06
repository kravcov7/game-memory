import s from "./container.module.css";

function Container() {
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className={s.cont}>
      <div className={s.container}>
        {card.map((el) => (
          <div className={s.card}> {el}</div>
        ))}
      </div>
    </div>
  );
}

export default Container;

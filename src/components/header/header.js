import s from "./header.module.css";

function Header() {
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <header className={s.header}>
      <h1>Игра Память</h1>
    </header>
  );
}

export default Header;

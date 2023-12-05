import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__wrapper">
        <li>
          <button className="nav__icon">&#9829;</button>
          <button className="nav__menu">메뉴 항목</button>
        </li>
        <li>
          <button className="nav__icon">&#9829;</button>
          <button className="nav__menu">메뉴 항목</button>
        </li>
        <li>
          <button className="nav__icon">&#9829;</button>
          <button className="nav__menu">메뉴 항목</button>
        </li>
      </ul>
    </nav>
  );
}

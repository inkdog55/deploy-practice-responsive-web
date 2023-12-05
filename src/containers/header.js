import PreventDefaultForm from "@/components/preventDefaultForm";
import styles from "./header.module.css";
import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__start">
          <button className="header__hamburger">&#9776;</button>
          <span className="header__title">YooTube</span>
        </h1>
        <div className="header__center">
          <PreventDefaultForm className="header__form">
            <input
              className="header__input--text"
              placeholder="보고싶은 동영상"
            />
            <button className="header__input--button">검색</button>
          </PreventDefaultForm>
        </div>
        <div className="header__end">
          <button className="header__search">&#128269;</button>
          <div className="header__profile"></div>
        </div>
      </div>
    </header>
  );
}

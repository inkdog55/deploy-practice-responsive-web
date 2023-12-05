"use client";

export default function PreventDefaultForm({ children }) {
  const ClickEvent = (event) => {
    event.preventDefault(); // HTML의 submit 관련 고유 동작 중단시키기

    // AJAX 요청하기
  };
  return (
    <form
      className="header__form"
      onSubmit={ClickEvent}
    >
      {children}
    </form>
  );
}

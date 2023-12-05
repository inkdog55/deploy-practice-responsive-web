"use client";

import "./thumbs.css";

const Thumbs = () => {
  const thumbsLoop = (thumb) => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      return arr.push(<Thumb key={i} />);
    }
    // return arr;
  };

  const 컴포넌트들 = [];

  for (let i = 0; i < 12; i++) {
    컴포넌트들.push(<Thumb key={i} />);
  }

  const arrForLoop = new Array(12).fill(null);

  return (
    <section className="thumbs">
      <div className="thumbs__wrapper">
        {arrForLoop.map((a, i) => {
          return <Thumb key={i} />;
        })}
        {/* {컴포넌트들} */}
      </div>
    </section>
  );
};

const Thumb = () => {
  return (
    <div className="thumbs__item">
      <img
        className="thumbs__thumbnail"
        src="/cm28002070.jpg"
      />
      <div className="thumbs__info">
        <div className="thumbs__profile" />
        <div className="thumbs__text">
          <h3 className="thumbs__text--title">영상 제목</h3>
          <p className="thumbs__text--owner">게시자</p>
          <p className="thumbs__text--anal">조회수 100회 &#183; 1시간 전</p>
        </div>
      </div>
    </div>
  );
};

export default Thumbs;

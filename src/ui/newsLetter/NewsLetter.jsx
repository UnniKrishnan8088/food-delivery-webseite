import "./newsLetter.scss";

export default function NewsLetter() {
  return (
    <div className="news__letter__container">
      <div className="bg__img">
        <img src="/assets/burger.png" alt="" />
      </div>
      <div className="inner__wrapper">
        <h3>Subcribe To Our Newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus
          mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra
          turpis id ac. Amet faucibus tempus.
        </p>
        <div className="input__container">
          <input type="text" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

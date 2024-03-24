import "./working.scss";

export default function Working() {
  return (
    <div className="working__process__container">
      <p className="sub-h">How To Work</p>
      <h3 className="main-h">Food Us An Important Part Of A Balanced Diet</h3>
      <div className="working">
        <div className="working__process">
          <img src="/computer.png" alt="" />
          <h4>
            <span>CHOOSE</span>
            <div className="circle"></div>
          </h4>
          <p>
            Do you want to lose weight, exercise, adhere to a therapeutic diet?
            Our dietitian will help you with choosing the right program!
          </p>
        </div>
        <div className="working__process">
          <img src="/Fried-Chicken.png" alt="" className="for__mob" />
          <h4>
            <div className="circle"></div>
            <span>PREPARE FOOD</span>
            <div className="circle"></div>
          </h4>
          <p>
            Do you want to lose weight, exercise, adhere to a therapeutic diet?
            Our dietitian will help you with choosing the right program!
          </p>
          <img src="/Fried-Chicken.png" alt="" className="for__web" />
        </div>
        <div className="working__process">
          <img src="/packes.png" alt="" />
          <h4>
            <div className="circle"></div>
            <span>DELIVER</span>
          </h4>
          <p>
            Do you want to lose weight, exercise, adhere to a therapeutic diet?
            Our dietitian will help you with choosing the right program!
          </p>
        </div>
      </div>
    </div>
  );
}

import "./Plans.css";
import { plansData } from "../../data/plansData";
import witeTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans-container">
      <div className="progrmas-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature">
                      <img src={witeTick} alt="" />
                      <span key={i}></span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;

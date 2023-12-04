import { MdHighQuality } from "react-icons/md";
import { TbHealthRecognition, TbTruckDelivery } from "react-icons/tb";

import "./ourServices.scss";

export default function OurServices() {
  return (
    <div className="our__services">
      <p>Services</p>
      <h3>Why Choose Our Favorite Food</h3>
      <div className="service__cards">
        <div className="card">
          <div className="details">
            <h3>
              <MdHighQuality />
            </h3>
            <h4>Qualityfull Food</h4>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasur and prasising pain was bron.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="details">
            <h3>
              <TbHealthRecognition />
            </h3>
            <h4>Healthy Food</h4>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasur and prasising pain was bron.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="details">
            <h3>
              <TbTruckDelivery />
            </h3>
            <h4>Fast Delivery</h4>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasur and prasising pain was bron.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import icon1 from "../images/home/icon1.png";
import icon2 from "../images/home/icon2.png";
import icon3 from "../images/home/icon3.png";

function Discription() {
  return (
    <>
      <section id="description">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-4 text-center padding wow fadeIn"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="single-service">
                <div
                  className="wow scaleIn"
                  data-wow-duration="500ms"
                  data-wow-delay="300ms"
                >
                  <img src={icon1} alt="" />
                </div>
                <h2>REAL NFT ASSETS</h2>
                <p>
                  The icat pet is a NFT assets store on internet computer, which
                  is will never lost and free tradeable.
                </p>
              </div>
            </div>
            <div
              className="col-sm-4 text-center padding wow fadeIn"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              <div className="single-service">
                <div
                  className="wow scaleIn"
                  data-wow-duration="500ms"
                  data-wow-delay="600ms"
                >
                  <img src={icon2} alt="" />
                </div>
                <h2>GROWABLE ASSETS</h2>
                <p>
                  As you play the game and take care of your cat, the cat will
                  be more healthy, happy productively, means more valueable.
                </p>
              </div>
            </div>
            <div
              className="col-sm-4 text-center padding wow fadeIn"
              data-wow-duration="1000ms"
              data-wow-delay="900ms"
            >
              <div className="single-service">
                <div
                  className="wow scaleIn"
                  data-wow-duration="500ms"
                  data-wow-delay="900ms"
                >
                  <img src={icon3} alt="" />
                </div>
                <h2>UNIQUE ASSETS</h2>
                <p>
                  Every cat has different features, as color, gender, skills,
                  etc, and each cat are created by our desiners manually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discription;
